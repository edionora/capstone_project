import React, { Component } from 'react';
import './styles.css';
import Human from './components/Human'
import Chestbtn from './components/Chestbtn'
import Backbtn from './components/Backbtn'
import UpperLimbsbtn from './components/UpperLimbsbtn'
import LowerLimbsbtn from './components/LowerLimbsbtn'
import Display from './components/Display'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      currentWorkout: {group: " ", suggestions: [], conjunction: [], image: ""},
      display:{ displaySuggestion: " ", displayConjunction: " "},
      logo:""
    }
  }

  componentDidMount() {
    axios.get('/key')
    .then((res)=>{
      console.log(res)
      this.setState({
        key: res.data
      },()=> {
        const HumanAPI = window.HumanAPI
        this.human = new HumanAPI("embedded-human")})
    })
    // const HumanAPI = window.HumanAPI
    // this.human = new HumanAPI("embedded-human")
  }




  selectPart = (currentPart, name) => {
    this.human.send("camera.set", { objectId: currentPart, animate: true });

    //highlight object
    var selectObjects = { replace: true };
    selectObjects[currentPart] = true;
    this.human.send("scene.selectObjects", selectObjects);

    const localhost = "/currentPart/" + name
    axios.get(localhost)
    
    .then (res => {
      console.log(res)
      this.setState({
        currentWorkout: res.data,
        display: {displaySuggestion: " Suggested workouts for selected body part(s): ", displayConjunction: " Body parts that are being worked in conjunction: "}
      })
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="headerFont">Welcome</h1>
          <div className="App-logo" >&#x2665;</div>
          <div>
          <h3 className="subHeader">Click a button to learn about workouts for that particular body part. 
          Interact with the model on the right to learn more about your muscle groups</h3>
        </div>
        </header>
       

        <div className="container float-left">
          <div >
          <Chestbtn selectPart={this.selectPart}/>
          <Backbtn selectPart={this.selectPart}/>
          <UpperLimbsbtn selectPart={this.selectPart}/>
          <LowerLimbsbtn selectPart={this.selectPart}/>
          </div>
          <Display
          display={this.state.display}
          currentWorkout={this.state.currentWorkout}
          suggestions={this.state.currentWorkout.suggestions} conjunction={this.state.currentWorkout.conjunction}/>
          
        </div>
        <Human APIkey={this.state.key}/>
      </div>
    );
  }
}

export default App;
//   // />