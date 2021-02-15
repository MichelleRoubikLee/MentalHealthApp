import React, { useState } from 'react';
//import axios from 'axios';
//import jwt_decode from "jwt-decode";
import "./historyCard.css";
import "../../../styles.css"


function HistoryCard(props) {

    function showDate(date){
        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);
        const displayDate = month + "/" + day + "/" + year;
        return displayDate;
    }
   

    return (
        <div className="HistoryCard flex-child__history">
            <div className="content">
                <h4 className="">{props.factor.factorName}</h4>
                {props.factor.logs.map((log,index) => (
                    <div className="dateLog" key={index}>
                        <div className="answer">Answered: {log.result}</div>
                        <div className="date">Date: {showDate(log.date)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoryCard;
