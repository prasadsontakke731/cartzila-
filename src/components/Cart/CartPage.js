import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CartPage.css"
import { useSelector, useDispatch } from "react-redux"
import Navbar from '../Home/Navbar'
import Footer from '../Footer'
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } from '../../utils/cartSlice'


const CartPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cart, totalQuantity, totalPrice } = useSelector(store => store.allCart)
    useEffect(() => {
        dispatch(getCartTotal())

    }, [cart])
    const handleClick = () => {
        if (cart.length === 0) {
            return toast.error('Cart is Emty!', {

            });

        } else {


            navigate("/payment")

        }
    }
    return (
        <div>
            <Navbar />
            {/*  */}
            <ToastContainer />
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                                </div>
                                <Link className='cartLink' to="/cartzila"><h3> <i class="fa-solid fa-arrow-left"></i>Back to Order</h3></Link>
                                <div className="card-body">


                                    {
                                        cart.map((data) => (
                                            <div className="row mt-4">
                                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={data.image}
                                                            className="w-100 cartImg" alt="Blue Jeans Jacket" />
                                                        <a href="#!">
                                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                        </a>
                                                    </div>

                                                </div>

                                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    {/* <!-- Data --> */}
                                                    <p><strong>{data.name}</strong></p>
                                                    <p className='fw-bold'>price : {data.price} <span>Rs.</span></p>
                                                    <p className=''>{data.info}</p>
                                                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                                        title="Remove item" onClick={() => dispatch(removeItem(data.id))}>
                                                        <i className="fas fa-trash"></i>
                                                    </button>

                                                    {/* <!-- Data --> */}
                                                </div>

                                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                    {/* <!-- Quantity --> */}
                                                    <div className="d-flex mb-4" style={{ backgroundColor: "max-width: 300px" }}>
                                                        <button className="btn btn-danger  me-2"
                                                            onClick={() => dispatch(decreaseItemQuantity(data.id))}>
                                                            <i className="fas fa-minus"></i>
                                                        </button>

                                                        <div className="form-outline">
                                                            <input id="form1" min="0" name="quantity" value={data.quantity} type="number" className="form-control fw-bold " />

                                                        </div>

                                                        <button className="btn btn-success px-3 ms-2"
                                                            onClick={() => dispatch(increaseItemQuantity(data.id))}>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    }

                                    <hr className="my-4" />


                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Foods Order
                                            <span className='fw-bold'>{totalQuantity}</span>
                                        </li>

                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including GST)</p>
                                                </strong>
                                            </div>
                                            <span><strong>{totalPrice}</strong></span>
                                        </li>
                                    </ul>

                                    <button type="button" className="btn btn-warning btn-lg btn-block fw-bold" onClick={handleClick}>
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default CartPage