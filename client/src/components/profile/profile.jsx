import React from 'react';
import axios from 'axios';

import {API_FACTOR_URL} from './../config/default';
import "./profile.css"
import useForm from "react-hook-form";


function Profile(props) {
    const { register, handleSubmit } = useForm();

    //check if any are already tracked and remove from list if true
    let mentalHealth = ["Anxiety", "Depression", "Stress"];
    let factors = ["Temperature","Air Polution", "Amount of Sleep", "Caffeine", "Meditation"]

    const onSubmit = (event) => {
        event.preventDefault();
        const newurl = API_FACTOR_URL;
        console.log(newurl);
        //console.log(name)
        //
        // axios({
        //     method: 'post',
        //     url: newurl,
        //     data: {
        //         // userName: register.userName,
        //         // password: register.password,
        //         // email: register.email
        //     }
        // }).then(() => {
        //     console.log("user added");            
        // })            
    };

  return (
    <div className="Profile">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Track Your Mental Health Concerns:</div>
            {mentalHealth.map((element, index) => (
                <div key = {index}>
                    <label>
                        <input 
                            type="checkbox" 
                            name={element}
                            ref={register}/>
                        {element} 
                    </label>
                    <br/>
                </div>
            ))}
            <div>Track Your Potential Factors:</div>
            {factors.map((element, index) => (
                <div key = {index}>
                    <label>
                        <input 
                            type="checkbox" 
                            name={element}
                            ref={register}/>
                        {element} 
                    </label>
                    <br/>
                </div>
            ))}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;