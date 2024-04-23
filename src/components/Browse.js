import React from 'react'
import Navbar from './Home/Navbar'
import Carousal from './Home/Carousal'
import Brands from './Home/Brands'
import Footer from './Footer'
import RestaurentList from './Home/RestaurentList'
import Explore from './Home/Explore'
import ScrollToTopOnMount from './ScrollToTopOnMount'

const Browse = () => {
    const handleClick = () => {
        const carousalSection = document.getElementById('restList');
        carousalSection.scrollIntoView({ behavior: 'smooth' });
        const brandSection = document.getElementById('restList');
        brandSection.scrollIntoView({ behavior: 'smooth' });


    }

    return (

        <div style={{ backgroundColor: "rgba(15, 15, 76, 0.64)" }}>
            <ScrollToTopOnMount />
            <Navbar />
            <div id='car' >
                <Carousal />
            </div>
            <div >

                <Brands />
            </div>
            <div id='restList' >
                <RestaurentList />
            </div>
            <Explore />
            <Footer />
        </div>
    )
}

export default Browse