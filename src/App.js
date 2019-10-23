import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Workouts from "./Components/Workouts"
import Diet from "./Components/Diet"
import Main from "./Components/Main"

import Logic from "./logic"  
let L = new Logic 
function App() {
  console.log(L);
  return (
    <Router>
      
      <div className="App">
      <Route path="/" exact render={() => <Main />} />
      
    
        <div className=" camorshal" >
         
      </div>
      </div>

    </Router>
  );
}

export default App;
