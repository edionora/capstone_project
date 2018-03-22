import React, { Component } from 'react';
import '../styles.css'

//"human_05_male_muscular_system-muscles_of_left_pectoral_girdle_ID"

export default class Chestbtn extends Component {
state = {
    chest: "human_05_male_muscular_system-muscles_of_left_pectoral_girdle_ID"
}


    render() {
        return (
            <div className="btn-group">
               <button className="btn btn-danger" type="button" onClick={()=> this.props.selectPart(this.state.chest, "chest")}> Chest </button>
            </div>
        );
    }
}

