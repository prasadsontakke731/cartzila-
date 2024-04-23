import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
const scrollTo = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };
    return (
        <div>
            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Scroll to Top
            </Link>
            <br />
            <Link
                activeClass="active"
                to="bottom"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Scroll to Bottom
            </Link>

            <div id="top">
                {/* Content */}
            </div>

            <div id="bottom" style={{ height: '1000px', background: '#ccc' }}>
                {/* Content */}
            </div>
        </div>
    )
}

export default scrollTo