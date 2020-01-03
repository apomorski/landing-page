import React, {useState, useEffect} from 'react';
import './TextInput.css'

function TextInput(props) {

    const [emailAddress, setEmailAddress] = useState('');

    const handleEmailSubmit = event => {
        // TODO validators
        event.preventDefault();
        console.info(`email: ${emailAddress}`);
    }

    return(
        <div>
            <input
                type="text"
                className="text-input-styled"
                value={emailAddress}
                placeholder={props.inputPlaceholder}
                onChange={e => setEmailAddress(e.target.value)}
            />
        </div>
    );
}

export {TextInput};