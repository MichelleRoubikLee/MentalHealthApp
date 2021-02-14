import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Chartjs from 'chart.js';
import './visual.css';
import useFirstRender from "../../firstRenderHook/useFirstRender";

function Visual(props) {

    let logData = [];
    const firstRender = useFirstRender();
    var chartData = {};
    var chartDatasets = [];

    const datasetKeyProvider=()=>{ 
        return btoa(Math.random()).substring(0,12)
    }

    function showDate(date){
        const hours = date.slice(11,13);
        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);
        const displayDate = `${month}/${day}/${year} ${hours}`
        return displayDate;
    }

    useEffect(() => {
        createDataSets();
    },[props.userData])

    function createDataSets(){
        if(props.userData.factors.length == 0 && firstRender){
            console.log("hit")
            props.getUser();
        }else{
            for(let i = 0; i < props.userData.factors.length; i++){
                //console.log(props.userData.factors[i].factorName, props.userData.factors[i].logs)
                let factor = props.userData.factors[i];
                factor.logs.forEach(log => {
                    logData.push({
                        x:(showDate(log.date)), 
                        y:log.result
                    });
                })
                chartDatasets.push({data: logData, label: factor.factorName})
                logData = [];
            } 
            chartData = { 
                
                datasets: [chartDatasets]
                
            }
            console.log(chartData)
        }
    }

    return(
        <div className='Visual'>
            <Line data={chartData} datasetKeyProvider={datasetKeyProvider} options={{
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
                        type: 'time',
                        time: {
                            parser: 'MM/DD/YYYY HH',
                            tooltipFormat: 'll HH',
                            unit: 'day',
                            unitStepSize: 1,
                            displayFormats: {
                            'day': 'MM/DD/YYYY'
                            }
                        }
                    }]
                }
            }}/>
        </div>
    )
    
}

export default Visual;