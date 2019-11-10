import React, { useState, useEffect } from "react";
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
import Strength from "./Components/Strength"
import 'bootstrap/dist/css/bootstrap.min.css'
import HamburgerMenuPage from "./Components/hamburgerMenuPage"

//localStorage.setItem("userWorkouts", JSON.stringify({}))
// let userWorkouts =  localStorage.getItem("userWorkouts")
//    if(!userWorkouts)
//         {
//                  localStorage.setItem("userWorkouts", JSON.stringify({}))
//         } 
// let L = new Logic(human.hight, human.weight, human.age, human.sex, human.activity)
// let req = new Requests()
// localStorage.setItem("human", JSON.stringify(L))


function App() {
  useEffect(() => {
    var human = {
      name: "byber",
      hight: 156,
      weight: 58,
      age: 18,
      sex: "female",
      activity: 3
    }

    console.log("test");
    let w = localStorage.getItem("userWorkouts")
    if (!w) {
      localStorage.setItem("userWorkouts", JSON.stringify({}))
    }

    let h = localStorage.getItem("human")
    console.log(h);
    
    if (!h) {
      let L = new Logic(human.hight, human.weight, human.age, human.sex, human.activity)
      localStorage.setItem("human", JSON.stringify(L))
    }

  })

  // req.food("egg")
  return (
    <Router>
      <div className="App">
        {/* <div className="time">TIME</div>
        <div class="topbar"> logo and hamburger go here </div> */}
        <HamburgerMenuPage />
        {/* {localStorage.getItem("human")} */}
        <Route path="/1" exact render={() => <Strength />} />
        <Route path="/" exact render={() => <Main />} />
        <div className="homeButton">Home button</div>
      </div>
    </Router>
  );
}
export default App;

