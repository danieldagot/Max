import React, { Component, useState } from 'react';
import '../App.css';
import Logic from "../logic"
import Bmi from "./popups/bmi"
import Bmr from "./popups/bmr"
import Split from "./popups/split"
import Modal from 'react-bootstrap/Modal'
import { ButtonToolbar, Button } from 'react-bootstrap'
import ex from "./codebeautify.js"

export default function Main() {
  const [ShowBmr, setShowBmr] = useState(false);
  const [ShowBmi, setShowBmi] = useState(false);
  const [ShowSplit, setShowSplit] = useState(false);
  const [human2, sethuman] = useState(JSON.parse(localStorage.getItem("human")));
  console.log(ex);

  return (
    <div className=" q" >
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
  )
}
