import React, { Component, useState, useEffect } from 'react';
import ex from "./codebeautify.js"
import CreateWorkOut from "./popups/createWorkOut"


export default function Workouts() {


        return (
                <div className='container'>
                        <CreateWorkOut />
                </div>
        )
}