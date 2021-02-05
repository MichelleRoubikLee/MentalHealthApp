import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from "./questionCard/questionCard"
import "./dayLog.css"


function DayLog(props) {

    return (
        <div className="DayLog flex-container">
            {props.factors.map((oneFactor, index) => (
                //check to see if currently being tracked or already logged for the day
                <QuestionCard key={index} factor={oneFactor} getUser = {props.getUser}/>
            ))}   
        </div>
    );
}

export default DayLog;
