import React from 'react';
import bodySources from './bodySources'

export const BodyDropdown = (props) => {
const currentBodyPart = bodySources[props.selectedPart]
let dropdownButtons = currentBodyPart.subCategories.map((item, i) =>{
    return (
       <button type="button" className="btn dropdown-item" onClick={()=> props.selectPart(item.id, item.title)}>
        {item.title}
        </button>  
    )
})
    return (
        <div className="btn-group dropdown">
        <button className="btn btn-dark dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={()=> props.selectPart(currentBodyPart.id, currentBodyPart.title)}>
                <img className="button_icon" src={currentBodyPart.source} alt=""/>
                {currentBodyPart.title}
        </button>
        <div className="dropdown-menu">
            {dropdownButtons}
        </div>
    </div>
    )
}