import database from "@react-native-firebase/database";
import { firebase_db } from "../../database";
import { SET_POST,ERROR_POST } from "./action.types";

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