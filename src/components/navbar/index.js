import React from 'react';
import './navbar.css';
import Logo from '../../../public/ctrade-logo.png';

function Navbar() {
    return (
        <div className="columns is-mobile is-centered navbar">
            <Logo />
        </div>
    );
}

export {Navbar};