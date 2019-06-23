import React from 'react';
import './Car.css'

export default props => (
<div className = 'Car'>
    <h3>Can name: {props.name}</h3>
    <p>Number: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onchangeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
</div>
);