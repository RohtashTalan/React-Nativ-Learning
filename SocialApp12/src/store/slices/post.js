import database from "@react-native-firebase/database";
import { firebase_db } from "../../database";
import { createSlice } from '@reduxjs/toolkit';

export const getPosts = () => async(dispatch) => {

    try {
        database(firebase_db)
        .ref('/posts/')
        .on('value', (snapshot) => {
            console.log('User Data: ', snapshot.val());
            if(snapshot.val()){
                dispatch({
                    type:SET_POST,
                    payload: Object.values(snapshot.val())
                })
            }else{
                dispatch({
                    type:ERROR_POST
                })
            }

        })

    } catch (error) {
        console.log(error);

    }
}




const initialState = {
    posts: null,
    loading: true,
    error: false
}


const postState = createSlice({
    name: "postState",
    initialState,
    reducers:{
        SET_POST(state, action){
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false
            }
        },
        ERROR_POST(state, action){
            return {
                ...state,
                error: true
            }
        },
    },
})


export {postState};
export const {SET_POST, ERROR_POST} = postState.actions;