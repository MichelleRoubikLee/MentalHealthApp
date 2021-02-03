import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from "./questionCard/questionCard"
import "./dayLog.css"


function DayLog(props) {

    return (
        <div className="DayLog">
            {props.factors.map((oneFactor, index) => (
                <QuestionCard key={index} factor={oneFactor}/>
            ))}   
        </div>
    );
}

export default DayLog;
