import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./Footer.css"
import appSToreImg from "../Assets/appStore.png"
import lang from '../utils/languageConstants'
const Footer = () => {
    const dispatch = useDispatch()

    const langKey = useSelector(store => store.config.lang)
    return (
        <footer className='container-fluid border border-3'>
            <div className='d-flex justify-content-between mt-3 me-5'>
                <h1 className='text-success ms-5'>C<span className='text-danger fst-italic'>a</span>r<span className='text-primary fst-italic'>t</span>Z<span className='text-danger fst-italic'>il</span>la</h1>

            </div>
            <div className='footer-middle d-flex justify-content-evenly mt-3'>
                <ul>
                    <li className='first-li'>{lang[langKey].aboutCartZila}</li>
                    <li>{lang[langKey].whoWeAre}</li>
                    <li>{lang[langKey].blog}</li>
                    <li>{lang[langKey].workWithUs}</li>
                    <li>{lang[langKey].investorRelation}</li>
                    <li>{lang[langKey].reportFraud}</li>
                    <li>{lang[langKey].pressKit}</li>
                    <li>{lang[langKey].contactUs}</li>
                </ul>
                <ul>
                    <li className='first-li'>{lang[langKey].cartaVerce}</li>

                    <li>{lang[langKey].blinkit}</li>
                    <li>{lang[langKey].feedingIndia}</li>
                    <li>{lang[langKey].Hyperpure}</li>
                    <li>{lang[langKey].zomaland}</li>

                </ul>
                <ul>
                    <li className='first-li'>{lang[langKey].forRest}</li>
                    <li>{lang[langKey].partnerWithUs}</li>
                    <li>{lang[langKey].appsForYou}</li>
                </ul>
                <ul>
                    <li className='first-li'>{lang[langKey].learnMore}</li>
                    <li>{lang[langKey].privacy}</li>
                    <li>{lang[langKey].security}</li>
                    <li>{lang[langKey].terms}</li>
                </ul>
                <ul>
                    <li className='first-li'>{lang[langKey].socialLinks}</li>
                    <li>
                        <div className='social-icons'>
                            <span><i className="fa-brands fa-linkedin text-primary"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-facebook text-primary"></i></span>
                            <span><i className="fa-brands fa-github"></i></span>
                        </div>
                    </li>
                    <li>
                        <img src={appSToreImg} alt="text" />
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer