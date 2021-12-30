import React from 'react';

export default (props) => {
    return (
        <div className="letter__container">
            <p className={props.classDescriptor}>{props.letter}</p>
        </div>
    )
}