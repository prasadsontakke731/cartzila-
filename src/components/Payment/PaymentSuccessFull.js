import React from 'react'
import Payment from "../../Assets/payment/p.mp4"
import { useNavigate } from "react-router-dom"
const PaymentSuccessFull = () => {
    let navigate = useNavigate()
    setTimeout(() => {
        navigate("/cartzila")
    }, 3000)
    return (



        <div>
            <video autoPlay controls loop src={Payment} className='video'></video>


        </div>
    )
}

export default PaymentSuccessFull