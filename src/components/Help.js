import React, { Component } from 'react';

//<h3 className="subHeader">Click a button to learn about workouts for that particular body part. 
//Interact with the model on the right to learn more about your muscle groups</h3>

export default class Help extends Component {



    render() {
        return (
            <div className="main-wrapper float-left">
            {/* <button type="button" className="btn"data-toggle="tooltip" data-placement="bottom" title="Help"> */}
            <button type="button" className="btn help" data-toggle="tooltip" data-placement="bottom" title="Help"><i className="material-icons">help</i></button>
            {/* </button> */}
            </div>
        );
    }
}

