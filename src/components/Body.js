import React, { useEffect } from 'react'
import Login from './Login/Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
import CartPage from './Cart/CartPage'
import Navbar from './Home/Navbar'
import RestaurentDetails from './Restaurants/RestaurentDetails'
import Payment from './Payment/Payment'
import PaymentSuccessFull from './Payment/PaymentSuccessFull'
import ScrollToTopOnMount from './ScrollToTopOnMount'

const Body = () => {
    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "cartzila",
            element: <Browse />,

        },
        {

            path: "cart",
            element: <CartPage />

        },
        {
            path: "restaurent/:id/:name",
            element: <RestaurentDetails />
        },
        {
            path: "payment",
            element: <Payment />
        },
        {
            path: "order-success",
            element: <PaymentSuccessFull />
        }
    ])

    //
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))

                // ...
            } else {
                // User is signed out
                dispatch(removeUser())

            }
        });
    }, [])
    return (
        <div>
            <ScrollToTopOnMount />
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body