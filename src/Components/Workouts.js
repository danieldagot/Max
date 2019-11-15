import React, { Component, useState, useEffect } from 'react';
import ex from "./codebeautify.js"
import CreateWorkOut from "./popups/createWorkOut"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
function ControlledTabs(props) {
        const [key, setKey] = useState('home');
      let w =  Object.keys(props.Workouts)
        return (
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="home" title="Home">

            </Tab>
            <Tab eventKey="profile" title="Profile">
            
            </Tab>
            <Tab eventKey="contact" title="Contact" >
             
            </Tab>
            {}
        {JSON.stringify(w[0])}
          </Tabs>
        );
      }

      


export default function Workouts() {
        let w = JSON.parse(localStorage.getItem("userWorkouts"))
                if (!w)
                {
                       w = {} 
                }
        return (
                <div className='container'>
                        
                        <ControlledTabs Workouts= {w} />
                        <CreateWorkOut />
                        
                </div>
        )
}