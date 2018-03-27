import React, { Component } from 'react';

//<h3 className="subHeader">Click a button to learn about workouts for that particular body part. 
//Interact with the model on the right to learn more about your muscle groups</h3>

export default class Help extends Component {



    render() {
        return (
            <div className="main-wrapper float-left">

                <button type="button" className="btn help" data-toggle="tooltip" data-toggle="modal" data-target="#instructionsModal" data-placement="bottom" title="Help">
                    <i className="material-icons">help</i>
                </button>
                {/* <i className="material-icons" data-toggle="tooltip" data-toggle="modal" data-target="#instructionsModal" data-placement="bottom" title="Help">help</i> */}

                <div className="modal fade" id="instructionsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="instructionsModalLabel">Instructions</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Sounds good, let's get started!</button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

