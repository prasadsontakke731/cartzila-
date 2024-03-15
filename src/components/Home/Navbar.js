import React, { useEffect } from 'react'
import { Link, useNavigate, Outlet } from "react-router-dom"
import "./Navbar.css"
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useSelector, useDispatch } from "react-redux"
import { getCartTotal } from '../../utils/cartSlice';
const Navbar = () => {
    // 
    const { cart, totalQuantity } = useSelector(store => store.allCart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    // 
    const navigate = useNavigate()


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });

    }
    const handleCart = () => {
        navigate("/cart")
    }
    return (

        <>
            <nav class="navbar navbars navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to={"/cartzila"}><h4 className='ms-5 mt-1 '>C<span className='text-danger fst-italic'>a</span>r<span className='text-primary fst-italic'>t</span>Z<span className='text-danger fst-italic'>il</span>la</h4></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                Language
                            </li>
                            <li class="nav-item">
                                <p className='' onClick={handleSignOut} >Sign Out</p>
                            </li>
                            <li class="nav-item" onClick={handleCart}>

                                <i class="fa-solid fa-cart-plus fs-4 text-success">
                                    <span className='text-danger ms-1'>{cart.length}</span>
                                </i>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar