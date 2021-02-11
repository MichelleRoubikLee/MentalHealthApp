import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_WEATHER_KEY, API_FACTOR_URL} from '../../config/default';



function WeatherCard(props) {
    var token = sessionStorage.getItem('sessionId');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const zipCode = 53150;
        const weatherUrl = `${WEATHER_API_URL}?zip=${zipCode},us&appid=${API_WEATHER_KEY}&units=imperial`; 

        await axios({
            method: 'get',
            url: weatherUrl,
        }).then((res) => {
            const temperature = res.data.main.temp;
            //humidity in %
            const humidity = res.data.main.humidity;
            //pressure in hPa
            const pressure = res.data.main.pressure;
            console.log(res.data.main)
        });
        saveToDb();
    };

    const saveToDb = async () => {
        var decoded = jwt_decode(token);
        const newurl = API_FACTOR_URL + decoded._id + "/" + props.factor._id + "/weatherfactor"; 
        //loop over weather factors to see if tracking, if yes, axios call
        console.log(props.userData.weatherFactors);
        // axios({
        //     method: 'put',
        //     url: newurl,
        //     headers: {'x-auth-token': token},
        //     data: {
        //         date: new Date().toISOString(),
        //         result: result
        //     },
        // }).then(() => {
        //     props.getUser();
        //  })  
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
