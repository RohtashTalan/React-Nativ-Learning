import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import 'react-native-gesture-handler'
import auth  from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useDispatch, connect } from 'react-redux'


import AddPost from './screens/AddPost'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Home from './screens/Home'
import CustomHeader from './layout/CustomHeader'


import {SET_USER, IS_AUTHENTICATED} from './store/slices/auth';

import EmptyContainer from './components/EmptyContainer'
import AskPermission from './utils/AskPermission'
import { firebase_db } from './database'

const Stack = createStackNavigator();



const Index = ({authState}) => {
  const dispatch = useDispatch();


  const onAuthStateChanged = (user) => {

     if(user){
      dispatch({
        payload: true
      })
      console.log(user);

     database(firebase_db)
     .ref(`/user/${user._user.id}`)
     .on('value', (snapshot)=>{
      console.log('USER DETAILS', sna
      .val());
      dispatch(SET_USER(snapshot.val()))
     })
     }else{
      dispatch(IS_AUTHENTICATED(false))
     }

  
  useEffect(() => {
    AskPermission();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  })   


  }


  if(authState.loading){
    return <EmptyContainer />
  }

  return (
    <>
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      header:(props) => <CustomHeader {...props} />
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Index

const styles = StyleSheet.create({})