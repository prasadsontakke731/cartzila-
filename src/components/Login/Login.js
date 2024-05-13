import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux"
import "./Login.css"
import { checkValidData } from '../../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from "react-router-dom"
import { addUser } from '../../utils/userSlice';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)



    // 
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    // 
    const handleButtonClick = () => {
        //validate the form data
        // console.log(email.current.value, password.current.value);
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return;
        // sign in sign up logic

        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/cartzila")
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName
                            })
                        )

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    })

                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setErrorMessage(errorCode + "-" + errorMessage)
                })
        } else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    navigate("/cartzila")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }
    }
    return (

        <form onSubmit={(e) => e.preventDefault()} className='page '>
            <div className='cover'>
                <h1 className='text-primary font-bold text-3xl py-4'>{!isSignInForm ? "Sign Up" : "Sign In"}</h1>
                {
                    !isSignInForm && <input type="text" placeholder='Name' />
                }
                <input type="email" ref={email} placeholder='prasad@gmail.com' />
                <input type="password" ref={password} placeholder='e.g Prasad@1302' />
                <p className='text-danger fw-bold me-auto ms-5'>{errorMessage}</p>
                <button className="login-btn " onClick={handleButtonClick}>{!isSignInForm ? "Sign Up" : "Sign In"}</button>
                <p className='py-4 pointer-event text-primary' onClick={toggleSignInForm}>
                    {!isSignInForm ? "Already Registered Sign In now..." : "New To CartZilla? Sign up Now"}
                </p>

            </div>
        </form>

    )
}

export default Login