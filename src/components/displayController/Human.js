import React, { Component } from 'react';

export default class Human extends Component {
    render() {
        if (this.props.APIkey.length !== 0) {
            return (
                <div>
                    <iframe
                        className="float-right"
                        id="embedded-human"
                        frameBorder="0"
                        //width="70%"
                        height="800"
                        allowFullScreen="true"
                        src={`https://human.biodigital.com/widget/?be=2Ti3&background.colors=255,255,255,1,0,0,0,1&initial=true&load-rotate=15&ui-dissect=true&ui-help=true&ui-share=false&ui-tools-display=primary&dk=${this.props.APIkey}`}>
                    </iframe>
                </div>
            );
        }
        else {
            return (
                <h1 className="loadingFont">Loading widget...</h1>
            )
        }
    }
}

