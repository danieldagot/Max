import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Modal from 'react-bootstrap/Modal'
import { ButtonToolbar, Button } from 'react-bootstrap'
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Workouts from "./Components/Workouts"
import Diet from "./Components/Diet"
import Main from "./Components/Main"
import Logic from "./logic"
import Requests from "./requests"
import Strength from "./Components/Strength"
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./Components/hamburgerMenuPage"

//localStorage.setItem("userWorkouts", JSON.stringify({}))
// let userWorkouts =  localStorage.getItem("userWorkouts")
//    if(!userWorkouts)
//         {
//                  localStorage.setItem("userWorkouts", JSON.stringify({}))
//         } 
// let L = new Logic(human.hight, human.weight, human.age, human.sex, human.activity)
// let req = new Requests()
// localStorage.setItem("human", JSON.stringify(L))

let lc = function()
   {
     localStorage.clear()
   }
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
        <SideBar />
        {/* <div className="time">TIME</div> */}
        <div class="topbar"> logo and hamburger go here </div>

        {/* {localStorage.getItem("human")} */}
        <Route path="/Strength" exact render={() => <Strength />} />
        <Route path="/" exact render={() => <Main />} />
        <Route path="/Workouts" exact render={() => <Workouts />} />
        {/* <div className="homeButton">Home button</div> */}
      </div>
      <button onClick={lc} >localStorage.clear </button>
    </Router>
  );
}
export default App;

