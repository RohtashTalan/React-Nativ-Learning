import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid'

const getList = async () => {
    const storedValue = await AsyncStorage.getItem('@season_list');
    const prevList = await JSON.parse(storedValue);
    if(prevList){
     return prevList;
    } else{
        return []
    }
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
    initialState: getList(),
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
            const newList = state.filter((list) => list.id !== action.payload.id);
            state = newList;
            setList(newList);
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
            state.map((list)=>{
                if(list.id === action.payload.id){
                  list.isWatched = !list.isWatched
                }
                return list
               });
               setList(state)
        },
    }
})



export {list};
export const {addSeason, removeSeason, updateSeason, markCompleteSeason} = list.actions;