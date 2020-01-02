import React from 'react'
import 'bulma';

function LandingBanner(props) {
    return(
        <section class="hero">
            <div className="hero-body">
                {props.children}
            </div>
        </section> 
    );
}

export {LandingBanner};