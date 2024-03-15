import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import "./Payment.css"
import Navbar from '../Home/Navbar'
import Footer from '../Footer'
import Address from './Address'
import { getCartTotal } from '../../utils/cartSlice'

const Payment = () => {
    const [payment, setPayment] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cart, totalPrice } = useSelector(store => store.allCart)
    useEffect(() => {
        dispatch(getCartTotal())

    }, [cart])
    const handleClick = () => {
        navigate("/paymentSuccessfull")
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid payment">
                <div className="row">
                    <div className="col-md-6">
                        <Address />
                    </div>
                    <div className="col-md-6">
                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <h2 className="text-center mb-4">Payment Details</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label for="inputName" className="form-label">Cardholder Name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="Enter cardholder name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputCardNumber" className="form-label">Card Number</label>
                                            <input type="text" className="form-control" id="inputCardNumber" placeholder="Enter card number" required />
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="inputExpDate" className="form-label">Expiration Date</label>
                                                    <input type="text" className="form-control" id="inputExpDate" placeholder="MM/YY" required />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="inputCVV" className="form-label">CVV</label>
                                                    <input type="text" className="form-control" id="inputCVV" placeholder="CVV" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputZip" className="form-label">ZIP Code</label>
                                            <input type="text" className="form-control" id="inputZip" required />
                                        </div>
                                        <h4>Total amount : <span className=' text-danger px-2'>{totalPrice} Rs.</span></h4>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Pay Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Payment