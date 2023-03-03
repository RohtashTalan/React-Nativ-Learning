import database from "@react-native-firebase/database";
import { firebase_db } from "../../database";


export const getPosts = () => async(dispatch) => {

    try {
        database(firebase_db)
        .ref('/posts/')
        .on('value', (snapshot) => {
            console.log('User Data: ', snapshot.val());
            if(snapshot.val()){
                dispatch({
                    payload: Object.values(snapshot.val())
                })
            }else{
                dispatch(SET_POST([]))
            }

        })

    } catch (error) {
        console.log(error);

    }
}