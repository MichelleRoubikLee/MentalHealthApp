import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import "./historyCard.css"


function HistoryCard(props) {
   

    return (
        <div className="HistoryCard flex-child">
            <h4 className="">{props.factor.factorName}</h4>
            {props.factor.logs.map((log,index) => (
                <div className="dateLog" key={index}>
                    <div>Answered: {log.result}</div>
                    <div>Date: {log.date}</div>
                </div>
            ))}
        </div>
    );
}

export default HistoryCard;
