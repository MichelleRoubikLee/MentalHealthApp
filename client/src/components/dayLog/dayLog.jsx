import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from "./questionCard/questionCard"
import WeatherCard from "./weatherCard/weatherCard"
import "./dayLog.css";
import useFirstRender from "../../firstRenderHook/useFirstRender";



function DayLog(props) {
    const firstRender = useFirstRender();

    function showQuestions(){
       if(!firstRender){
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
        if(!firstRender){
            return(
                <div>
                    {props.userData.weatherFactors.map((oneFactor, index) => (
                        <WeatherCard key={index} factor={oneFactor} getUser = {props.getUser}/>
                    ))}
                </div>
            )
         } 
     }

    return (
        <div className="DayLog flex-container">
            {showQuestions()}
            {showWeatherQuestions()}
        </div>
    );
}

export default DayLog;
