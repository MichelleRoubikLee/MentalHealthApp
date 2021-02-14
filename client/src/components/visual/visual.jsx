import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Chartjs from 'chart.js';
import './visual.css';


function Visual(props) {

    //need to organize data logs by dat

    const [chartData, setChartData] = useState({});
    let factorName = '';
    //let datasetArray = [];
    let dateLabels = [];
    let dataResults = [];

    function showDate(date){
        const hours = date.slice(11,13);
        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);
        const displayDate = `${month}/${day} Hours:${hours}`
        //month + "/" + day + "/" + year ;
        return displayDate;
    }

    const createDataSets = () => {
        for(let i = 0; i < props.userData.factors.length; i++){
            console.log(props.userData.factors);
            let factor = props.userData.factors[i];
                
            factorName = factor.factorName;
            factor.logs.forEach(log => {
                dateLabels.push(showDate(log.date));
                dataResults.push(log.result);

            })
            console.log(chartData);

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
            //dateLabels = [];
            //dataResults = [];
        }
    }
    

    useEffect( () => {
        createDataSets();
    },[])

    return(
        <div className='Visual'>
        {/* {createDataSets()} */}
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
                    ],
                    xAxes: [{
                        type: 'time'
                    }]
                }
            }}/>
        </div>
    )
    
}

export default Visual;
