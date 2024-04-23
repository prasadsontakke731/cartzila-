import React, { useEffect } from 'react'
import { Link, useNavigate, Outlet } from "react-router-dom"
import "./Navbar.css"
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useSelector, useDispatch } from "react-redux"
import { getCartTotal } from '../../utils/cartSlice';
import lang from '../../utils/languageConstants';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';
import { changeLanguage } from '../../utils/configSlice';
const Navbar = () => {

    // 
    const { cart, totalQuantity } = useSelector(store => store.allCart)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const langKey = useSelector(store => store.config.lang)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    // 


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
    const handleLanguageChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value))
    }
    return (

        <>
            <nav className="navbar navbars navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to={"/cartzila"}><h4 className='ms-5 mt-1 '>C<span className='text-danger fst-italic'>a</span>r<span className='text-primary fst-italic'>t</span>Z<span className='text-danger fst-italic'>il</span>la</h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {/* <div className="dropdown">
                                    <button className="language" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {lang.hindi.language}
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li className='text-center m-1 w-auto border border-black py-1 '>मराठी</li>
                                        <li className='text-center m-1 w-auto border border-black py-1 '>हिंदी</li>
                                        <li className='text-center m-1 w-auto border border-black py-1 '>English</li>
                                    </ul>
                                </div> */}
                                <select className='select' onChange={handleLanguageChange}>
                                    {
                                        SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                                    }


                                </select>
                            </li>
                            <li className="nav-item">
                                <p className='' onClick={handleSignOut} >{lang[langKey].signout}</p>
                            </li>
                            <li className="nav-item" onClick={handleCart}>

                                <i className="fa-solid fa-cart-plus fs-4 text-white">
                                    <span className='text-white ms-1'>{cart.length}</span>
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