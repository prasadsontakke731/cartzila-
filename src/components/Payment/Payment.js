import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from "react-redux"
import "./Payment.css"
import Navbar from '../Home/Navbar'
import Footer from '../Footer'
import { getCartTotal, removerAllItems } from '../../utils/cartSlice'

const Payment = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //form validatation
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({});
    //
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (!formData.state.trim()) {
            newErrors.state = 'State is required';
        }

        const zipRegex = /^[0-9]{6}$/;
        if (!zipRegex.test(formData.zip.trim())) {
            newErrors.zip = 'Invalid ZIP code';
        }

        if (!formData.cardHolderName.trim()) {
            newErrors.cardHolderName = 'Card holder name is required';
        }

        const cardNumberRegex = /^[0-9]{16}$/;
        if (!cardNumberRegex.test(formData.cardNumber.trim())) {
            newErrors.cardNumber = 'Invalid card number';
        }

        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryDateRegex.test(formData.expiryDate.trim())) {
            newErrors.expiryDate = 'Invalid expiry date';
        }

        const cvvRegex = /^[0-9]{3}$/;
        if (!cvvRegex.test(formData.cvv.trim())) {
            newErrors.cvv = 'Invalid CVV';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const { cart, totalPrice } = useSelector(store => store.allCart)
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    const handleClick = (e) => {
        e.preventDefault()

        if (validateForm()) {

            navigate("/order-success")
            dispatch(removerAllItems())
            console.log('Form submitted:', formData);
            toast.success('Payment Successfull!', {

            });


            // You can submit the form data to your backend or perform any other actions here
        }
    }
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <div className="container-fluid payments">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <h2 className="text-center mb-4">Delivery Address</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label for="inputName" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="Enter your name" required name="name" value={formData.name} onChange={handleChange} />
                                            {errors.name && <span className='text-danger fw-bold'>{errors.name}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputAddress" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required name="address" value={formData.address} onChange={handleChange} />
                                            {errors.address && <span className='text-danger fw-bold'>{errors.address}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputCity" className="form-label">City</label>
                                            <input type="text" className="form-control" id="inputCity" required name="city" value={formData.city} onChange={handleChange} />
                                            {errors.state && <span className='text-danger fw-bold'>{errors.city}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputState" className="form-label">State</label>
                                            <input type="text" className="form-control" id="inputState" required name="state" value={formData.state} onChange={handleChange} />
                                            {errors.state && <span className='text-danger fw-bold'>{errors.state}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputZip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" required name="zip" value={formData.zip} onChange={handleChange} />
                                            {errors.zip && <span className='text-danger fw-bold'>{errors.zip}</span>}
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <h2 className="text-center mb-4">Payment Details</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label for="inputName" className="form-label">Cardholder Name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="Enter cardholder name" required name="cardHolderName" value={formData.cardHolderName} onChange={handleChange} />
                                            {errors.cardHolderName && <span className='text-danger fw-bold'>{errors.cardHolderName}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label for="inputCardNumber" className="form-label">Card Number</label>
                                            <input type="text" className="form-control" id="inputCardNumber" placeholder="Enter card number" required name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                                            {errors.cardNumber && <span className='text-danger fw-bold'>{errors.cardNumber}</span>}
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="inputExpDate" className="form-label">Expiration Date</label>
                                                    <input type="text" className="form-control" id="inputExpDate" required name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" />
                                                    {errors.expiryDate && <span className='text-danger fw-bold'>{errors.expiryDate}</span>}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="inputCVV" className="form-label">CVV</label>
                                                    <input type="text" className="form-control" id="inputCVV" placeholder="CVV" required name="cvv" value={formData.cvv} onChange={handleChange} />
                                                    {errors.cvv && <span className='text-danger fw-bold'>{errors.cvv}</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className='my-3'>Total amount : <span className=' text-danger px-2'>{totalPrice} Rs.</span></h4>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block my-3" onClick={handleClick}>Pay Now</button>
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