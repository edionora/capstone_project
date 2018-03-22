import React, { Component } from 'react';
import '../styles.css'


export default class UpperLimbsbtn extends Component {
state = {
    upper: "human_05_male_muscular_system-muscles_of_left_upper_limb_ID",
    arms: "human_05_male_muscular_system-muscles_of_left_upper_arm_ID",
    shoulders: "human_05_male_muscular_system-left_deltoid_ID",
    forearms: "human_05_male_muscular_system-muscles_of_left_forearm_ID"
}
    render() {
        return (
            <div className="btn-group dropdown">
                <button className="btn btn-warning dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={()=> this.props.selectPart(this.state.upper)}>
                    Upper Limbs
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.arms, "arms")}> Arms (Biceps/Triceps) </button>   
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.shoulders, "shoulders")}> Shoulders </button>
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.forearms, "forearms")}> Forearms </button>
                </div>
            </div>
        );
    }
}

