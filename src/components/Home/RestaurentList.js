import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./RestaurentList.css"
import { Fooddata } from '../../utils/constants'
import lang from '../../utils/languageConstants'
const RestaurentList = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const langKey = useSelector(store => store.config.lang)

    return (
        <div className="container-fluid text-white mt-5" id='card'>

            <div className="row d-flex justify-content-center g-4">
                <h5 className='text-center restaurants'>{lang[langKey].restaurentListTitle}</h5>
                {
                    Fooddata.map((item) => {
                        return (
                            <div className="card cards" key={item.id} onClick={() => {
                                navigate(`/restaurent/${item.id}/${item.rname}`)
                                window.scrollTo(0, 0)

                            }
                            }>
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