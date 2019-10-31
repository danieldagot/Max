import React, { useState } from "react";
import logo from './logo.svg';
import Modal from 'react-bootstrap/Modal'
import { ButtonToolbar, Button } from 'react-bootstrap'
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Workouts from "./Components/Workouts"
import Diet from "./Components/Diet"
import Main from "./Components/Main"
import Bmi from "./Components/popups/bmi"
import Bmr from "./Components/popups/bmr"
import Split from "./Components/popups/split"
import Logic from "./logic"
import Requests from "./requests"


let human = {
  name: "byber",
  hight: 156,
  weight: 58,
  age: 18,
  sex: "female",
  activity: 3

}

let L = new Logic(human.hight, human.weight, human.age, human.sex, human.activity)
let req = new Requests()
// localStorage.setItem("human", JSON.stringify(L))
function App() {
  req.food("egg")
  return (
    <Router>
      <div className="App">
        <div class="time" >TIME</div>
        {localStorage.getItem("human")}
        <Route path="/" exact render={() => <Main />} />
        <div className="homeButton">Home button</div>
      </div>
    </Router>
  );
}
export default App;
