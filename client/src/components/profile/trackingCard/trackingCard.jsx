import React from 'react';
import axios from 'axios';

import {API_FACTOR_URL} from '../../config/default';
import useForm from "react-hook-form";


function TrackingCard(props) {
    const { register, handleSubmit } = useForm();

    //check if any are already tracked and remove from list if true


 
    

    const onSubmit = (event) => {
        event.preventDefault();
        const newurl = API_FACTOR_URL;
        console.log(newurl);
        
        // axios({
        //     method: 'post',
        //     url: newurl,
        //     data: {
        //         factorName: MentalHealthData.factorName,
        //         question: MentalHealthData.question,
        //         answers: MentalHealthData.answers,
        //     }
        // }).then(() => {
        //     console.log("user added");            
        // })            
    };

  return (
    <div className="TrackingCard">{props.factor.factorName}
        {/* <form onSubmit={handleSubmit(onSubmit)}>

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default TrackingCard;