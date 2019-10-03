import React, { Component } from 'react';

export default class Evaluate extends Component {
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
       return(
        <div className='container'>
            Evaluate
       </div>
        ) }
}