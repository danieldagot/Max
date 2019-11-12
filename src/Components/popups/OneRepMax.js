import React, { Component, useState, useEffect } from 'react';
import strengthLogic from "./strengthLogic"
import Modal from 'react-bootstrap/Modal'
import { ButtonToolbar, Button } from 'react-bootstrap'

export default  function OneRapMax(props){
    const [show, setShow] = useState(false);
    const [white, setWhite] = useState(10);
    return (
       <>

            <Button variant="outline-light" onClick={() => setShow(true)}>
                 <div  className = "dataBatten" id = "oneRepMax">

                 One rep max: {props.oneRepM? props.oneRepM : null }   
                 </div>
             </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        One rep max: {props.oneRepM? props.oneRepM : null }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <input type="number"  min="2" placeholder="reps" onChange={event => props.setReps(event.target.value)}  ></input>
                        <input type="number" placeholder="white" onChange={event => props.setWhite(event.target.value)}  ></input>
                        <p>
                            <select onChange={event => props.setEq(event.target.value)}>
                                {Object.keys(props.Calcs.oneRepMax(white, props.reps)).map(k => <option>{k} </option>)}
                            </select>
                        </p>
                    </p>
                </Modal.Body>
            </Modal>
           </>
    );
}

