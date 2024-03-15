import React from 'react'
import { useNavigate } from "react-router-dom"
import "./RestaurentList.css"
import { Fooddata } from '../../utils/constants'
const RestaurentList = () => {

    const navigate = useNavigate()

    return (
        <div className="container mt-5">

            <div className="row d-flex justify-content-center g-4">
                <h5 className='text-center restaurants'>Restaurants with online food delivery in Pune</h5>
                {
                    Fooddata.map((item) => {
                        return (
                            <div className="card cards" key={item.id} onClick={() => navigate(`/restaurent/${item.id}/${item.rname}`)}>
                                <img src={item.imgdata} className="card-img-top img-fluid " alt="Card Image" />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p className="card-title">{item.rname}</p>
                                        <span className='rating'>{item.rating}<i class="fa-regular fa-star"></i></span>
                                    </div>
                                    <div className='d-flex justify-content-between mt-1'>
                                        <p className="card-text">{item.address}</p>
                                        <p className="card-text">{item.price}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default RestaurentList