import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Brand logo or name */}
                <Link className="navbar-brand" to="/">
                    <img src="https://c8.alamy.com/comp/MPX03T/nairobi-welcome-to-message-in-purple-vibrant-modern-colors-vector-illustration-MPX03T.jpg" alt="Hotel Logo" className="logo-img" />
                </Link>
                
                {/* Toggler button for mobile view */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/booking">Booking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
