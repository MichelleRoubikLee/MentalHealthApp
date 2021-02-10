import React from 'react';
import TrackingCard from './trackingCard/trackingCard';
import WeatherTrackingCard from './weatherTrackingCard/weatherTrackingCard'
import "./profile.css";
import useFirstRender from "../../firstRenderHook/useFirstRender";

function Profile(props) {
    let trackingArray = [];
    let weatherTrackingArray = [];
    const firstRender = useFirstRender();


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
        },
        {
            'factorName': 'Sleep',
            'question': 'About how much did you sleep last night?',
            'answers': ['More than 9 hours','8 to 9 hours', '7 to 8 hours', '6 to 7 hours', 'Less than 6 hours']
        }
    ]

    let weatherData = [
        {
            'factorName': 'Temperature'
        },
        {
            'factorName': 'Pressure'
        },
        {
            'factorName': 'Humidity'
        }
    ];

    

    function addTrackingCards(){
        if(!firstRender){
            console.log(props.userData.factors)
            
            if(props.userData.factors.length == 0){
                trackingArray = factorData;
            }else{
                trackingArray = factorData.filter(array => 
                    props.userData.factors.every(filter => 
                        filter.factorName !== array.factorName
                    )
                );
            }
        }
    }    

    function addWeatherDataCards(){
        // console.log(props.userData.weatherFactors)
        if(!firstRender){
            console.log(props.userData.weatherFactors)
            if(props.userData.weatherFactors.length == 0){ //props.userData.weatherFactors === undefined  || 
                weatherTrackingArray = weatherData;
            }else{
                weatherTrackingArray = weatherData.filter(array => 
                    props.userData.weatherFactors.every(filter => 
                        filter.factorName !== array.factorName
                    )
                );
            }
        }
    }


  return (
    <div className="Profile">
        <div>Track Your Mental Health Concerns and Factors:</div>
        {addTrackingCards()}
        {trackingArray.map((factorData, index) => (
           <TrackingCard key={index} factor={factorData} getUser = {props.getUser}/> 
        ))}
        {addWeatherDataCards()}
        {weatherTrackingArray.map((weatherFactorData, index) => (
           <WeatherTrackingCard key={index} factor={weatherFactorData} getUser = {props.getUser}/> 
        ))}
        
    </div>
  );
}

export default Profile;


