import { createSlice } from "@reduxjs/toolkit";


const list = createSlice({
    name: "List",
    initialState:[],
    reducers:{
        addSeason(state, action){
            state.push(action.payload);
        },
        removeSeason(state, action){},
        updateSeason(state, action){},
        markCompleteSeason(state, action){},
    }
})



export {list};
export const {addSeason, removeSeason, updateSeason, markCompleteSeason} = list.actions;