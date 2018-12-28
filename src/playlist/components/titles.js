import React from 'react';
import './titles.css';

function Title (props) {
    return (
        <div className ="Titles">
            <h6>{props.text}</h6>
        </div>
    )
}
export default Title;