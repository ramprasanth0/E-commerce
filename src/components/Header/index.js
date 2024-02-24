import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './index.css'
import Carousel from '../Carousel';
// import DropdownComp from '../DropdownComp';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/logo revogue.jpg" alt="Logo" width="100" height="100" ></img>
                    </Link>
                    {/* hamburger menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {/* <DropdownComp /> */}
                            {/* dropdown for each category in the landing page */}
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn" id="menDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Men
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="menDropdown">
                                    <li><Link className="dropdown-item" to="/shirts">Shirts</Link></li>
                                    <li><Link className="dropdown-item" to="/t-shirts">T-shirts</Link></li>
                                    <li><Link className="dropdown-item" to="/trousers">Trousers</Link></li>
                                    <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn" id="womenDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Women
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="womenDropdown">
                                    <li><Link className="dropdown-item" to="/ethnic-wear">Ethnic Wear</Link></li>
                                    <li><Link className="dropdown-item" to="/western-wear">Western Wear</Link></li>
                                    <li><Link className="dropdown-item" to="/sarees">Sarees</Link></li>
                                    <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn" id="kidsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kids
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="kidsDropdown">
                                    <li><Link className="dropdown-item" to="">0 to 2 Years</Link></li>
                                    <li><Link className="dropdown-item" to="">2 to 5 Years</Link></li>
                                    <li><Link className="dropdown-item" to="">5 to 8 Years</Link></li>
                                    <li><Link className="dropdown-item" to="">8 to 12 Years</Link></li>
                                    <li><Link className="dropdown-item" to="">12 Years and above</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn" id="kidsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home & Living
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="kidsDropdown">
                                    <li><Link className="dropdown-item" to="">Bed Linen & Furnishing</Link></li>
                                    <li><Link className="dropdown-item" to="">Bath</Link></li>
                                    <li><Link className="dropdown-item" to="">Flooring</Link></li>
                                    <li><Link className="dropdown-item" to="">Home Decor</Link></li>
                                    <li><Link className="dropdown-item" to="">Lamps & Lighting</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn" id="kidsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Beauty
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="kidsDropdown">
                                    <li><Link className="dropdown-item" to="">Skincare</Link></li>
                                    <li><Link className="dropdown-item" to="">Haircare</Link></li>
                                    <li><Link className="dropdown-item" to="">Fragrances</Link></li>
                                    <li><Link className="dropdown-item" to="">Men's Grooming</Link></li>
                                    <li><Link className="dropdown-item" to="">Beauty Gift and Makeup Set</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
                        </form>
                        <Link className="nav-link me-4" to="/cart">
                            <i className="bi bi-cart"></i> Cart
                        </Link>
                        <Link className="nav-link me-4" to="/wishlist">
                            <i className="bi bi-cart"></i> WishList
                        </Link>
                        <Link className="nav-link me-4" to="/user">
                            <i className="bi bi-person"></i> Profile
                        </Link>
                    </div>
                </div>
            </nav>

            {/* carousel */}
            <Carousel />

            {/* <div className='corousel-container'>
                <Link className='carousel-img' to="/sale">
                    <img src="/img/UHP_1.gif" className="d-block w-100" style={{ height: '400px' }} alt="First slide" />
                </Link>
            </div> */}
        </div>
    )
}

// export default withRouter(Header)
export default Header
