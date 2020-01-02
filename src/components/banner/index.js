import React from 'react';
import './hero.css';
import 'bulma';

function LandingBanner(props) {
    return(
        <div className="cover-bg">
            <section className="hero is-center">
                <div className="hero-body"> 
                    { props.children }
                </div>
            </section> 
        </div>

    );
}

export {LandingBanner};