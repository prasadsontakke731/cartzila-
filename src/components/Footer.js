import React from 'react'
import "./Footer.css"
import appSToreImg from "../Assets/appStore.png"
const Footer = () => {
    return (
        <footer className='container-fluid border border-3'>
            <div className='d-flex justify-content-between mt-3 me-5'>
                <h1 className='text-success ms-5'>C<span className='text-danger fst-italic'>a</span>r<span className='text-primary fst-italic'>t</span>Z<span className='text-danger fst-italic'>il</span>la</h1>
                {/* <!-- Default dropup button --> */}
                <div className="btn-group dropup">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Language
                    </button>
                    <ul className="dropdown-menu">
                        {/* <!-- Dropdown menu links --> */}
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-middle d-flex justify-content-evenly mt-3'>
                <ul>
                    <li className='first-li'>About CartZilla</li>
                    <li>Who we are</li>
                    <li>Blog</li>
                    <li>Work with us</li>
                    <li>Investors Relations</li>
                    <li>Report Fruad</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li className='first-li'>CartaVerse</li>
                    <li>Zomato</li>
                    <li>Blinkit</li>
                    <li>Feeding India</li>
                    <li>Hyperpure</li>
                    <li>Zomaland</li>

                </ul>
                <ul>
                    <li className='first-li'>For Restaurants</li>
                    <li>Partner With Us</li>
                    <li>Apps For You</li>
                </ul>
                <ul>
                    <li className='first-li'>Learn More</li>
                    <li>Privecy</li>
                    <li>Security</li>
                    <li>Terms</li>
                </ul>
                <ul>
                    <li className='first-li'>Social Links</li>
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