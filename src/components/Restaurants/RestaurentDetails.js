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
        <div>

            <div className=''>
                <Navbar />
            </div>
            {/*  */}
            <div className="container mt-5 ">
                <div className="row border border-4 border-black h-25">
                    <div className="col-md-6 ">
                        <img src={data.imgdata} className="restaurant-img img-fluid " alt="Restaurant Image" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-evenly">

                        <h2 className='text-danger fw-bold m-4'>{data.rname}</h2>
                        <p className='text-danger fw-bold m-4'><strong>Location:</strong> {data.address}</p>
                        <p className='text-success fw-bold m-4'><strong>Rating:</strong> {data.rating}</p>
                    </div>
                </div>
                {/* <div class="card mb-3 ms-auto me-auto" style={{ maxWidth: "540px" }}>
                    <div class="row g-0 text-center h-50">
                        <div class="col-md-8 ">
                            <img src={data.imgdata} class="img-fluid  rounded-start" alt="..." />
                        </div>
                        <div class="col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row mt-4">
                    {
                        data.items.map((item) => {
                            return (
                                <div className="col-md-4 mb-4">
                                    <div className="card ">
                                        <img src={item.image} className="card-img-top" alt="Food Item Image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.price}</p>


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