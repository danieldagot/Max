import React, { useState } from 'react';
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
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [bmi ,setBmi] = useState(JSON.parse(localStorage.getItem("human"))) 
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>  {JSON.stringify(bmi.bmi)} </p>
            <p>  {JSON.stringify(bmi.condition)} </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div>
    )

}
