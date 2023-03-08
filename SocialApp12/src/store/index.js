import { configureStore } from "@reduxjs/toolkit";
import { authState } from "./slices/auth";
import { postState } from "./slices/post";


const store = configureStore({
    reducer:{
        authState:authState.reducer,
        postState:postState.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
})


export default store;