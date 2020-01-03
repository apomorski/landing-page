import React, {useState} from 'react';
import './navbar.css';
import Logo from '../../assets/img/ctrade-logo.png';
import { TextInput } from '../text-input';
import { useTranslation } from 'react-i18next';
import { ButtonStyled } from '../button-styled';
import {validateEmailAddress, submitEmailToCollection} from '../../services';

function Navbar() {
    const { t } = useTranslation();

    const [emailAddress, setEmailAddress] = useState('');
    const [emailValid, setEmailValid] = useState(true);

    const handleEmailValid = () => {
        setEmailValid(true);
        submitEmailToCollection(emailAddress);
    }

    const emailSubmitHandler = () => validateEmailAddress(emailAddress) ? handleEmailValid() : setEmailValid(false);
    


    return (
        <div className="colummns is-centered">
            <div className="columns is-mobile is-centered ">
                <img src={Logo} alt={t('C-Trade Logo')}/>
            </div>
            <div className="columns is-mobile is-centered">
                <TextInput inputPlaceholder={t('Enter your email address')} value={emailAddress} inputChangeHandler={setEmailAddress} />
            </div>
            {!emailValid &&
                <div className="columns is-mobile is-centered">
                    <h1>This email address seems invalid</h1>
                </div>
            }
            <div className="columns is-mobile is-centered">
                <ButtonStyled buttonText={t('Join waitlist')} clickHandler={emailSubmitHandler} />
            </div>
        </div>
    );
}

export {Navbar};