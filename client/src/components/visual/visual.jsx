import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Chartjs from 'chart.js';


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
                        '#ff6464'
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
            <Line data={chartData}/>
        </div>
    )
    
}

export default Visual;
