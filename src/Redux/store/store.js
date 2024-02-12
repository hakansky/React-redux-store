import {configureStore} from "@reduxjs/toolkit";
import latestOffersReducer from "../reducers/latestOffersReducer";
import shopReducer from "../reducers/shopReducer";
import productInfoReducer from "../reducers/productInfoReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";

let store = configureStore({
    reducer: {
        latestOffers: latestOffersReducer,
        shop: shopReducer,
        productInfo: productInfoReducer,
        shoppingCart: shoppingCartReducer,
    }
})

export default store;