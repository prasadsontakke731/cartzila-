import React from 'react'
import "./Carousal.css"

import { carousalImg } from '../../utils/constants'
const Carousal = () => {
    const sliceCarousalImg1 = carousalImg.slice(0, 5)
    const sliceCarousalImg2 = carousalImg.slice(5, 10)
    const sliceCarousalImg3 = carousalImg.slice(10, 15)

    return (

        <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5 w-75 ms-auto me-auto" data-bs-ride="carousel">
            <h1>Inspiration for your first order</h1>

            <div className="carousel-inner ">

                <div className="carousel-item active" data-bs-interval="10000">
                    <div className='d-flex justify-content-evenly'>
                        {
                            sliceCarousalImg1.map((item) => {
                                return (

                                    <div className='food-name' key={item.id}>
                                        <div className='img-div'>
                                            <img src={item.image} className="d-block w-10" alt="food" />
                                        </div>
                                        <h6 className='fw-blod bg-danger p-2 pointer-event text-white rounded rounded-4'>{item.type}</h6>
                                    </div>

                                )
                            })
                        }



                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className='d-flex justify-content-evenly'>
                        {
                            sliceCarousalImg2.map((item) => {
                                return (

                                    <div className='food-name' key={item.id}>
                                        <div className='img-div'>
                                            <img src={item.image} className="d-block w-10" alt="food" />
                                        </div>
                                        <h6 className='fw-blod bg-danger p-2 pointer-event text-white rounded rounded-4'>{item.type}</h6>
                                    </div>

                                )
                            })
                        }


                    </div>

                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-evenly'>
                        {
                            sliceCarousalImg3.map((item) => {
                                return (

                                    <div className='food-name' key={item.id}>
                                        <div className='img-div'>
                                            <img src={item.image} className="d-block w-10" alt="food" />
                                        </div>
                                        <h6 className='fw-blod bg-danger p-2 pointer-event text-white rounded rounded-4'>{item.type}</h6>
                                    </div>

                                )
                            })
                        }


                    </div>

                </div>
            </div>
            <button className="pre-btn carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="nxt-btn carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>

        </div>

    )
}

export default Carousal