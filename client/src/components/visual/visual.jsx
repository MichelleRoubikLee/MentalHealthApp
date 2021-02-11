import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Chartjs from 'chart.js';
import './visual.css';


function Visual(props) {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['monday','tuesday','wednesday','thursday','friday'],
            datasets: [
                {
                    label: 'anxiety',
                    data: [1,4,3,0,3],
                    backgroundColor: [
                        'rgba(255,100,100,.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(()=> {
        chart();
    },[])

    return(
        <div className='Visual'>
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
