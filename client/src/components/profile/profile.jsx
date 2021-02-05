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
            'answers': ['Severe Anxiety','Bad Anxiety','Some Anxiety','Little Anxiety', 'No Anxiety']
        },
        {
            'factorName': 'Depression',
            'question': 'How is your depression today?',
            'answers':['Severe Depression','Bad Depression','Some Depression','Little Depression','No Depression']
        },
        {
            'factorName': 'Stress',
            'question': 'How is your stress today?',
            'answers': ['Severe Stress','Bad Stress','Some Stress','Little Stress','No Stress']
        },
        {
            'factorName': 'Meditation',
            'question': 'Did you meditate today?',
            'answers': ['No','Yes']
        },
        {
            'factorName': 'Caffeine',
            'question': 'How many drinks with caffeine did you have today?',
            'answers': ['None','One','Two','Three','More than three']
            [{4:'More than three'},{3:'Three'},{2:'Two'},{1:'One'},{0:'None'}]
        },
        {
            'factorName': 'Sleep',
            'question': 'About how much did you sleep last night?',
            'answers': ['More than 9 hours','8 to 9 hours', '7 to 8 hours', '6 to 7 hours', 'Less than 6 hours']
        }
    ]



    function addTrackingCards(){
        if(props.userData.factors.length == 0){
            trackingArray = factorData;
        }else{
            trackingArray = factorData.filter(array => 
                props.userData.factors.every(filter => 
                    filter.factorName !== array.factorName
                )
            );
        }
        

        console.log(props.userData.factors)
        console.log(trackingArray)
    }    


  return (
    <div className="Profile">
        <div>Track Your Mental Health Concerns and Factors:</div>
        {addTrackingCards()}
        {trackingArray.map((factorData, index) => (
           <TrackingCard key={index} factor={factorData} getUser = {props.getUser}/> 
        ))}
        
    </div>
  );
}

export default Profile;


