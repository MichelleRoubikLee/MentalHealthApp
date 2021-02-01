import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from "./questionCard/questionCard"


function DayLog(props) {

    return (
        <div className="DayLog">Hello
            {props.factors.map((oneFactor, index) => (
                <QuestionCard key={index} factor={oneFactor}/>
            ))}
            
            {console.log(props.factors)}
        </div>
    );
}

export default DayLog;
