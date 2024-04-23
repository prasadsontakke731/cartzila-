import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import "./PaymentSuccessFull.css"
const PaymentSuccessFull = () => {
    let navigate = useNavigate()

    setTimeout(() => {
        navigate("/cartzila")
    }, 4000)

    return (



        <div className='payment'>
            <ToastContainer />
            <div className="payment-card">
                <div style={{ borderRadius: "200px", height: "200px", width: "200px", background: "#F8FAF5", margin: "0 auto" }}>
                    <i className="checkmark">✓</i>
                </div>
                <h1 className='success'>Success</h1>
                <p className='request'>We received your purchase request;<br /> we'll be in touch shortly!</p>
            </div>


        </div>
    )
}

export default PaymentSuccessFull