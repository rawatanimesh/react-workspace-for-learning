import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <div onClick={props.click}>I am {props.name} and I am {props.age} years old.</div>
            <span>{props.children}</span>
            <input onChange={props.changed} value={props.name}/>
        </div>    
    )
}

export default person;