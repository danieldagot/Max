import React, { useState } from "react";
import Logic from "../../logic"  

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
      "Overweight is defined as a BMI of 25 or more, thus it includes pre-obesity defined as a BMI between 25 and 30 and obesity as defined by a BMI of 30 or more. Pre-obese and overweight however are often used interchangeably, thus giving overweight a common definition of a BMI of between 25–30",
      Underweight : "Being underweight could be a sign you're not eating enough or you may be ill. If you're underweight, a GP can help",
      Normal : "Keep up the good work! For tips on maintaining a healthy weight, check out the food and diet and fitness sections.",
      Obese : " Well above one's normal weight. A person has traditionally been considered to be obese if they are more than 20% over their ideal weight. That ideal weight must take into account the person's height, age, sex, and build."
  };
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [bmi, setBmi] = useState(JSON.parse(localStorage.getItem("human")));
  const [human, sethuman] = useState(JSON.parse(localStorage.getItem("human")));

  let changeHumanWhit = function (num) {
    let h = human
    console.log(h);
    h.weight = parseInt(num)
    console.log(h);
    //let L = new Logic(human.height, human.weight, human.age, human.sex, human.activity)
    let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity)
    console.log(L);
    sethuman(L)
}
let changeHumanHight = function (num) {
    let h = human
    console.log(h);
    h.height = parseInt(num)
    console.log(h);
    //let L = new Logic(human.height, human.weight, human.age, human.sex, human.activity)
    let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity)
    console.log(L);
    sethuman(L)
}
  return (
    <div>
     
      <p> bmi :  {JSON.stringify(human.bmi)} </p>
      <p> def :  {JSON.stringify(human.condition)} </p>
      <p> mining :  {defs[human.condition]} </p>
      <button onClick={() => setCount(count + 2)}>Click me</button>
      <input type="number" defaultValue={human.weight} onChange={event => changeHumanWhit(event.target.value)}></input>
            <input type="number" defaultValue={human.height} onChange={event => changeHumanHight(event.target.value)}></input>
    </div>
  );
}
