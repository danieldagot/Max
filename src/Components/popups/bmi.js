import React, { useState } from "react";
// export default class Bmi extends Component {
//     constructor() {
//         super()
//         this.state = {
//         }
//     }
//     render() {
//         return(
//          <div className='container'>
//              <div>
//                 {localStorage.key("human") ? localStorage.key("human") : null }

//              </div>
//         </div>
//          ) }
//  }

export default function Bmi() {
  let defs = {
    Overweight:
      "Overweight is defined as a BMI of 25 or more, thus it includes pre-obesity defined as a BMI between 25 and 30 and obesity as defined by a BMI of 30 or more. Pre-obese and overweight however are often used interchangeably, thus giving overweight a common definition of a BMI of between 25–30"
  };
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [bmi, setBmi] = useState(JSON.parse(localStorage.getItem("human")));
  return (
    <div>
      <p>You clicked {count} times</p>
      <p> {JSON.stringify(bmi.bmi)} </p>
      <p> {JSON.stringify(bmi.condition)} </p>
      <p> {defs[bmi.condition]} </p>
      <button onClick={() => setCount(count + 2)}>Click me</button>
    </div>
  );
}
