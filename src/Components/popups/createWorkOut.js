import React, { Component, useState, useEffect } from 'react';
import ex from "../codebeautify.js"
import Modal from 'react-bootstrap/Modal'
import { ButtonToolbar, Button } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    // fab: {
    //     position: 'absolute',
    //     bottom: theme.spacing(2),
    //     right: theme.spacing(2),
    
    // },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


export default function CreateWorkOut(props) {
    const classes = useStyles();
    //localStorage.setItem("userWorkouts", JSON.stringify({}))
    const [choce, setChoce] = useState("*");
    const [input, setInput] = useState("");
    const [sets, setSets] = useState(null);
    const [reps, setReps] = useState(null);
    const [workout, setWortout] = useState([]);
    const [userWorkouts, setWortouts] = useState(JSON.parse(localStorage.getItem("userWorkouts")));
    const [workoutName, setWortoutName] = useState();
    const [show, setShow] = useState(false);

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
        // let w = JSON.parse(localStorage.getItem("userWorkouts"))
        // setWortouts(userWorkouts[workoutName] = workout)
        // w[workoutName] = workout
        // console.log(userWorkouts);
        // localStorage.setItem("userWorkouts", JSON.stringify(w))
        console.log(props);
        let work = {}
        work.name = workoutName 
        work.exsrises =  workout 
        props.save(work)
        
    }

    return (
        <div className='container'>
            <Button variant="outline-light" onClick={() => setShow(true)}>
                <div2 id = "addWorkOutPlace">
            <Fab color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                        </Fab>
                        </div2>
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id = "addWorkOutBody" >
                        <p>
                            <input type="text" placeholder="workout name" onChange={event => setWortoutName(event.target.value)} ></input>
                        </p>
                        <select placeholder = "select body part" onChange={event => changeBodyPart(event.target.value)}  >
                            <option value="" > select body part </option>
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

                </Modal.Body>
            </Modal>



        </div>
    )
}