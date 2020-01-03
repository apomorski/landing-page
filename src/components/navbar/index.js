import React from 'react';
import './navbar.css';
import Logo from '../../assets/img/ctrade-logo.png';
import { TextInput } from '../text-input';

function Navbar() {
    return (
        <div className="colummns is-centered">
            <div className="columns is-mobile is-centered ">
                <img src={Logo} />
            </div>
            <div className="columns is-mobile is-centered">
                <TextInput />
            </div>
        </div>
    );
}

export {Navbar};