import React, { Component, useState, useEffect } from 'react';
import ex from "./codebeautify.js"
import CreateWorkOut from "./popups/createWorkOut"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { type } from 'os';


import "../Styles/workOuts.css"

function ControlledTabs(props) {
        const [key, setKey] = useState('home');
        let w = props.Workouts

        return (
                <>
                        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                                {w.workouts ? w.workouts.map(l => <Tab eventKey={l.name} title={l.name}  >{w.workouts ? <Workout Workout={l} /> : null}</Tab>) : null}
                        </Tabs>
                        
                </>

        );
}


function Workout(props) {
        return (
                <div>

                        <div className="workoutName" >
                                {JSON.stringify(props.Workout ? props.Workout.name : "")}
                        </div>
                        <div className="exsirsice">
                                {props.Workout ? props.Workout.exsrises.map(e => <p>
                                       <div> body part : {e.bodyPart} </div> 
                                       <div>exsicice name :  {e.name}</div> 
                                        <div> sets : {e.sets}</div> 
                                        <div> reps : {e.reps}</div> 

                                </p>) : null}
                        </div>

                </div>
        )

}

export default function Workouts() {

        let w = JSON.parse(localStorage.getItem("userWorkouts"))
        if (!w) {
                w = []
        }
        const [workOuts, setworkOuts] = useState(w);

        let saveWorkouts = function (data) {
                console.log(data);

                let w = JSON.parse(localStorage.getItem("userWorkouts"))
                console.log(w);
                if (w === {} || !w) {
                        w = {}
                        w.workouts = []
                        console.log(w);

                }
                if (!w.workouts) {
                        w["workouts"] = []
                        console.log(w);
                }
                w.workouts.push(data)
                console.log(w);
                localStorage.setItem("userWorkouts", JSON.stringify(w))
                window.location.reload()

        }
        return (
                <div className='workoutContiner'>

                        <ControlledTabs Workouts={w} />
                        <CreateWorkOut save={saveWorkouts} />

                </div>
        )
}