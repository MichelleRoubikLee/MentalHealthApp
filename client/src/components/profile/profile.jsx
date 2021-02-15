import React from 'react';
import TrackingCard from './trackingCard/trackingCard';
import WeatherTrackingCard from './weatherTrackingCard/weatherTrackingCard';
import Badge from './badge/badge';
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
            'factorName': 'Fatigue',
            'question': 'How is your fatigue today?',
            'answers': ['Severe Fatigue','Bad Fatigue','Some Fatigue','Little Fatigue','No Fatigue']
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
            'factorName': 'Temperature',
            'units': 'Fahrenheit (degF)'
        },
        {
            'factorName': 'Humidity',
            'units': 'Percent (%)'
        },
        {
            'factorName': 'Pressure',
            'units': 'hecto Pascals (hPa)'
        }
    ];

    

    function addTrackingCards(){
        if(!firstRender){            
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
        if(!firstRender){
            //console.log(props.userData.weatherFactors)
            if(props.userData.weatherFactors.length == 0){ 
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
            <div className="title__profile">Start tracking health and environmental factors and see your motivational badges.</div>
                <div className="flex-container__profile">
                    <div className="sidebar__space col-md-1"></div>
                    <div className="flex-child__profile">
                        {addTrackingCards()}
                        {trackingArray.map((factorData, index) => (
                            <TrackingCard key={index} factor={factorData} getUser = {props.getUser}/> 
                        ))}
                        {addWeatherDataCards()}
                        {weatherTrackingArray.map((weatherFactorData, index) => (
                            <WeatherTrackingCard key={index} factor={weatherFactorData} getUser = {props.getUser}/> 
                        ))}
                    </div>
                    <div className="flex-child__profile">
                        <Badge userData = {props.userData}/>
                    </div>
            </div>
        </div>
    );
}

export default Profile;


