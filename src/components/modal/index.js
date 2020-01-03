import React, { useState } from 'react';
import './modal.css';

function Modal(props) {

    const [isActive, setIsActive] = useState(props.isModalActive);

    return(
        <div className={"modal " + (isActive ? 'is-active' : '')}>
            <div className="modal-background"></div>
            <div className="modal-content">
                {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setIsActive(false)}></button>
        </div>        
    );
}

export {Modal};