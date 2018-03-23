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
                        src={`https://human.biodigital.com/widget/?be=2THN&initial=true&ui-help=true&ui-share=false&dk=${this.props.APIkey}`}>
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

