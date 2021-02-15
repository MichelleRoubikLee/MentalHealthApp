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
    var colors = ["#ff6464", "#ffaa64", "#700961", "#b80d57"];
    var weatherColors = ["#95e1d3","#007965"]

    const datasetKeyProvider=()=>{ 
        return btoa(Math.random()).substring(0,12)
    }

    function showDate(date){
        //console.log(date)
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
                console.log(props.userData.factors[i])
                let factor = props.userData.factors[i];
                factor.logs.forEach(log => {
                    //console.log(log.date)
                    logData.push({
                        x:(showDate(log.date)), 
                        y:log.result
                    });
                })
                chartDatasets.push({data: logData, label: factor.factorName, borderColor: colors[i], yAxisID: 'A',fill: false,})
                logData = [];
            } 
            for(let i = 0; i < props.userData.weatherFactors.length; i++){
                console.log(props.userData.weatherFactors[i])
                let weatherFactor = props.userData.weatherFactors[i];
                weatherFactor.logs.forEach(log => {
                    //console.log(log.date)
                    logData.push({
                        x:(showDate(log.date)), 
                        y:log.result
                    });
                })
                chartDatasets.push({data: logData, label: weatherFactor.factorName, borderColor: weatherColors[i], yAxisID: 'B',fill: false,})
                logData = [];
            }  
            chartData = { datasets: chartDatasets }
            console.log(chartData)
        }
        
        return (
            <div>
                <Line data={chartData} datasetKeyProvider={datasetKeyProvider} options={{
                    responseive: true,
                    title: {text: 'Mental Health Concerns vs External Factors', display: true},
                    fill: false,
                    scales: {
                        yAxes: [
                            {
                                id: 'A',
                                type: 'linear',
                                position: 'left',
                                ticks:{
                                    autoSkip: true,
                                    maxTicksLimit: 5,
                                    beginAtZero: true,
                                },
                                stacked: true,
                            },
                            {
                                id: 'B',
                                type: 'linear',
                                position: 'right',
                                ticks:{
                                    autoSkip: true,
                                    maxTicksLimit: 5,
                                    beginAtZero: true,
                                },
                                stacked: true,
                            }
                        ],
                        xAxes: [{
                            type: 'time',
                            time: {
                                parser: 'MM/DD/YYYY HH',
                                min: showDate("2021-02-01T02:00:41.684Z"),
                                tooltipFormat: 'll HH',
                                unit: 'day',
                                unitStepSize: 1,
                                displayFormats: {
                                    'day': 'MM/DD/YYYY HH'
                                }
                            },
                            distribution: 'linear'
                        }]
                    }
                }}/>
            </div>

            
        )
    }

    return(
        <div className='Visual'>
            {createDataSets()}
        </div>
    )
    
}

export default Visual;