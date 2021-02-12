import React, { useState } from 'react';
//import axios from 'axios';
import QuestionCard from "./questionCard/questionCard"
import WeatherCard from "./weatherCard/weatherCard"
import "./dayLog.css";
import useFirstRender from "../../firstRenderHook/useFirstRender";
//import jwt_decode from "jwt-decode";

function DayLog(props) {
    const [zipCode, setZipCode] = useState("")
    const firstRender = useFirstRender();
    var date = new Date().toISOString()
    var token = sessionStorage.getItem('sessionId');
    //var decoded = jwt_decode(token);

    const handleChange = (event) => {
        setZipCode(event.target.value)
    }

    function showQuestions(){
        if(token && props.userData.factors != 0){
            //now date minus log date, if > 12, show card
            props.userData.factors.forEach(element => {
                if(element.logs.length == 0){
                    console.log(element.logs.length)
                }else{
                    console.log(element.logs[0].date);
                    console.log(date);
                }
            });
            return(
                <div>
                    {props.userData.factors.map((oneFactor, index) => (
                        <QuestionCard key={index} factor={oneFactor} getUser = {props.getUser}/>
                    ))} 
                </div>
            )
        }
    }
    
    function showWeatherQuestions(){
        if(!firstRender && token && props.userData.factors != 0){
            return(
                <div>
                    {props.userData.weatherFactors.map((oneFactor, index) => (
                        <WeatherCard key={index} factor={oneFactor} getUser = {props.getUser} userData={props.userData} zipCode={zipCode}/>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="DayLog flex-container">
            {showQuestions()}
            <label htmlFor = "zipCode">Zip Code</label>
            <input 
                type = "text" 
                id = "zipCode" 
                name = 'zipCode'  
                className = "form-control text-box"
                value={zipCode}
                onChange={handleChange}
            >
            </input>
            {showWeatherQuestions()}
        </div>
    );
}

export default DayLog;
