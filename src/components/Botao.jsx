import React from 'react';

export default (props) => (
    <div id={props.rotulo} className={`botao ${props.classe || ''}`} style={props.style}>
        {props.rotulo}
    </div>
)