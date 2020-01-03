import React, {useState} from 'react';
import './navbar.css';
import Logo from '../../assets/img/ctrade-logo.png';
import { TextInput } from '../text-input';
import { useTranslation } from 'react-i18next';
import { ButtonStyled } from '../button-styled';
import { Modal } from '../modal';
import {validateEmailAddress, submitEmailToCollection} from '../../services';

function Navbar() {
    const { t } = useTranslation();

    const [emailAddress, setEmailAddress] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');

    const handleEmailValid = () => {
        setEmailValid(true);
        submitEmailToCollection(emailAddress)
            .then(res => {
                setEmailSubmitted(true);
                console.log(res)
            })
            .catch(err => {
                setSubmissionErrorMessage('SOME HTTP ERROR')
            });
    }

    const handleEmailInvalid = () => {
        setEmailValid(false);
        setSubmissionErrorMessage('This email address seems invalid');
    }

    const emailSubmitHandler = () => validateEmailAddress(emailAddress) ? handleEmailValid() : handleEmailInvalid();
    

    const bannerContentRenderer = () => {
        let c;
        if (!emailSubmitted) {
            c = <>
               <div className="columns is-mobile is-centered">
                    <TextInput inputPlaceholder={t('Enter your email address')} value={emailAddress} inputChangeHandler={setEmailAddress} />
                </div>
                {!emailValid &&
                    <div className="columns is-mobile is-centered">
                        <h1>{submissionErrorMessage}</h1>
                    </div>
                }
                <div className="columns is-mobile is-centered">
                    <ButtonStyled buttonText={t('Join waitlist')} clickHandler={emailSubmitHandler} />
                </div>
            </>
        } else {
            c = <>
                <div className="columns is-mobile is-centered"> 
                    <h1>{t('Email Submitted Successfuly!')}</h1>
                </div>
            </>
        }
        return c;
    }

    return (
        <>
        <div className="colummns is-centered center-vert">
            <div className="columns is-mobile is-centered">
                <img src={Logo} alt={t('C-Trade Logo')}/>
            </div>
            <div className="columns is-mobile is-centered">
                <h1 className="banner-text-large">{t("The Ultimate Trading Platform You've Been Waiting For.")}</h1>
            </div>
            {bannerContentRenderer()}
        </div>
        </>
    );
}

export {Navbar};