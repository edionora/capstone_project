import React, { Component } from 'react';
import '../styles.css'


export default class Backbtn extends Component {
state = {
          back: 'human_05_male_muscular_system-superficial_muscles_of_left_shoulder_ID',
          trap: "human_05_male_muscular_system-left_trapezius_ID",
          lats: "human_05_male_muscular_system-left_latissimus_dorsi_ID",
}
    render() {
        return (
            
            <div className="btn-group dropdown">
                <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={()=> this.props.selectPart(this.state.back)}>
                        Back  {/* human_05_male_muscular_system-superficial_muscles_of_left_shoulder_ID */}
                </button>

                <div className="dropdown-menu">
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.trap, "trap")}> Trapezius </button> 
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.lats, "lats")}> (Latissimus Dorsi </button> 
                </div>
            </div>
        );
    }
}

