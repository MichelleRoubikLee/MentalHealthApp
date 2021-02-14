import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Chartjs from 'chart.js';
import './visual.css';


function Visual(props) {
    const [chartData, setChartData] = useState({});
    let factorName = '';
    //let datasetArray = [];
    let dateLabels = [];
    let dataResults = [];

    function showDate(date){
        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);
        const displayDate = month + "/" + day + "/" + year;
        return displayDate;
    }

    function createDataSets(){
        
        if(props.userData.factors.length !== 0){
            console.log(props.userData)
        
            let factor = props.userData.factors[0] //.forEach(factor => {
                
            factorName = factor.factorName;
            factor.logs.forEach(log => {
                dateLabels.push(showDate(log.date));
                dataResults.push(log.result);

            })

            console.log(dateLabels);
            console.log(dataResults);
        }
    }
    
    
    const chart = () => {
        setChartData(chartData => ({...chartData,
            labels: dateLabels,
            datasets: [
                {
                    label: factorName,
                    data: dataResults,
                    backgroundColor: [
                        'rgba(255,100,100,.6)'
                    ],
                    borderWidth: 4,
                    fill: false
                }
            ]
        }))
    }

    useEffect(()=> {
        chart();
    },[])

    return(
        <div className='Visual'>
        {createDataSets()}
            <Line data={chartData} options={{
                responseive: true,
                title: {text: 'Mental Health Concerns vs External Factors', display: true},
                scales: {
                    yAxes: [
                        {
                            ticks:{
                                autoSkip: true,
                                maxTicksLimit: 5,
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }}/>
        </div>
    )
    
}

export default Visual;
