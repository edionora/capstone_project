import React from 'react';
import {BodyButton} from './BodyButton'
import {BodyDropdown} from './BodyDropdown'

export const BodyController = (props) => {


    return (
        <div>
            <BodyButton selectedPart="chest" selectPart={props.selectPart}/>
            <BodyButton selectedPart="abdomen" selectPart={props.selectPart}/>
            <BodyDropdown selectedPart="upper" selectPart={props.selectPart}/>
            <BodyDropdown selectedPart="back" selectPart={props.selectPart}/>
            <BodyDropdown selectedPart="lower" selectPart={props.selectPart}/>
        </div>
    )
}