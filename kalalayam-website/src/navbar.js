import React from 'react';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="fixed-navbar">
            <ul>
                <li>
                    <Link to="about-studio" smooth={true} duration={1000}>
                        About the Studio
                    </Link>
                </li>
                <li>
                    <Link to="about-teacher" smooth={true} duration={1000}>
                        About the Teacher
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={1000}>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="gallery" smooth={true} duration={1000}>
                        Gallery
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
