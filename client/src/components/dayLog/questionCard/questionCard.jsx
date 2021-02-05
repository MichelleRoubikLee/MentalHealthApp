import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_LOG_URL} from '../../config/default';
import "./questionCard.css"



function QuestionCard(props) {
    const [result, setResult] = useState()

    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);

    function handleChange(event){
        setResult(event.target.value);
     };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_LOG_URL + decoded._id + "/" + props.factor._id + "/log"; 
        axios({
            method: 'put',
            url: newurl,
            headers: {'x-auth-token': token},
            data: {
                result: result
            },
        }).then(() => {
            props.getUser();
         })  
    }

    return (
        <div className="QuestionCard flex-child">
            <form onSubmit={handleSubmit} className="form-floating">
                <div className="">{props.factor.question}</div>
                {props.factor.answers.map((answer, index) => (
                    <div key={index}>
                        <label>  
                            <input type="radio" name="choice" onChange={handleChange} value={index}></input>
                            {answer}
                        </label>
                        <br/>
                    </div>
                ))}  
                
                <button type="submit" className="btn-sm btn-success">Submit</button>
            </form>
        </div>
    );
}

export default QuestionCard;
