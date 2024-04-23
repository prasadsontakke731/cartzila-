import React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Brands.css"
import { carouselBrand } from '../../utils/constants'
import lang from '../../utils/languageConstants'
const Brands = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const langKey = useSelector(store => store.config.lang)
    const sliceCarousalBrands1 = carouselBrand.slice(0, 5)
    const sliceCarousalBrands2 = carouselBrand.slice(5, 10)


    const handleClick = () => {

    }
    return (
        <div id="carouselExampleDark1" className="carousel carousel-dark slide mt-5 w-75 ms-auto me-auto" data-bs-ride="carousel">
            <h5 className='restaurants text-center text-white'>{lang[langKey].secondCarousal}</h5>

            <div className="carousel-inner ">

                <div className="carousel-item active" data-bs-interval="4000">
                    <div className='d-flex justify-content-evenly'>
                        {
                            sliceCarousalBrands1.map((item) => {
                                return (

                                    <div className='brand-name' key={item.id} >
                                        <div className='img-div'>
                                            <img src={item.image} className="d-block w-10" alt="food" />
                                        </div>
                                        <h6 className='fw-blod bg-danger p-2 pointer-event text-white rounded rounded-4' onClick={handleClick}>{item.type}</h6>
                                    </div>

                                )
                            })
                        }



                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <div className='d-flex justify-content-evenly'>
                        {
                            sliceCarousalBrands2.map((item) => {
                                return (

                                    <div className='brand-name' key={item.id}>
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
            <button className="pre-brand-btn carousel-control-prev " type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="nxt-brand-btn carousel-control-next " type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>

        </div>
    )
}

export default Brands