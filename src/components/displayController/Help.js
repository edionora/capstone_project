import React, { Component } from 'react';

export default class Help extends Component {



    render() {
        return (
            <div className="main-wrapper float-left">

                <button type="button" className="btn help" data-toggle="tooltip" data-toggle="modal" data-target="#instructionsModal" data-placement="bottom" title="Help">
                    <i className="material-icons">help</i>
                </button>

                <div className="modal fade" id="instructionsModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog help-modal" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="instructionsModalLabel">Instructions</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    <p className="modalItem text-left">Click a button to learn about workouts for that particular body part</p>
                                    <p className="modalItem text-left">Click the image next to the workout to make the image larger</p>
                                    <p className="modalItem text-left">Interact with the model on the right to learn more about your muscle groups</p>
                                </ul>
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

