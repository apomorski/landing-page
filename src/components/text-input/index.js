import React, {useState, useEffect} from 'react';
import './TextInput.css'

function TextInput() {

    const [emailAddress, setEmailAddress] = useState('');

    const handleEmailSubmit = event => {
        // TODO validators
        event.preventDefault();
        console.info(`email: ${emailAddress}`);
    }

    return(
        <input
            type="text"
            className="text-input-styled"
            value={emailAddress}
            onChange={e => setEmailAddress(e.target.value)}
        />
    );
}

export {TextInput};