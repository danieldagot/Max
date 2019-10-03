import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Go from "./Components/Go"
import Plan from "./Components/Plan"
import Evaluate from "./Components/Evaluate"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bar" >
          bar
      </div>
        <div className="d1" >
          dont know
      </div>
        <div className="recap" >
          reacap
      </div>
        <div className=" actions" >
          {/* <div> <divnk to="/">Home</divnk></div> */}
          <div className="action" >
            <Link to="/Go"> Go</Link>
          </div>
          <div className="action">
            <Link to="/Plan">Plan</Link>
          </div>
          <div className="action">
            <Link to="/Evaluate">Evaluate</Link>
          </div>
        </div>
        <div className=" camorshal" >
          camorshal
      </div>
      </div>
    </Router>
  );
}

export default App;
