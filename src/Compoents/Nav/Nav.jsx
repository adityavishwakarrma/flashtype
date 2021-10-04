import React from 'react';
import logo from './../../assets/logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flash-logo"/>
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                 target="_blank"
                 className="nav-profile-link"
                 href="https://in.linkedin.com/in/adityavishwakarrma" rel="noreferrer">
                     Profile
                </a>
            </div>
        </div>
    );
}

export default Nav;