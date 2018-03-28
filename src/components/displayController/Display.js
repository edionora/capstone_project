import React, { Component } from 'react';

export default class Display extends Component {
    state = {
        currentItem: 0
    }
    currentImage = (i) => {
        this.setState({
            currentItem: i
        })
    }

    render() {
        const primaryHeader = this.props.display.displaySuggestion
        const secondaryHeader = this.props.display.displayConjunction
        let source = this.props.suggestions.length > 0 ? this.props.suggestions[this.state.currentItem].image : ""
        let title = this.props.suggestions.length > 0 ? this.props.suggestions[this.state.currentItem].name : ""

        let suggestions = this.props.suggestions.map((workouts, i) => (
            <div className="container-fluid card" key={i}>
                <div className="media">
                    <div className="media-body">
                        <h3 className="mt-0 mb-1"> {workouts.name}</h3>

                        <h5> {secondaryHeader} </h5>
                        <h6 className="mt-0 mb-1"> {workouts.conjunction + " \n"} </h6>
                    </div>
                    <img className="align-self-end mr-3 list-img" data-toggle="modal" data-target="#workoutModal" src={workouts.image} alt="" onClick={() => this.currentImage(i)} />
                </div>
            </div>
        ))

        return (
            <div className="enableScroll">
                <h2 className="primaryHeader"> {primaryHeader}</h2>
                {suggestions}
                <div className="modal fade" id="workoutModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog image-modal" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title center" id="workoutModalLabel"> {title}</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className="modal-img" src={source} alt="" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

