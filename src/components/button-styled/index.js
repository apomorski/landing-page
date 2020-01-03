import React from 'react';
import './ButtonStyled.css';


function ButtonStyled(props) {
    return (
        <button
            className="btn-styled"
            type="button"
            onClick={props.clickHandler}
        >
        {props.buttonText}
        </button>
    );
}

export {ButtonStyled};