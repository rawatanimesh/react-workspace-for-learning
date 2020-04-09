import React from 'react';

const validation = (props) => {
    let showText = (
        <p>Too short</p>
    )

    if(props.inputLength >= 5){
         showText = (
            <p>Too long</p>
        )
    }
    return(
        <div>
            <p>Length: {props.inputLength}</p>
            {showText}
        </div>
    );
};

export default validation;