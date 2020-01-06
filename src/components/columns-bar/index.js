import React from 'react';
import './ColumnsBar.css';
import 'bulma';

function ColumnsBar(props) {
    return(
        <div className="columns is-centered is-mobile">
            {props.children}
        </div>
    );
}

export {ColumnsBar};