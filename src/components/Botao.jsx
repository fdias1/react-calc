import React from 'react';

export default (props) => (
    <div id={props.rotulo} className={`botao ${props.classe || ''}`} style={props.style} onClick={() => props.click(props.rotulo)}>
        {props.rotulo}
    </div>
)