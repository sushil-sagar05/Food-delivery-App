import {createSlice} from '@reduxjs/toolkit'
const CartSlice = createSlice({
    name : "cart",
    initialState : {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
           const exitingItem = state.cart.find((item) => item.id === action.payload.id)
           if(exitingItem){
          state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty: item.qty + 1}: item)
           } else{ state.cart.push(action.payload);}
           
        },  
        removeFromCart: (state, action) => {
           state.cart = state.cart.filter((item) => (item.id !== action.payload.id));
        },
        incrementQty: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty +1} : item)
        },
        decrementQty: (state,action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty -1} : item)
        },
        clearCart: (state,action) => {
            state.cart = []
        }
    }
})
export const {addToCart, removeFromCart,incrementQty,decrementQty,clearCart} = CartSlice.actions;
export default CartSlice.reducer;