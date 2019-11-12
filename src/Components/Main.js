import React, { Component, useState , useEffect } from 'react';
import '../App.css';
import Logic from "../logic"
import Bmi from "./popups/bmi"
import Bmr from "./popups/bmr"
import Split from "./popups/split"
import Modal from 'react-bootstrap/Modal'
import { ButtonToolbar, Button ,ButtonGroup } from 'react-bootstrap'
import ex from "./codebeautify.js"

export default function Main() {
  const [ShowBmr, setShowBmr] = useState(false);
  const [ShowBmi, setShowBmi] = useState(false);
  const [ShowSplit, setShowSplit] = useState(false);
  const [human2, sethuman] = useState(JSON.parse(localStorage.getItem("human")));
  const [firslogon, setfirslogon] = useState(0)
  
  useEffect(() => {
    let human = {
      name: "byber",
      hight: 156,
      weight: 58,
      age: 18,
      sex: "female",
      activity: 3
    }
    console.log(human);
    
    let h = localStorage.getItem("human")
    if (!h) {
      console.log("test");
      let L = new Logic(human.hight, human.weight, human.age, human.sex, human.activity)
      localStorage.setItem("human", JSON.stringify(L))
    }
  })

  
  console.log(ex);

  return (
    <div className="Maincontiner" >
      <ButtonGroup >
        {human2 ? <div> <Button onClick={() => setShowBmi(!ShowBmi)}> bmi :  {human2.bmi}  </Button>
        <Button onClick={() => setShowBmr(!ShowBmr)}> bmr :  {human2.bmr} clalirs a dey  </Button>
        <Button onClick={() => setShowSplit(!ShowSplit)}>  {JSON.stringify(human2.diet_spit)}  </Button> </div>  : null }
        
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

      </ButtonGroup >
    </div>
  )
}
