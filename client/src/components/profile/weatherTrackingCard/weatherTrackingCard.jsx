import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_FACTOR_URL} from '../../config/default';
import "../profile.css"




function TrackingCard(props) {

    var token = sessionStorage.getItem('sessionId');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        var decoded = jwt_decode(token);
        const newurl = API_FACTOR_URL + decoded._id + "/weatherfactor";
        axios({
            method: 'put',
            headers: {'x-auth-token': token},
            url: newurl,
            data: {
                factorName: props.factor.factorName,
                units: props.factor.units,
                tracking: true
            }
        }).then(() => {
           props.getUser();
        })  
        
    }      
    

  return (
    <div className="TrackingCard">
        <form onSubmit={handleSubmit} className="tracking-card">
        <label>{props.factor.factorName}</label>
        <button type="submit">Start Tracking</button>
      </form>
    </div>
  );
}

export default TrackingCard;