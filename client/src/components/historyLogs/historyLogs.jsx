import React, { useState } from 'react';
//import axios from 'axios';
import HistoryCard from "./historyCard/historyCard"
import "../../styles.css"
import "./historyLogs.css"

function HistoryLogs(props) {

    return (
        <div className="HistoryLogs flex-container__history">
            <div className="sidebar__space col-md-1"></div>
            {props.userData.factors.map((oneFactor, index) => (
                <HistoryCard key={index} factor={oneFactor}/>
            ))}   
        </div>
    );
}

export default HistoryLogs;
