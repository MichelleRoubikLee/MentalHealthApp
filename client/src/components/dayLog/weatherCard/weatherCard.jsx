import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_WEATHER_KEY, API_LOG_URL} from '../../config/default';



function WeatherCard(props) {
    var token = sessionStorage.getItem('sessionId');
    let data = "";
    let temperature = "";
    let humidity = ""; //humidity in %
    let pressure = "";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const zipCode = 53150;
        const weatherUrl = `${WEATHER_API_URL}?zip=${zipCode},us&appid=${API_WEATHER_KEY}&units=imperial`; 

        await axios({
            method: 'get',
            url: weatherUrl,
        }).then((res) => {
            temperature = res.data.main.temp;  //in degF
            humidity = res.data.main.humidity; //humidity in %
            pressure = res.data.main.pressure; //pressure in hPa
            //console.log(res.data.main)
        });
        saveToDb();
    };

    const saveToDb = async () => {
        var decoded = jwt_decode(token);
        
            if(props.factor.factorName = 'Temperature'){
                data = temperature;
            }else if(props.factor.factorName = 'Humidity'){
                data = humidity;
            }else if(props.factor.factorName = 'Pressure'){
                data = pressure;
            }
        
        const newurl = API_LOG_URL + decoded._id + "/" + props.factor._id + "/weatherlog";
        console.log(props.factor);
        axios({
            method: 'put',
            url: newurl,
            headers: {'x-auth-token': token},
            data: {
                date: new Date().toISOString(),
                result: data
            },
        }).then(() => {
            props.getUser();
         })  
    }

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
