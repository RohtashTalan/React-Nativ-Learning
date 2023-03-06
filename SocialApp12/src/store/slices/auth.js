import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {firebase} from '@react-native-firebase/database'
import { firebase_db } from '../../database';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const signUp = createAsyncThunk("authState/signUP" , async (data) =>  {
    const {name, instaUserName, bio, email, password, country, image} = data
    
    auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
        firebase.app().database('https://instatest-f9323-default-rtdb.asia-southeast1.firebasedatabase.app')
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

        return data

    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text: "Signup failed",
            textColor: "White",
            backgroundColor: "red"
        })
    })
}) 

export const signIN = createAsyncThunk("authState/signIN" , async (data) => {
   
    const {email, password} = data

   const response = await auth().signInWithEmailAndPassword(email, password)
   console.log("Sign in success", response);
       return response.user
})

export const signOut = createAsyncThunk("authState/signOut" ,() => {

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



})


const initialState = {
    user: null,
    loading: true,
    isAuthenticated: false
};


const authState = createSlice({
    name: "authState",
    initialState,
    reducers:{
        SET_USER(state, action){
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        },
        IS_AUTHENTICATED(state, action){
            return{
                ...state,
                isAuthenticated:action.payload,
                loading:false
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
          state.user = action.payload
          state.loading = false;
          state.isAuthenticated = true
        })
        .addCase(signIN.fulfilled, (state, action) => {
            console.log("signin reducer...", action);
            state.user = action.payload
            state.loading = false;
            state.isAuthenticated = true
        })
        .addCase(signOut.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false;
            state.isAuthenticated = false
        })
      },
})


export {authState};
export const {SET_USER, IS_AUTHENTICATED} = authState.actions;