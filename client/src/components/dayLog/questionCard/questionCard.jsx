import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_BASE_URL} from '../../config/default';



function QuestionCard(props) {
    // var token = sessionStorage.getItem('sessionId');
    // var decoded = jwt_decode(token);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL + "/day"; //decoded._id
        
        axios({
            method: 'put',
            url: newurl,
            // headers: {'x-auth-token': token},
            data: {
                
            },
            
        })//.then(() => {
         
        //});
    }


    return (
        <div className="QuestionCard">
            <form onSubmit={handleSubmit} className="form-floating">
            <label htmlFor="">{props.question}</label>
            <input type="radio" name="choice" value="yes"></input>
            <input type="radio" name="choice" value="no"></input>
            <button type="submit" className="btn-sm">Add</button>
            </form>
        </div>
    );
}

export default QuestionCard;
