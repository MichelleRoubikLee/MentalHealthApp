import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Chartjs from 'chart.js';

const chartConfig = {
    type: 'bar',
    data: {
      // ...
    },
    options: {
      // ...
    }
};

function Visual(props) {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
        const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
        setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    return (
        <div>
        <canvas ref={chartContainer} />
        </div>
    );
  }

export default Visual;
