import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useDispatch, connect, useSelector} from 'react-redux';

import AddPost from './screens/AddPost';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
import CustomHeader from './layout/CustomHeader';

import {SET_USER, IS_AUTHENTICATED} from './store/slices/auth';

import EmptyContainer from './components/EmptyContainer';
import {askPermission} from './utils/AskPermission';
import {firebase_db} from './database';

const Stack = createStackNavigator();

const Index = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authState);

  const onAuthStateChanged = user => {
    if (authState.user) {
      dispatch(IS_AUTHENTICATED(true));

      firebase.app().database(firebase_db)
        .ref(`/users/${user._user.id}`)
        .on('value', snapshot => {
          console.log('USER DETAILS', snapshot.val());
          dispatch(SET_USER(snapshot.val()));
        });
    } else {
      dispatch(IS_AUTHENTICATED(false));
    }
  };
  

  useEffect(() => {
    askPermission();
  },[]);


  // if (authState.loading) {
  //   return <EmptyContainer />;
  // }

  return (
    <>
      <NavigationContainer>
         <Stack.Navigator
          screenOptions={{
            header: props => <CustomHeader {...props} 
          />,
          }}>
          {authState.isAuthenticated ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddPost" component={AddPost} />
            </>
          ) : (
            <> 
             <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )}
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
};

export default Index;

