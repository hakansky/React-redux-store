import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        productsInCart: JSON.parse(localStorage.getItem('shoppingCart')) || []
    },
    reducers: {
        addProductToCart (state, action) {
            let {id} = action.payload;
            let productInCart = {...action.payload, counter: 1};

            const isProductInCart = state.productsInCart.some(product => product.id === id);

            const updatedCart = isProductInCart
                ? state.productsInCart.map(product =>
                    product.id === id ? { ...product, counter: product.counter + 1 } : product
                )
                : [...state.productsInCart, productInCart];

            state.productsInCart = updatedCart;
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
        },

        removeProductFromCart (state, action) {
            const { id } = action.payload;
            const updatedCart = state.productsInCart.filter(product => product.id !== id);
            state.productsInCart = updatedCart;
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
        },

        IncrementCounter (state, action) {
            const { id } = action.payload;
            const updatedCart = state.productsInCart.map(product =>
                product.id === id ? { ...product, counter: product.counter + 1 } : product
            );
            state.productsInCart = updatedCart;
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
        },

        DecrementCounter (state, action) {
            const { id } = action.payload;
            const updatedCart = state.productsInCart.map(product =>
                product.id === id && product.counter > 1 ? { ...product, counter: product.counter - 1 } : product
            ).filter(product => product.counter > 0);
            state.productsInCart = updatedCart;
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
        }
    }
})

export const {addProductToCart, removeProductFromCart, IncrementCounter, DecrementCounter} = shoppingCartSlice.actions;
export const selectCartLength = state =>
    state.shoppingCart.productsInCart.reduce((total, product) => total + product.counter, 0);
export default shoppingCartSlice.reducer