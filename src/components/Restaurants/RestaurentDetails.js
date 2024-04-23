import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./RestaurentDetails.css"
import Navbar from '../Home/Navbar'
import Footer from '../Footer'
import { addToCart, removeItem } from '../../utils/cartSlice'

const RestaurentDetails = () => {

    //
    const dispatch = useDispatch()


    const items = useSelector(store => store.allCart)
    // const cartItems = items.items.map((item) => item.items)
    // console.log(cartItems);
    const cartItems = items.items
    // console.log(items);
    console.log(cartItems);
    const { id } = useParams()
    console.log(id);

    const data = cartItems.find((info) => {
        return info.id == id
    })
    console.log(data);

    // 

    return (
        <div id='details'>

            <div className=''>
                <Navbar />
            </div>
            {/*  */}
            <div className="container mt-5 ">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <img src={data.imgdata} className="img-fluid img" alt="Image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title  fw-bold bg-success p-1 text-white rounded rounded-5 pointer-event text-center">{data.rname}</h5>
                                    <p className="card-text mt-3 fw-bold">{data.info}</p>
                                    <ul className="list-group list-group-flush mt-3">
                                        <li className="list-group-item">{data.price} <span>Rs.</span></li>
                                        <li className="list-group-item text-white fw-bold bg-danger">{data.somedata}</li>
                                        <li className="list-group-item mt-3"><span className='bg-success text-white p-2 rounded rounded-4 '>{data.rating}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-4">
                    {
                        data.items.map((item) => {
                            return (
                                <div className="col-md-4 mb-4">
                                    <div className="card ">
                                        <img src={item.image} className="card-img-top" alt="Food Item Image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.price} <span>Rs</span></p>


                                            <button className="btn btn-success" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RestaurentDetails