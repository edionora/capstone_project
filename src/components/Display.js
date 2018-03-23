import React, { Component } from 'react';

export default class Display extends Component {
    render() {
        const primaryHeader = this.props.display.displaySuggestion
        const secondaryHeader = this.props.display.displayConjunction
        let suggestions = this.props.suggestions.map((workouts, i) => (
            <div className="container-fluid card" key={i}>
                <div className="media">
                    <div className="media-body">
                        <h3 className="mt-0 mb-1"> {workouts.name}</h3>

                        <h5> {secondaryHeader} </h5>
                        <h6 className="mt-0 mb-1"> {workouts.conjunction + " \n"} </h6>
                    </div>
                    <img className="ml-3" src={workouts.image} alt=""/>
                </div>
            </div>
        ))
        return (
            <div className="enableScroll">
                <h2 className="primaryHeader"> {primaryHeader}</h2>
                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}

                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}
            </div>
        );
    }
}

