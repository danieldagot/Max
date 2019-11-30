import React, { useState } from "react";
import Logic from "../../../logic";
import Modal from "react-bootstrap/Modal";
import { ButtonToolbar, Button } from "react-bootstrap";
import Example from "../splitShart";

function SplitI() {
  const [human, sethuman] = useState(JSON.parse(localStorage.getItem("human")));
  console.log(human.castom_sptit ? "yrs" : "no");
  const [carbs, setcarbs] = useState(
    human.castom_sptit_test.carbs ? human.castom_sptit_test.carbs : 10
  );
  const [ptotin, setptotin] = useState(
    human.castom_sptit_test.ptotin ? human.castom_sptit_test.ptotin : 10
  );
  const [fat, setfat] = useState(
    human.castom_sptit_test.fat ? human.castom_sptit_test.fat : 80
  );

  let changeHumanWhit = function(num) {
    let h = human;
    console.log(h);
    h.weight = parseInt(num);
    console.log(h);
    //let L = new Logic(human.height, human.weight, human.age, human.sex, human.activity)
    let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity, h.split);
    console.log(L);
    sethuman(L);
  };
  let changeHumanHight = function(num) {
    let h = human;
    console.log(h);
    h.height = parseInt(num);
    console.log(h);
    //let L = new Logic(human.height, human.weight, human.age, human.sex, human.activity)
    let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity, h.split);
    console.log(L);
    sethuman(L);
  };

  let save = function() {
    localStorage.setItem("human", JSON.stringify(human));
  };
  let changeHumanSplit = function(name) {
    let h = human;
    if (name != "castom") {
      let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity, name);
      sethuman(L);
    } else {
      let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity, name);
      L.diet_spit = L.get_split(name, carbs, ptotin, fat, L.recomandetCal);
      sethuman(L);
    }
  };

  return (
    <div>
      <p> split : {JSON.stringify(human.diet_spit)}</p>
      <p>
        <select
          defaultValue={human.split}
          onChange={event => changeHumanSplit(event.target.value)}
        >
          <option value="regular">regular</option>
          <option value="kito">kito</option>
          <option value="low_fat">low_fat</option>
          <option value="low_protin">low_protin</option>
          {<option value="castom">castom</option>}
        </select>
      </p>

      <input
        type="number"
        defaultValue={human.weight}
        onChange={event => changeHumanWhit(event.target.value)}
      ></input>
      <input
        type="number"
        defaultValue={human.height}
        onChange={event => changeHumanHight(event.target.value)}
      ></input>
      <button onClick={save}> save! </button>
    </div>
  );
}

export default function Split(props) {
const [human, sethuman] = useState(JSON.parse(localStorage.getItem("human")));
  const [ShowSplit, setShowSplit] = useState(false);
  const [ShowBmi, setShowBmi] = useState(false);
  return (
    <>
      <Button variant="outline-light" onClick={() => setShowSplit(!ShowSplit)}>
        <div className="dataBatten" id="foodslit">
         <div>  <Example /></div>
         <div> { props.human ? JSON.stringify(props.human.diet_spit) : null}</div>
        </div>
      </Button>
      <Modal
        size="lg"
        show={ShowSplit}
        onHide={() => setShowSplit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Bmi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SplitI />
        </Modal.Body>
      </Modal>
    </>
  );
}
