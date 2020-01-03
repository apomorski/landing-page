import React from 'react';
import './TextInput.css'

function TextInput(props) {

    return(
        <div>
            <input
                type="text"
                value={props.textValue}
                className="text-input-styled"
                onChange={e => props.inputChangeHandler(e.target.value)}
                placeholder={props.inputPlaceholder}
            />
        </div>
    );
}

export {TextInput};