import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Workouts from "./Components/Workouts"
import Diet from "./Components/Diet"
import Main from "./Components/Main"
import Bmi from "./Components/popups/bmi"


import Logic from "./logic"  
let human ={
  hight : 180,
  weight :  80 ,
  age : 18 , 
  sex : "male" , 
  activity : 1 
}
let L = new Logic(human.hight,human.weight,human.age,human.sex,human.activity)
localStorage.setItem("human",JSON.stringify(L))
function App() {
  console.log(L);
  return (

    <Router>
      
      <div className="App">
        {localStorage.getItem("human")}
      <Route path="/" exact render={() => <Bmi />} />
      
    
        <div className=" camorshal" >
         
      </div>
      </div>

    </Router>
  );
}

export default App;
