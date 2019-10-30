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

let human = {
  hight: 156,
  weight: 58,
  age: 18,
  sex: "female",
  activity: 3
}

// let L = new Logic(human.hight, human.weight, human.age, human.sex, human.activity)

// localStorage.setItem("human", JSON.stringify(L))


function App() {
  const [ShowBmr, setShowBmr] = useState(false);
  const [ShowBmi, setShowBmi] = useState(false);
  const [ShowSplit, setShowSplit] = useState(false);
  const [human2, sethuman] = useState(JSON.parse(localStorage.getItem("human")));
  console.log(human2);
  return (
    
    
    <Router>
      
      <div className="App">
        {localStorage.getItem("human")}
        {/* <Route path="/" exact render={() => <Bmi />} /> */}
        <div className=" camorshal" >
          <ButtonToolbar>
            <button onClick={() => setShowBmi(!ShowBmi)}> bmi :  {human2.bmi}  </button>
            <button onClick={() => setShowBmr(!ShowBmr)}> bmr :  {human2.bmr} clalirs a dey  </button>
            <button onClick={() => setShowSplit(!ShowSplit)}>  {JSON.stringify(human2.diet_spit)}  </button>
            <Modal
              size="lg"
              show={ShowBmi}
              onHide={() => setShowBmi(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Bmi
          </Modal.Title>
              </Modal.Header>
              <Modal.Body> <Bmi /> </Modal.Body>
            </Modal>

            <Modal
              size="lg"
              show={ShowBmr}
              onHide={() => setShowBmr(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Bmr
          </Modal.Title>
              </Modal.Header>
              <Modal.Body> <Bmr /> </Modal.Body>
            </Modal>


            <Modal
              size="lg"
              show={ShowSplit}
              onHide={() => setShowSplit(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Bmi
          </Modal.Title>
              </Modal.Header>
              <Modal.Body> <Split /> </Modal.Body>
            </Modal>

          </ButtonToolbar>
        </div>
      </div>
    </Router>
  );
}
export default App;
