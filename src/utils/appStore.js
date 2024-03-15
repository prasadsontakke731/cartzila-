import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        allCart: cartReducer
    }
})

export default appStore