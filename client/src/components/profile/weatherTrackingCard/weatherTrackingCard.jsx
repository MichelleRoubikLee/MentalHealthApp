import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_FACTOR_URL} from '../../config/default';


function TrackingCard(props) {

    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_FACTOR_URL + decoded._id + "/weatherfactor";
        axios({
            method: 'put',
            url: newurl,
            data: {
                factorName: props.factor.factorName,
                tracking: true
            }
        }).then(() => {
           props.getUser();
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