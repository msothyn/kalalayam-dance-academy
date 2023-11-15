import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from './NAVBARLOGO.png';

const Navbar = () => {
  return (
    <nav className="fixed-navbar">
      <ul>
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li>
          <div className="link-wrapper">
            <Link to="about-studio" smooth={true} duration={1000}>
              About the Studio
            </Link>
          </div>
        </li>
        <li>
          <div className="link-wrapper">
            <Link to="about-teacher" smooth={true} duration={1000}>
              About the Teacher
            </Link>
          </div>
        </li>
        <li>
          <div className="link-wrapper">
            <Link to="contact" smooth={true} duration={1000}>
              Contact Us
            </Link>
          </div>
        </li>
        <li>
          <div className="link-wrapper">
            <Link to="gallery" smooth={true} duration={1000}>
              Gallery
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
