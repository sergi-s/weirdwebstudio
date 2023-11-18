import React from 'react';
import logo from '/vite.svg'

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <nav>
                <ul>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;
