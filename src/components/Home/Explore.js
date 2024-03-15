import React from 'react'
import "./Explore.css"
const Explore = () => {
    return (
        <div className='container my-3'>
            <div className="accordion" id="accordionExample">
                <h5 className='text-center restaurants mb-2'>Explore options near me</h5>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Popular cuisines near me
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Beverages food near me. <span>* </span>Biryani food near me. <span>*</span> Burger food near me. <span>*</span>Chinese food near me. <span>*</span>Coffee food near me. <span>*</span>Desserts food near me. <span>*</span>Ice Cream food near me. <span>*</span>Kebab food near me. <span>*</span>Maharashtrian food near me. <span>*</span>Momos food near me. <span>*</span>Mughlai food near me. <span>*</span>North Indian food near me. <span>*</span>Pizza food near me. <span>*</span>Rolls food near me. <span>*</span>Sandwich food near me. <span>*</span>Seafood food near me. <span>*</span>Shake food near me. <span>*</span>Sichuan food near me. <span>*</span>South Indian food near me. <span>*</span>Street food near me
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Popular restaurant types near me
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Bakeries near me. <span>* </span>Bars near me. <span>* </span>Beverage Shops near me. <span>* </span>Bhojanalya near me. <span>* </span>Cafés near me. <span>* </span>Casual Dining near me. <span>* </span>Clubs near me. <span>* </span>Cocktail Bars near me. <span>* </span>Confectioneries near me. <span>* </span>Dessert Parlors near me. <span>* </span>Dhabas near me. <span>* </span>Fine Dining near me. <span>* </span>Food Courts near me. <span>* </span>Food Trucks near meIrani Cafes near me. <span>* </span>Kiosks near me. <span>* </span>Lounges near me. <span>* </span>Microbreweries near me. <span>* </span>Paan Shop near me. <span>* </span>Pubs near me. <span>* </span>Quick Bites near me. <span>* </span>Sweet Shops near me
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Top Restaurant Chains
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul className='rest-chain'>
                                <li>Domino's</li>
                                <li>Dunkin' Donuts </li>

                                <li>Faasos</li>
                                <li>KFC</li>
                                <li>McDonald's</li>
                            </ul>
                        </div>
                    </div >
                </div >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Cities We Deliver To
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className='city-list '>
                                <ul>
                                    <li>Delhi NCR</li>
                                    <li>Hydarabad</li>
                                    <li>Ahamadabad</li>
                                    <li>Nashik</li>
                                    <li>Amritsar</li>
                                    <li>Ranchi</li>
                                    <li>Vododara</li>
                                    <li>Poduchery</li>
                                    <li>Srinagar</li>
                                    <li>Haridwar</li>
                                </ul>
                                <ul>
                                    <li>Kolkata</li>
                                    <li>Chennai</li>
                                    <li>Chandigarh</li>
                                    <li>Oooty</li>
                                    <li>Kanpur</li>
                                    <li>Jaipur</li>
                                    <li>Nagpur</li>
                                    <li>Surat</li>
                                    <li>Solapur</li>
                                    <li>Manglwedha</li>
                                </ul>
                                <ul>
                                    <li>Mumbai</li>
                                    <li>Pune</li>
                                    <li>Amaravati</li>
                                    <li>Kolhapur</li>
                                    <li>Raigad</li>
                                    <li>Ratnagiri</li>
                                    <li>Sangli</li>
                                    <li>Vardha</li>
                                    <li>Buldhana</li>
                                    <li>Beed</li>
                                </ul>
                                <ul>
                                    <li>Rajasthan</li>
                                    <li>Karnatak</li>
                                    <li>Benguluru</li>
                                    <li>Keral</li>
                                    <li>Delhi</li>
                                    <li>Panjab</li>
                                    <li>Jammu</li>
                                    <li>Siyachin</li>
                                    <li>Nepal</li>
                                    <li>UP</li>
                                </ul>
                                <ul>
                                    <li>Malshirus</li>
                                    <li>Pandharpur</li>
                                    <li>Mangalwedha</li>
                                    <li>Kothrud</li>
                                    <li>Shivajinagar</li>
                                    <li>Kasaba Peth</li>
                                    <li>Karve Nagar</li>
                                    <li>Pimpri Chinchwad</li>
                                    <li>Wagholi</li>
                                    <li>Bhosari</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Explore