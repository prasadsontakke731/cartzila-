import React from 'react'
import Navbar from './Home/Navbar'
import Carousal from './Home/Carousal'
import Brands from './Home/Brands'
import Footer from './Footer'
import RestaurentList from './Home/RestaurentList'
import Explore from './Home/Explore'

const Browse = () => {
    return (
        <div>
            <Navbar />
            <Carousal />
            <Brands />
            <RestaurentList />
            <Explore />
            <Footer />
        </div>
    )
}

export default Browse