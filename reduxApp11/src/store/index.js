import { configureStore } from "@reduxjs/toolkit";
import {list } from  "./slices/list";



const store = configureStore({
    reducer:{
        seasonList:list.reducer
    }
})


export default store;