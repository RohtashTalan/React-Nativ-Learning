import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid'

export const getList = createAsyncThunk("List/getList", async () => {return await AsyncStorage.getItem('@season_list').then((response) => (JSON.parse(response))).catch((err)=>{console.log(err)})}) 

const setList = async (seasons) => {
    try {
        await AsyncStorage.setItem('@season_list', JSON.stringify(seasons))
    }
    catch(error){
        console.log(error);
    }
}
const initialState = {
  data: [],
  loading: false,
}


const list = createSlice({
    name: "List",
    initialState,
    reducers:{
        addSeason(state, action){
            if(!action.payload.name || !action.payload.totalNoSeason){
                return alert("please add both filds")
              }
            const seasonToAdd = {
                id: shortid.generate(),
                name: action.payload.name,
                totalNoSeason: action.payload.totalNoSeason,
                isWatched: false,
              }
              state.data.push(seasonToAdd);
            setList(state);
        },
        removeSeason(state, action){
            const newList = state.data.filter((list) => list.id !== action.payload);
            setList(newList);
            state.data = newList;
        },
        updateSeason(state, action){
            if(!action.payload.name || !action.payload.totalNoSeason){
                return alert("please add both filds")
              }
            const seasonToUpdate = {
                id: action.payload.id,
                name: action.payload.name,
                totalNoSeason: action.payload.totalNoSeason,
                isWatched: action.payload.isWatched,
              }

              state.data.map((list)=>{
                if(list.id === seasonToUpdate.id){
                  list.name = seasonToUpdate.name;
                  list.totalNoSeason = seasonToUpdate.totalNoSeason;
                }
                return list
               })
               setList(state);
        },
        markCompleteSeason(state, action){
          console.log(action.payload, "........markcomplete");
            state.data.map((list)=>{
                if(list.id === action.payload){
                  list.isWatched = !list.isWatched
                }
                return list
               });
               setList(state)
        },
    },
    extraReducers:{
      [getList.pending]: (state) => {
        state.loading = true;
      },
      [getList.fulfilled]: (state , { payload }) => {
        state.data = payload.data;
        state.loading = false;
      },
      [getList.pending]: (state, { payload }) => {
        state.loading = false
      }
    }
})



export {list};
export const {addSeason, removeSeason, updateSeason, markCompleteSeason} = list.actions;