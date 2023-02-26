import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid'

const getList = async () => {
    return await AsyncStorage.getItem('@season_list').then((response) => {
      if(response){
        return response.json()
      }
    }).catch((err) => {
      console.error(err);
      return []
    })
   

  }

const setList = async (seasons) => {
    try {
        await AsyncStorage.setItem('@season_list', JSON.stringify(seasons))
    }
    catch(error){
        console.log(error);
    }
}

const list = createSlice({
    name: "List",
    initialState: [],
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
            state.push(seasonToAdd);
            setList(state);
        },
        removeSeason(state, action){
            const newList = state.filter((list) => list.id !== action.payload);
            return newList;
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

              state.map((list)=>{
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
            state.map((list)=>{
                if(list.id === action.payload){
                  list.isWatched = !list.isWatched
                }
                return list
               });
              //  setList(state)
        },
    }
})



export {list};
export const {addSeason, removeSeason, updateSeason, markCompleteSeason} = list.actions;