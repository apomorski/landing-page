import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    LandingBanner,
    Navbar,
    ContentSection,
    ColumnsBar,
} from '../components';
import {
    faBolt,
    faShieldAlt,
    faMoneyBillWave,
    faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bulma';

function LandingPage() {

    const {t} = useTranslation();

    const faIconSize = "3x";

    const sectionItems = [
        {
            icon: faBolt,
            title: 'Ultrafast Matching Engine',
            subtitle: 'Order matching and risk management engine are 20 times faster than the industry speed',
        },
        {
            icon: faShieldAlt,
            title: 'Strong Safeguard',
            subtitle: 'Users asset are protected with industry leading security measures',
        },
        {
            icon: faMoneyBillWave,
            title: 'Spread & Liquidity',
            subtitle: 'Trade better with our tight spread and high market liquidity',
        },
        {
            icon: faPhoneSquare,
            title: '24/7 Customer Support',
            subtitle: 'Real time chat with our professional multilingual customer support',
        },
    ]


    return (
        <>
        <LandingBanner>
            <Navbar />
        </LandingBanner>
        <ContentSection bgColor="white">
            <div className="columns is-centered">
                <h1 className="landing-header">{t('Cryptocurrency Derivatives Exchange')}</h1>
            </div>
            <div className="columns is-centered subtitle-container">
                <p>{t('Trade faster. Anytime. Anywhere')}</p>
            </div>
            <div className="columns is-centered subtitle-container">
                <p>{t('Offering up to 100x leverage on crypto derivatives products')}</p>
            </div>
            <ColumnsBar>
                {
                    sectionItems.map(v => {
                        return (
                            <div className="column">
                                <div className="column-content">
                                    <FontAwesomeIcon icon={v.icon} size={faIconSize} />
                                </div>
                                <div className="column-content">
                                    <h2 className="column-content-title">{t(v.title)}</h2>
                                </div>
                                <div className="column-content">
                                    <p>{t(v.subtitle)}</p>
                                </div>
                            </div> 
                        )
                    })
                }
            </ColumnsBar>
        </ContentSection>
        </>
    );
}

export {LandingPage}; 