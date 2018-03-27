import React from 'react';
import bodySources from './bodySources'

export const BodyButton = (props) => {
const currentBodyPart = bodySources[props.selectedPart]
    return (
    <div className="btn-group">
        <button className="btn btn-dark pane-btn" type="button" onClick={()=> props.selectPart(currentBodyPart.id, currentBodyPart.title)}>
        <img className="button_icon" src={currentBodyPart.source} alt=""/>
        {currentBodyPart.title}
        </button>
    </div>
    )

}