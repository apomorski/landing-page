import React from 'react';
import './navbar.css';
import Logo from '../../assets/img/ctrade-logo.png';
import { TextInput } from '../text-input';
import { useTranslation } from 'react-i18next';
import { ButtonStyled } from '../button-styled';

function Navbar() {
    const { t } = useTranslation();

    return (
        <div className="colummns is-centered">
            <div className="columns is-mobile is-centered ">
                <img src={Logo} />
            </div>
            <div className="columns is-mobile is-centered">
                <TextInput inputPlaceholder={t('Enter your email address')}/>
            </div>
            <div className="columns is-mobile is-centered">
                <ButtonStyled buttonText={t('Join waitlist')}/>
            </div>
        </div>
    );
}

export {Navbar};