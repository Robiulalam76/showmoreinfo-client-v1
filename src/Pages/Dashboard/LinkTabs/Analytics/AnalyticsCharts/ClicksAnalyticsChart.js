import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import img from '../../../../../assets/icons/analytics-tab-icons/clicks.svg'

const ClicksAnalyticsChart = () => {
    const [clicksChart, setClicksChart] = useState({

        series: [{
            name: 'clicks',
            data: [0, 10, 200, 30, 40, 300, 60, 70, 80, 90, 100]
        }],
        options: {
            chart: {
                height: 350,
                width: 450,
                type: 'area',
                zoom: {
                    enabled: false
                },
            },

            stroke: {
                curve: 'straight',
                width: [0, 0, 2, 2]
            },
            dataLabels: {
                enabled: false,
                style: {
                    colors: ['#9C9CD3']
                }
            },
            xaxis: {
                type: 'datetime',
                categories: ["2023-01-19", "2023-01-20", "2023-01-21", "2023-01-22", "2023-01-23", "2023-01-24", "2023-01-25", "2023-01-26", "2023-01-27", "2023-02-5", "2023-01-19", "2023-01-19", "2023-01-19", "2023-01-19", "2023-01-19",]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <div className='grid grid-cols-1 gap-2' >
                <h1 className='text-gray-500 font-semibold px-4'>Clicks</h1>
                <div id="chart" className='w-full relative' >
                    <ReactApexChart options={clicksChart.options} series={clicksChart.series} type="area" height={350} width={500} />
                    <div className='w-20 h-8 rounded-md border flex justify-between items-center shadow px-2 absolute top-5 right-0 md:-right-40 bg-white' >
                        <img className='w-6' src={img} alt="" />
                        <h1 className='text-black font-bold'>1</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClicksAnalyticsChart;