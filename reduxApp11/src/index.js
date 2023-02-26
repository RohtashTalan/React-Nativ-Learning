import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {addSeason} from "./store/slices/list"
import { useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




// // bring all screens
// import Home from './screens/Home';
// import Add from './screens/Add.js';
// import Edit from './screens/Edit.js';

import Home from './screens/Home'

const Stack = createStackNavigator();
const index = () => {


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen  
       name="Home"
       component={Home}
       options={{
        headerStyle:{
          backgroundColor: "#0f4c75"
        },
        title: 'Rohtash Netflix App',
        headerTitleStyle:{
          color: "#cc6262",
          textAlign: 'center'
        }
        

       }}
       >

      </Stack.Screen> */}
      {/* <Stack.Screen  
       name="Edit"
       component={Edit}
       options={{
        headerStyle:{
          backgroundColor: "#0f4c75"
        },
        title: 'Rohtash Netflix App',
        headerTitleStyle:{
          color: "#cc6262",
          textAlign: 'center'
        }
        

       }}
       >

      </Stack.Screen>
      <Stack.Screen  
       name="Add"
       component={Add}
       options={{
        headerStyle:{
          backgroundColor: "#0f4c75"
        },
        title: 'Rohtash Netflix App',
        headerTitleStyle:{
          color: "#cc6262",
          textAlign: 'center'
        }
        

       }}
       >

      </Stack.Screen> */}

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})