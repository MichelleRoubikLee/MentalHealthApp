import React from 'react';

import "./profile.css"
import useForm from "react-hook-form";


function Profile(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    let mentalHealth = ["Anxiety", "Depression", "Stress"];
    let factors = ["Temperature","Air Polution", "Amount of Sleep", "Caffeine", "Meditation"]


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