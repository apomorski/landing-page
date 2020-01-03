import React, {useState} from 'react';
import './navbar.css';
import Logo from '../../assets/img/ctrade-logo.png';
import { TextInput } from '../text-input';
import { useTranslation } from 'react-i18next';
import { ButtonStyled } from '../button-styled';
import {validateEmailAddress } from '../../services';

function Navbar() {

    const [emailAddress, setEmailAddress] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    const { t } = useTranslation();

    const emailSubmitHandler = () => {
        if (validateEmailAddress(emailAddress)) {
            setEmailValid(true);
        }
    }

    return (
        <div className="colummns is-centered">
            <div className="columns is-mobile is-centered ">
                <img src={Logo} alt={t('C-Trade Logo')}/>
            </div>
            <div className="columns is-mobile is-centered">
                <TextInput inputPlaceholder={t('Enter your email address')} value={emailAddress} inputChangeHandler={setEmailAddress} />
            </div>
            <div className="columns is-mobile is-centered">
                <ButtonStyled buttonText={t('Join waitlist')} clickHandler={emailSubmitHandler} />
            </div>
        </div>
    );
}

export {Navbar};