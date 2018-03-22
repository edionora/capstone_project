import React, { Component } from 'react';
import '../styles.css'


export default class LowerLimbsbtn extends Component {
state = {
    lower: 'human_05_male_muscular_system-muscles_of_lower_limb_ID',
    quads: "human_05_male_muscular_system-muscles_of_right_thigh_ID",
    glutes: "human_05_male_muscular_system-right_gluteal_muscles_ID",
    calves: "human_05_male_muscular_system-muscles_of_right_lower_leg_ID",
}
    render() {
        return (
            <div className="btn-group dropdown">
                <button className="btn btn-success dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={()=> this.props.selectPart(this.state.lower)}>
                        Lower Limbs
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.quads, "quads")}> Quadriceps </button>
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.glutes, "glutes")}> Gluteal muscles </button>
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.calves, "calves")}> Calves </button>
                </div>
            </div>
        );
    }
}