import React, { useState } from 'react';
//import axios from 'axios';
import QuestionCard from "./questionCard/questionCard"
import WeatherCard from "./weatherCard/weatherCard"
import "./dayLog.css";
import "../../styles.css";
import useFirstRender from "../../firstRenderHook/useFirstRender";
//import jwt_decode from "jwt-decode";

function DayLog(props) {
    const [zipCode, setZipCode] = useState("");
    let logTime = 0;
    let questions = [];
    let weatherQuestions = [];

    const firstRender = useFirstRender();

    var date = new Date().toISOString();
    
    var token = sessionStorage.getItem('sessionId');
    //var decoded = jwt_decode(token);

    const handleChange = (event) => {
        setZipCode(event.target.value)
    }

    function compareDates(element,array){
        if(element.logs.length != 0){

            logTime = element.logs[element.logs.length -1].date;
            const logYear = parseInt(logTime.slice(0,4));
            const logMonth = parseInt(logTime.slice(5,7));
            const logDay = parseInt(logTime.slice(8,10));
            const logHour = parseInt(logTime.slice(11,13));

            const logTotalHours = (logYear * 8760) + (logMonth * 730) + (logDay * 12) + logHour;

            const nowYear = parseInt(date.slice(0,4));
            const nowMonth = parseInt(date.slice(5,7));
            const nowDay = parseInt(date.slice(8,10));
            const nowHour = parseInt(date.slice(11,13));

            const nowTotalHours = (nowYear * 8760) + (nowMonth * 730) + (nowDay * 12) + nowHour;
            console.log("log: " + logTotalHours);
            console.log("now: " + nowTotalHours);
            if(nowTotalHours - logTotalHours >= 12){
                array.push(element);
            }
        }
    }

    function showQuestions(){
        if(token && props.userData.factors != 0){
            props.userData.factors.forEach(element => {
                if(element.logs.length == 0){
                    questions.push(element);
                }else{
                    compareDates(element,questions);
                }
            });

            return(
                <div className="flex-child__daylog flex-container__questions">
                    {questions.map((oneFactor, index) => (
                        <QuestionCard key={index} factor={oneFactor} getUser = {props.getUser}/>
                    ))} 
                </div>
            )
        }
    }
    
    function showWeatherQuestions(){
        if(!firstRender && token && props.userData.factors != 0){
            props.userData.weatherFactors.forEach(element => {
                if(element.logs.length == 0){
                    weatherQuestions.push(element);
                }else{
                    compareDates(element,weatherQuestions);
                }
            });
            return(
                <div className="flex-child__daylog weather" >
                    {weatherQuestions.map((oneFactor, index) => (
                        <WeatherCard key={index} factor={oneFactor} getUser = {props.getUser} userData={props.userData} zipCode={zipCode}/>
                    ))}
                </div>
            )
        }
    }

    function askZipCode(){
        if(weatherQuestions.length > 0){
            return (
                <div className="flex-child__daylog zip-code" >
                    <label htmlFor = "zipCode">Zip Code</label>
                        <input 
                            type = "text" 
                            id = "zipCode" 
                            name = 'zipCode'  
                            className = "form-control text-box zip-code__input"
                            value={zipCode}
                            onChange={handleChange}
                        >
                    </input>
                </div>
            )
        }
    }

    return (
        <div className="DayLog">
        <div className="title__daylog">If there are no factors to track, add new factors from the profile page or come back after at least 12 hours to log again.</div>
            <div className="flex-container__daylog">
            <div className="sidebar__space__daylog"></div>

                {showQuestions()}
                {showWeatherQuestions()}
                {askZipCode()}
                
            </div>
            
            
        </div>
    );
}

export default DayLog;
