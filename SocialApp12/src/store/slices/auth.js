import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database'
import { firebase_db } from '../../database';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const signUp = (data) => async(dispatch) => {
    const {name, instaUserName, bio, email, password, country, image} = data
    
    auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
        console.log(data);

        database(firebase_db)
        .ref('/users/'+data.user.uid)
        .set({
            name,
            instaUserName,
            country,
            image,
            bio,
            uid: data.user.uid
        })
        .then(()=> console.log("Data set Success"))

        Snackbar.show({
            text:"Account created",
            textColor:"white",
            backgroundColor:"#1b262c"
        })

    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text: "Signup failed",
            textColor: "White",
            backgroundColor: "red"
        })
    })
}


export const signIN = (data) => async(dispatch) => {
   
    const {email, password} = data

    auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
        console.log("Sign in success");
        Snackbar.show({
            text:"Account signin",
            textColor:"white",
            backgroundColor:"#1b2b2c"
        })
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text: "Signin failed",
            textColor:"white",
            backgroundColor:"red"
        })
    })
}

export const signOut = () => async(dispatch) => {

    auth()
    .signOut()
    .then(()=>{
        console.log("signout success");
        Snackbar.show({
            text:"SignOut Successful",
            textColor:"white",
            backgroundColor:"#1b2b2c"
        })
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text: "SignOut failed",
            textColor:"white",
            backgroundColor:"red"
        })
    })



}


const initialState = {
    user:null,
    loading: true,
    isAuthenticated: false
}

const AUTH = createSlice({
    name:'AUTH',
    initialState,
    reducers:{
        
    },
    extraReducers: builder => {
        builder
        .addCase()
    }


})


