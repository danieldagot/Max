import React, { Component, useState } from 'react';
import ex from "./codebeautify.js"
export default function Workouts() {

        const [choce, setChoce] = useState("*");
        const [input, setInput] = useState("");
        const [sets, setSets] = useState(0);
        const [reps, setReps] = useState(0);
        const [workout, setWortout] = useState([]);
        let body = {}
        ex.map(e => body[e["body part "]] = 1)
        let e = Object.keys(body)

        let filter = ex.filter(f => f["body part "] == choce)
        console.log(filter);

        let changeBodyPart = function (data) {
                setInput("")
                setChoce(data)
        }
        let addExsarsise = function()
        {

                let exsrise = {
                        name :  choce,
                        sets  : sets,
                        reps : reps 
                }
                let work = workout 
               work[work.length] = exsrise
                setWortout(work)  
                setInput("")
                setReps(0)
                setSets(0)
        }
        return (
                <div className='container'>

                        <select onChange={event => changeBodyPart(event.target.value)}  >
                                <option value="*" ></option>
                                {e.map(d => <option value={d} >{d}</option>)}
                        </select>

                        <input list="options" id="option-input"  value={input}  onChange={event => setInput(event.target.value)} />
                        <datalist id="options">
                                        {filter.map(d => <option value={d.name} >{JSON.stringify(d.name)}</option>)}
                        </datalist>
                        <input type= "number"  placeholder = "sets" onChange={event => setSets(event.target.value)} ></input>
                        <input type= "number" placeholder = "reps"  onChange={event => setReps(event.target.value)}  ></input>
                        <button onClick = {addExsarsise}>+</button>
                        <p>{JSON.stringify(workout)}</p>
                </div>
        )
}