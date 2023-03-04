import { configureStore } from "@reduxjs/toolkit";
import { authState } from "./slices/auth";
import { postState } from "./slices/post";


const store = configureStore({
    reducer:{
        authState:authState.reducer,
        postState:postState.reducer
    },
    
})


export default store;