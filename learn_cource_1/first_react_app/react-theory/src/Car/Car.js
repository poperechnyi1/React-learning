import React from 'react';

export default props => (
<div>
    <h3>Can name: {props.name}</h3>
    <p>Number: <strong>{props.year}</strong></p>
    { props.children }
</div>
);