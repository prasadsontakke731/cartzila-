import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
const LazyLogin = React.lazy(() => import("./Login/Login"))
const LazyBrowse = React.lazy(() => import("./Browse"))
const LazyCartPage = React.lazy(() => import("./Cart/CartPage"))
const LazyPayment = React.lazy(() => import("./Payment/Payment"))
const LazyScrollToTopOnMount = React.lazy(() => import("./ScrollToTopOnMount"))
const LazyPaymentSuccessFull = React.lazy(() => import("./Payment/PaymentSuccessFull"))
const LazyRestaurentDetails = React.lazy(() => import("./Restaurants/RestaurentDetails"))


const Body = () => {
    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:
                <React.Suspense>
                    <LazyLogin />
                </React.Suspense>
        },
        {
            path: "cartzila",
            element: <React.Suspense>
                <LazyBrowse />
            </React.Suspense>,

        },
        {

            path: "cart",
            element: <React.Suspense>
                <LazyCartPage />
            </React.Suspense>

        },
        {
            path: "restaurent/:id/:name",
            element: <React.Suspense>
                <LazyRestaurentDetails />
            </React.Suspense>
        },
        {
            path: "payment",
            element: <React.Suspense>
                <LazyPayment />
            </React.Suspense>
        },
        {
            path: "order-success",
            element: <React.Suspense>
                <LazyPaymentSuccessFull />
            </React.Suspense>
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
            <React.Suspense>
                <LazyScrollToTopOnMount />
            </React.Suspense>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body