import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

import {API_FACTOR_URL} from '../../config/default';


function TrackingCard(props) {

    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props.factor.factorName);
        console.log(props.factor.question);
        console.log(props.factor.answers);
        const newurl = API_FACTOR_URL + decoded._id + "/factor";
        axios({
            method: 'put',
            url: newurl,
            data: {
                factorName: props.factor.factorName,
                question: props.factor.question,
                answers: props.factor.answers,
                tracking: true
            }
        })
        
    }      
    

  return (
    <div className="TrackingCard">
        <form onSubmit={handleSubmit}>
        <label>{props.factor.factorName}</label>
        <button type="submit">Start Tracking</button>
      </form>
    </div>
  );
}

export default TrackingCard;