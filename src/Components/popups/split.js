import React, { useState } from "react";
import Logic from "../../logic"
export default function Split() {

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

    let save = function () {
        localStorage.setItem("human", JSON.stringify(human))
    }
    
    return (
        <div>
            <p> split :  {JSON.stringify(human.split)} </p>
            <p>
                <select defaultValue="kito" >
                <option value="kito">kito</option>
                <option value="low_fat">low_fat</option>
                <option value="low_protin">low_protin</option>
                <option value="castom">castom</option>
            </select>
            </p>


            <input type="number" defaultValue={human.weight} onChange={event => changeHumanWhit(event.target.value)}></input>
            <input type="number" defaultValue={human.height} onChange={event => changeHumanHight(event.target.value)}></input>
            <button onClick={save} > save! </button>
        </div>
    );
}