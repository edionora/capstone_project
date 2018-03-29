import React, { Component } from 'react';
import './Stylings/styles.css';
import './Stylings/buttonStyles.css'
import './Stylings/scrollbar.css'
import './Stylings/modalStyles.css'
import Human from './components/displayController/Human'
import Display from './components/displayController/Display'
import Help from './components/displayController/Help'
import { BodyController } from './components/bodyController/BodyController'
import axios from 'axios';

export default class App extends Component {
  state = {
    key: "",
    currentWorkout: { group: " ", suggestions: [] },
    display: { displaySuggestion: " ", displayConjunction: " " },
  }

  componentDidMount() {
    //axios.get('http://localhost:8000/key') // -> Development Mode
    axios.get('key')                       // -> Production Mode
      .then((res) => {
        this.setState({
          key: res.data
        }, () => {
          const HumanAPI = window.HumanAPI
          this.human = new HumanAPI("embedded-human")
        })
      })
  }

  selectPart = (currentPart, name) => {
    this.human.send("camera.set", { objectId: currentPart, animate: true });
    var selectObjects = { replace: true };
    selectObjects[currentPart] = true;
    this.human.send("scene.selectObjects", selectObjects);

    //const localhost = "http://localhost:8000/currentPart/" + name   // -> Development mode
    const localhost = "/currentPart/" + name   // -> Production mode
    axios.get(localhost)
      .then(res => {
        this.setState({
          currentWorkout: res.data,
          display: { displaySuggestion: " Suggested workouts for the " + name + " muscle group", displayConjunction: "Secondary muscles: " }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="headerFont"> Welcome to workout buddy!  :) </h1>
          <div className="App-logo" >&#x2665;</div>
          <div>
          </div>
        </header>

        <div className="container float-left">
          <div className="pane">
            <Help />
            <BodyController selectPart={this.selectPart} />
          </div>
          <Display
            display={this.state.display}
            currentWorkout={this.state.currentWorkout}
            suggestions={this.state.currentWorkout.suggestions} />
        </div>

        <Human APIkey={this.state.key} />
      </div>
    );
  }
}