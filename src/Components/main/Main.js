import React, { Component, useState, useEffect } from "react";
import Logic from "../../logic";
import Bmi from "./popups/bmi";
import Bmr from "./popups/bmr";
import Split from "./popups/split";
import Modal from "react-bootstrap/Modal";
import { ButtonToolbar, Button, ButtonGroup } from "react-bootstrap";
import ex from "../codebeautify.js";

import { PieChart, Pie, Sector, Cell } from "recharts";

import "../../Styles/main.css";

import Example from "./splitShart";

export default function Main() {
  const [human2, sethuman] = useState(
    JSON.parse(localStorage.getItem("human"))
  );
  const [firslogon, setfirslogon] = useState(0);

  useEffect(() => {
    let human = {
      name: "byber",
      hight: 156,
      weight: 58,
      age: 18,
      sex: "female",
      activity: 3
    };
    console.log(human);

    let h = localStorage.getItem("human");
    if (!h) {
      console.log("test");
      let L = new Logic(
        human.hight,
        human.weight,
        human.age,
        human.sex,
        human.activity
      );
      localStorage.setItem("human", JSON.stringify(L));
    }
  });

  console.log(ex);

  return (
    <div className="MainContiner">
      {JSON.stringify(human2)}
      <Bmr human = {human2} />
      <Bmi human = {human2} />
      <Split human = {human2} />
      )}
    </div>
  );
}
