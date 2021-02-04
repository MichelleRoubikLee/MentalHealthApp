import React from 'react';
import axios from 'axios';
import TrackingCard from './trackingCard/trackingCard'
import {API_FACTOR_URL} from './../config/default';
import "./profile.css"
import useForm from "react-hook-form";


function Profile(props) {
    const { register, handleSubmit } = useForm();
    let trackingArray = [];

    let factorData = [
        {
            'factorName': 'Anxiety',
            'question': 'How is your anxiety today?',
            'answers': [{4:'No Anxiety'},{3:'Little Anxiety'},{2:'Some Anxiety'},{1:'Bad Anxiety'},{0:'Severe Anxiety'}]
        },
        {
            'factorName': 'Depression',
            'question': 'How is your depression today?',
            'answers': [{4:'No Depression'},{3:'Little Depression'},{2:'Some Depression'},{1:'Bad Depression'},{0:'Severe Depression'}]
        },
        {
            'factorName': 'Stress',
            'question': 'How is your stress today?',
            'answers': [{4:'No Stress'},{3:'Little Stress'},{2:'Some Stress'},{1:'Bad Stress'},{0:'Severe Stress'}]
        },
        {
            'factorName': 'Meditation',
            'question': 'Did you meditate today?',
            'answers': [{1:'Yes'},{0:'No'}]
        },
        {
            'factorName': 'Caffeine',
            'question': 'How many drinks with caffeine did you have today?',
            'answers': [{4:'More than three'},{3:'Three'},{2:'Two'},{1:'One'},{0:'None'}]
        },
        {
            'factorName': 'Sleep',
            'question': 'About how much did you sleep last night?',
            'answers': [{4:'More than 9 Hours'},{3:'More than 8 and less than 9 Hours'},{2:'More than 6 and less than 8 Hours'},{1:'More than 4 and less than 6 Hours'},{0:'Less than 4 hours'}]
        }
    ]

    function addTrackingCards(){
        //loop over hardcoded factor array
        for(let i=0; i<factorData.length;i++){
            //if no tracking, return full list
            if(props.userData.factors.length == 0){
                trackingArray.push(<TrackingCard key={i} factor={factorData[i]} />)
            }else{
                //loop over user factor array
                props.userData.factors.forEach(userFactor => {
                    //if 
                    if((factorData[i].factorName != userFactor.factorName) || (props.userData.factors.tracking == false)) {
                        trackingArray.push(<TrackingCard key={i} factor={factorData[i]} />)
                    }
                })
            }
        }
        return trackingArray;
    }    


  return (
    <div className="Profile">
        {console.log(props.userData.factors)}
        <div>Track Your Mental Health Concerns and Factors:</div>
        <div>{addTrackingCards()}</div>
    </div>
  );
}

export default Profile;