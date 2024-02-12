import {createSlice} from "@reduxjs/toolkit";

const latestOffersSlice = createSlice({
    name: 'latestOffers',
    initialState: {
        latestOffersState: []
    },
    reducers: {
        setLatestOffers (state, action) {
            return {...state, latestOffersState: [...action.payload]}
        }
    }
})

export const {setLatestOffers} = latestOffersSlice.actions;

export default latestOffersSlice.reducer;