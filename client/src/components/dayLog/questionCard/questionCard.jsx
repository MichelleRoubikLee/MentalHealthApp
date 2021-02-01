import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_BASE_URL} from '../../config/default';
import "./questionCard.css"



function QuestionCard(props) {
    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL + decoded._id + "/" + props.factor._id + "/day"; 
        
        axios({
            method: 'put',
            url: newurl,
            // headers: {'x-auth-token': token},
            data: {
                
            },
            
        })//.then(() => {
         
        //});
    }

    // key={index} factor={oneFactor}
    return (
        <div className="QuestionCard">
            {/* {console.log(props.factor.answers)} */}
            <form onSubmit={handleSubmit} className="form-floating">
                <div className="">{props.factor.question}</div>
                <input type="radio" name="choice" value="yes"></input>
                <input type="radio" name="choice" value="no"></input>
                <button type="submit" className="btn-sm">Add</button>
            </form>
        </div>
    );
}

export default QuestionCard;
