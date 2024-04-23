import React from 'react'
import { carousalImg } from '../utils/constants';
import { Hammer } from 'react-hammerjs';

const CarousalHammer = () => {
    const handleSwipe = (direction) => {
        if (direction === 'left') {
            // Handle left swipe
        } else if (direction === 'right') {
            // Handle right swipe
        }
    };
    return (
        <div>
            {carousalImg.map((product, index) => (
                <Hammer key={index} onSwipe={(e) => handleSwipe(e.direction)}>
                    <div>
                        {/* Render your product */}
                        <p>{product.name}</p>
                    </div>
                </Hammer>
            ))}
        </div>
    )
}

export default CarousalHammer