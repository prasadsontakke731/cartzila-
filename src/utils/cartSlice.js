import { createSlice } from "@reduxjs/toolkit"
import { Fooddata } from "./constants";

const initialState = {
    cart: [],
    items: Fooddata,
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {
                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("cartTotal" + cartTotal);
                    console.log("cartItem" + cartItem);

                    const { price, quantity } = cartItem
                    console.log(price, quantity);

                    const itemsTotal = price * quantity
                    cartTotal.totalPrice += itemsTotal;
                    cartTotal.totalQuantity += quantity

                    return cartTotal
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        removerAllItems: (state, action) => {
            state.cart = []
        },
        increaseItemQuantity: (state, action) => {
            if (state.items.length > 0) {
                state.cart = state.cart.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            } else {
                state.items = 0
            }
        },
        decreaseItemQuantity: (state, action) => {
            if (state.items.length > 0) {
                state.cart = state.cart.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            } else {
                state.cart = []
            }
        }
    }
})

export const { addToCart, decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem, removerAllItems } = cartSlice.actions
export default cartSlice.reducer