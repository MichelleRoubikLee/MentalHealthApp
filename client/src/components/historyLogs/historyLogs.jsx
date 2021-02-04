import React, { useState } from 'react';
import axios from 'axios';
import HistoryCard from "./historyCard/historyCard"
import "./historyLogs.css"

function HistoryLogs(props) {

    return (
        <div className="HistoryLogs flex-container">
            {props.userData.factors.map((oneFactor, index) => (
                <HistoryCard key={index} factor={oneFactor}/>
            ))}   
        </div>
    );
}

export default HistoryLogs;
