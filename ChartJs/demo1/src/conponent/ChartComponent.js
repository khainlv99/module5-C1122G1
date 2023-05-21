import React, { useEffect, useRef, useState } from 'react';
import {Chart} from "chart.js";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from "faker";
import {Line} from "react-chartjs-2"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};
const ChartComponent = () => {
    const chartRef = useRef(null);
    const [dataChart, setDataChart] = useState(null);
    useEffect(() => {
        let chartInstance = null;

        const fetchDataAndDrawChart = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api');
                const data = await response.data;
                setDataChart(data)

                // Hủy bỏ biểu đồ hiện tại (nếu có)
                // if (chartInstance) {
                //     chartInstance.destroy();
                // }

                // Vẽ biểu đồ mới
                const canvas = chartRef.current;
                const ctx = canvas.getContext('2d');
                chartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Sales',
                                data,
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataAndDrawChart();

        // Hủy bỏ biểu đồ khi component bị unmount
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []);

    return (
        <div>
            {/*<h1>Chart Demo</h1>*/}
            {/*<canvas ref={chartRef} />*/}
            <Line options={options} data={data} />
        </div>
    );
};

export default ChartComponent;