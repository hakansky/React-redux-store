import {createSlice} from "@reduxjs/toolkit";

const productInfoSlicer = createSlice({
    name: 'productInfo',
    initialState: {
        product: {}
    },
    reducers: {
        setProduct (state, action) {
            return {...state, product: {...action.payload}}
        }
    }
})

export const {setProduct} = productInfoSlicer.actions;

export default productInfoSlicer.reducer;