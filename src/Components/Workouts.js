import React, { Component, useState, useEffect } from 'react';
import ex from "./codebeautify.js"
export default function Workouts() {

        //localStorage.setItem("userWorkouts", JSON.stringify({}))
        const [choce, setChoce] = useState("*");
        const [input, setInput] = useState("");
        const [sets, setSets] = useState(null);
        const [reps, setReps] = useState(null);
        const [workout, setWortout] = useState([]);
        const [userWorkouts, setWortouts] = useState(JSON.parse(localStorage.getItem("userWorkouts")));
        const [workoutName, setWortoutName] = useState();

        let body = {}
        ex.map(e => body[e["body part "]] = 1)
        let e = Object.keys(body)
        let filter = ex.filter(f => f["body part "] == choce)
        console.log(filter);
        let changeBodyPart = function (data) {
                setInput("")
                setChoce(data)
        }
        let addExsarsise = function () {
                let exsrise = {
                        name: choce,
                        sets: sets,
                        reps: reps
                }
                let work = workout
                work[work.length] = exsrise
                setWortout(work)
                setInput("")
                setReps("")
                setSets("")
        }
        let saveWorkout = function () {
                
                setWortouts(userWorkouts[workoutName] = workout)
                console.log(userWorkouts);
                localStorage.setItem("userWorkouts",  JSON.stringify(userWorkouts))
        }

        return (
                <div className='container'>
                        <p>                         <input type="text" placeholder="woekout name" onChange={event => setWortoutName(event.target.value)} ></input>
                        </p>
                        <select onChange={event => changeBodyPart(event.target.value)}  >
                                <option value="*" ></option>
                                {e.map(d => <option value={d} >{d}</option>)}
                        </select>
                        <input list="options" id="option-input" value={input} onChange={event => setInput(event.target.value)} />
                        <datalist id="options">
                                {filter.map(d => <option value={d.name} >{JSON.stringify(d.name)}</option>)}
                        </datalist>
                        <input type="number" placeholder="sets" value={sets} onChange={event => setSets(event.target.value)} ></input>
                        <input type="number" placeholder="reps" value={reps} onChange={event => setReps(event.target.value)}  ></input>
                        <button onClick={addExsarsise}>+</button>
                        <p> <button onClick={saveWorkout}>save workout</button> </p>
                        <p>{JSON.stringify(workout)}</p>
                        <p>{JSON.stringify(userWorkouts)}</p>

                </div>
        )
}