import React, { useState } from 'react';
//import axios from 'axios';
import HistoryCard from "./historyCard/historyCard"
import "../../styles.css"
import "./historyLogs.css"

function HistoryLogs(props) {

    return (
        <div className="HistoryLogs flex-container container">
        {/* put extra div here only when nav not collapsed (size is 1/6)*/}
            {props.userData.factors.map((oneFactor, index) => (
                <HistoryCard key={index} factor={oneFactor}/>
            ))}   
        </div>
    );
}

export default HistoryLogs;
