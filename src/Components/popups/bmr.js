import React, { useState } from "react";
import Logic from "../../logic"


export default function Bmr() {
    let defs = {
        Overweight:
            "Overweight is defined as a BMI of 25 or more, thus it includes pre-obesity defined as a BMI between 25 and 30 and obesity as defined by a BMI of 30 or more. Pre-obese and overweight however are often used interchangeably, thus giving overweight a common definition of a BMI of between 25–30",
    };
    // Declare a new state variable, which we'll call "count"

    const [count, setCount] = useState(80);
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
        h.weight = parseInt(num)
        console.log(h);
        //let L = new Logic(human.height, human.weight, human.age, human.sex, human.activity)
        let L = new Logic(h.height, h.weight, h.age, h.sex, h.activity)
        console.log(L);
        sethuman(L)
    }

    return (
        <div>
            <p> bmr :  {JSON.stringify(human)} </p>
            <p> bmr :  {JSON.stringify(human.cal)} </p>
            <p> recomandetCal :  {JSON.stringify(human.recomandetCal)} </p>
            <input type="number" defaultValue={count} onChange={event => changeHumanWhit(event.target.value)}></input>
            {/* {JSON.stringify( new Logic(human))} */}
            <p> {count} </p>
        </div>
    );
}
