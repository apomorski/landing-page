import React from 'react';
import './navbar.css';
import Logo from '../../assets/img/ctrade-logo.png';

function Navbar() {
    return (
        <div className="columns is-mobile is-centered ">
            <img src={Logo} />
        </div>
    );
}

export {Navbar};