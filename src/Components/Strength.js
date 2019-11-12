import { ButtonToolbar, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import React, { Component, useState, useEffect } from 'react';
import strengthLogic from "./popups/strengthLogic"
import OneRapMax from "./popups/OneRepMax"
let Calcs = new strengthLogic()

const Example = props => {
    let h = JSON.parse(localStorage.getItem("human"))
    Calcs.wiks(h.sex, h.weight, 300)
    const [show, setShow] = useState(false);
    const [total, settotal] = useState(100);
    let wiks = Calcs.wiks(h.sex, h.weight, total)
    return (
        <>

            <Button variant="outline-light" onClick={() => setShow(true)}>
                <div className="dataBatten" id="wiks">
                    wiks
                                <p> score :{JSON.stringify(Math.round(wiks.score))}</p>
                    <p> level :{JSON.stringify(wiks.leval)}</p>
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
                        wiks
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <p>


                            <input type="number" placeholder="total banch + scqwt + deadlift" onChange={event => settotal(event.target.value)}  ></input>
                            {/* <input type="number" placeholder="total banch + scqwt + deadlift"  ></input> */}

                            <p>
                                {JSON.stringify(Calcs.wiks(h.sex, h.weight, total))}
                            </p>
                        </p>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default function Strength() {
    const [reps, setReps] = useState()
    const [white, setWhite] = useState();
    const [oneRepM, setoneRepM] = useState()
    const [eq, setEq] = useState()
    const [bool, setBool] = useState()

    useEffect(() => {
        let pr = localStorage.getItem("pr")
        console.log(pr);
        if (!pr) {
            // setReps(4)
            // setWhite(100)
            let data = {
                reps: 1,
                white: 100,
                eq: "  "
            }
            localStorage.setItem("pr", JSON.stringify(data))

        }
        else {
            let sets = JSON.parse(pr)
            let data = {
                reps: reps,
                white: white,
                eq: eq
            }
            localStorage.setItem("pr", JSON.stringify(data))
            console.log(localStorage.getItem("pr"));
            if (reps && white && eq) {
                console.log(Calcs.oneRepMax(white, reps));
                setoneRepM(Calcs.oneRepMax(white, reps)[eq])
            }

            if (!bool) {
                console.log(sets);
                setReps(sets.reps)
                setWhite(sets.white)
                setEq(sets.eq)
                setoneRepM(Calcs.oneRepMax(sets.white, sets.reps)[sets.eq])
                console.log(Calcs.oneRepMax(sets.white, sets.reps)[sets.eq]);
                localStorage.setItem("pr", JSON.stringify(data))
                setBool(1)
            }
            else {
                let data = {
                    reps: reps,
                    white: white,
                    eq: eq
                }
                localStorage.setItem("pr", JSON.stringify(data))
            }
        }


    })
    return (
        <div className='container'>
            <p>{oneRepM}</p>
            <div>
                strength cpmprisan
                stength standars
            </div>

            <OneRapMax setEq={setEq} setoneRepM={setoneRepM} oneRepM={oneRepM} reps={reps} setReps={setReps} Calcs={Calcs} white={white} setWhite={setWhite} />
            <Example />
        </div>
    )

}