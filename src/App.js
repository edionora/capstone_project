import React, { Component } from 'react';
import './Stylings/styles.css';
import './Stylings/buttonStyles.css'
import './Stylings/scrollbar.css'
import Human from './components/Human'
import Chestbtn from './components/Chestbtn'
import Backbtn from './components/Backbtn'
import UpperLimbsbtn from './components/UpperLimbsbtn'
import LowerLimbsbtn from './components/LowerLimbsbtn'
import Corebtn from './components/Corebtn'
import Display from './components/Display'
import Help from './components/Help'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      currentWorkout: {group: " ", suggestions: []},
      display:{ displaySuggestion: " ", displayConjunction: " "},
      logo:""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/key') // -> Development Mode
//    axios.get('key')                      // -> Production Mode
    .then((res)=>{
      console.log(res)
      this.setState({
        key: res.data
      },()=> {
        const HumanAPI = window.HumanAPI
        this.human = new HumanAPI("embedded-human")})
    })
  }




  selectPart = (currentPart, name) => {
    this.human.send("camera.set", { objectId: currentPart, animate: true });

    //highlight object
    var selectObjects = { replace: true };
    selectObjects[currentPart] = true;
    this.human.send("scene.selectObjects", selectObjects);

     const localhost = "http://localhost:8000/currentPart/" + name   // -> Development mode
    // const localhost = "/currentPart/" + name   // -> Production mode
    axios.get(localhost)
    
    .then (res => {
      this.setState({
        currentWorkout: res.data,
        display: {displaySuggestion: " Suggested workouts for selected body part(s): ", displayConjunction: "Secondary muscles: "}
      })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="headerFont">  </h1>
          <div className="App-logo" >&#x2665;</div>
          <div>
        </div>
        </header>

        <div className="container float-left">
          
          <div className="pane">
          <Help/>
          <Chestbtn selectPart={this.selectPart}/>
          <Corebtn selectPart={this.selectPart}/>
          <Backbtn selectPart={this.selectPart}/>
          <UpperLimbsbtn selectPart={this.selectPart}/>
          <LowerLimbsbtn selectPart={this.selectPart}/>
          </div>
          <Display
          display={this.state.display}
          currentWorkout={this.state.currentWorkout}
          suggestions={this.state.currentWorkout.suggestions}/>
          
        </div>
        <Human APIkey={this.state.key}/>
      </div>
    );
  }
}

export default App;
//   // />