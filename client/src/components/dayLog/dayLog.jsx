import React, { useState } from 'react';
import axios from 'axios';

import QuestionCard from "./questionCard/questionCard"


function DayLog() {


    const questions = [
        "anxiety",
        "depression",
        "stress",
        "temperature",
        "airQuality",
        "sleepTime",
        "meditation",
        "exerciseTime",
        "eatBreakfast"
    ];


    return (
        <div className="DayLog">Day Log
            {questions.map((question, index) => (
                <QuestionCard key={index} question={question}/>
            ))}
        </div>
    );
}

export default DayLog;
