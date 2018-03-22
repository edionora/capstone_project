import React, { Component } from 'react';
import '../styles.css'


export default class Display extends Component {
state = {

}

    render() {
        const primaryHeader = this.props.display.displaySuggestion
        let suggestions = this.props.suggestions.map((workouts, i) => (
            <div className="container-fluid card" key={i}>
                <div className="media">
                    <div className="media-body">
                        <h5 className="mt-0 mb-1"> {workouts.name}</h5>
                        Lorem ipsum dolor sit...deserunt mollit anim id est laborum.
                    </div>
                    <img className="ml-3" src={workouts.image}/>
                </div>
            </div>
        ))

        const secondaryHeader = this.props.display.displayConjunction

        let conjunction = this.props.conjunction.map((otherParts, i) => (
            <div className="container-fluid card" key={i}>
                <div>
                    <div className="media">
                        <div className="media-body">
                            <h6 className="mt-0 mb-1"> {otherParts}</h6>
                        </div>           
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="enableScroll">
                <h2> {primaryHeader}</h2>
                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}
                {suggestions}
                <h4> {secondaryHeader} </h4>
                {conjunction}
            </div>
        );
    }
}

