import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
// import {API_LOG_URL} from '../../config/default';
// import openWeather from "../../../api/openWeather";
import {API_WEATHER_KEY} from '../../config/default';


function WeatherCard(props) {
    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);

    const handleSubmit = (event) => {
        const API_BASE_URL = 'api.openweathermap.org/data/2.5/weather';
        const zipCode = 53150;
        const newurl = `${API_BASE_URL}?zip=${zipCode},us&appid=${API_WEATHER_KEY}`; 

        axios({
            method: 'put',
            url: newurl,
        }).then((res) => {
            const temp = res.data.main.temp;
            console.log(temp)
         })  
    };


    return (
        <div className="WeatherCard flex-child">
            <form onSubmit={handleSubmit} className="form-floating">
                <label>
                    {props.factor.factorName}
                </label>
                <button type="submit" className="btn-sm btn-success">Track</button>
            </form>
        </div>
    );
}

export default WeatherCard;
