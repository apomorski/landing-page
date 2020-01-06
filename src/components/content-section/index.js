import React from 'react';
import './ContentSection.css';
import 'bulma';

function ContentSection(props) {
    return(
        <section className={"section section-" + props.bgColor } >
            <div className="container">
                {props.children}
            </div>
        </section>
    );
}

export {ContentSection};