import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import "./badge.css";

import {API_FACTOR_URL} from '../../config/default';


function Badge(props) {
    var logTimeArray = [];
    var diffArray = [];
    var days = 0;
    var token = sessionStorage.getItem('sessionId');
    let badges = [
        {
            'badgeName': 'The Consistant Tracker',
            'requirement':  'track a factor (not weather) for 7 days in a row'
        },
        {
            'badgeName': 'The Multi-Tracker',
            'requirement':  'track at least 3 different factors (not weather)'

        },
        {
            'badgeName': 'The Improvement Tracker',
            'requirement': 'increase one of your scores three days in a row'
        }
    ];

    function checkConsistantBadge(){
        for(let i = 0; i<props.userData.factors.length; i++){
            let factor = props.userData.factors[i];
            for(let k = 0; k<factor.logs.length; k++){
                let logTime = factor.logs[k].date;

                const logYear = parseInt(logTime.slice(0,4));
                const logMonth = parseInt(logTime.slice(5,7));
                const logDay = parseInt(logTime.slice(8,10));
                const logHour = parseInt(logTime.slice(11,13));
                const logTotalHours = (logYear * 8760) + (logMonth * 730) + (logDay * 12) + logHour;

                logTimeArray.push(logTotalHours);
                 
            }
            for (let n = 1; n < logTimeArray.length; n++){
                diffArray.push(logTimeArray[n] - logTimeArray[n - 1])
            } 
            //console.log(diffArray);
            for (let a = 0; a < diffArray.length; a++){
                if(diffArray[a]<36){
                    days++;
                    if(days == 7){
                        return (
                            <div className='badgeCard'>
                                <h3>{badges[0].badgeName}</h3>
                                <p>{badges[0].requirement}</p>
                            </div>
                        )
                    }
                }else{
                    days=0;
                }
            } 
            logTimeArray=[];
            diffArray=[];
            days = 0; 
        }
    }

    function checkMultiBadge(){
        console.log(props.userData.factors.length);
        if(props.userData.factors.length >= 3){
            return(
                <div className='badgeCard'>
                    <h3>{badges[1].badgeName}</h3>
                    <p>{badges[1].requirement}</p>
                </div>
            )
        }
    }
    
 
    

  return (
    <div className="Badge">
        <h2>Your Badges:</h2>
        {checkConsistantBadge()}
        {checkMultiBadge()}

    </div>
  );
}

export default Badge;