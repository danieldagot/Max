import React, { Component } from 'react';
import Logic from "../logic"
let L = new Logic
export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            User: "",
            Age: 0,
            Country: "",
            Gender: "",
            interested: [],
            finishedDetails: 0
        }

    }

    render() {
        return (
            <div className='container'>
                <div className=" hodaot" >
                </div>
                <div className="data">
                    <div className="btn">
                        BMT
                    </div>
                    <div className="btn">
                    </div>
                    <div className="btn">

                    </div>
                    <div className="btn">

                    </div>
                    <div className="btn">

                    </div>
                </div>

                <div>

                </div>
            </div>
        )
    }
}