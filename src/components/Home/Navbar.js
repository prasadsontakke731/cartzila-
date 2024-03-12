import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand logo fw-bold text-success fs-4 " href="#">C<span className='text-danger fst-italic'>a</span>r<span className='text-primary fst-italic'>t</span>Z<span className='text-danger fst-italic'>il</span>la</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <div className="menu-container">
                                    <div className="menu-trigger">
                                        <span>Language</span>
                                    </div>
                                    <div className="dropdown-menu">

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa-solid fa-cart-plus fs-4">
                                    <span>0</span>
                                </i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar