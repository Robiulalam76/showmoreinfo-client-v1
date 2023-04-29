import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import img from '../../../../../assets/icons/analytics-tab-icons/visitors.svg'

const UniqueVisitors = () => {
    const [visitorsChart, setVisitorsChart] = useState({

        series: [
            {
                type: 'rangeArea',
                name: 'Team A Range',
                data: [
                    {
                        x: 'Jan',
                        y: [3100, 3400]
                    },
                    {
                        x: 'Feb',
                        y: [4200, 5200]
                    },
                    {
                        x: 'Mar',
                        y: [3900, 4900]
                    },
                    {
                        x: 'Apr',
                        y: [3400, 3900]
                    },
                    {
                        x: 'May',
                        y: [5100, 5900]
                    },
                    {
                        x: 'Jun',
                        y: [5400, 6700]
                    },
                    {
                        x: 'Jul',
                        y: [4300, 4600]
                    },
                    {
                        x: 'Aug',
                        y: [2100, 2900]
                    }
                ]
            },

            {
                type: 'line',
                name: 'Team B Median',
                data: [
                    {
                        x: 'Jan',
                        y: 1500
                    },
                    {
                        x: 'Feb',
                        y: 1700
                    },
                    {
                        x: 'Mar',
                        y: 1900
                    },
                    {
                        x: 'Apr',
                        y: 2200
                    },
                    {
                        x: 'May',
                        y: 3000
                    },
                    {
                        x: 'Jun',
                        y: 1000
                    },
                    {
                        x: 'Jul',
                        y: 2100
                    },
                    {
                        x: 'Aug',
                        y: 1200
                    },
                    {
                        x: 'Sep',
                        y: 1800
                    },
                    {
                        x: 'Oct',
                        y: 2000
                    }
                ]
            },
            {
                type: 'line',
                name: 'Team A Median',
                data: [
                    {
                        x: 'Jan',
                        y: 3300
                    },
                    {
                        x: 'Feb',
                        y: 4900
                    },
                    {
                        x: 'Mar',
                        y: 4300
                    },
                    {
                        x: 'Apr',
                        y: 3700
                    },
                    {
                        x: 'May',
                        y: 5500
                    },
                    {
                        x: 'Jun',
                        y: 5900
                    },
                    {
                        x: 'Jul',
                        y: 4500
                    },
                    {
                        x: 'Aug',
                        y: 2400
                    },
                    {
                        x: 'Sep',
                        y: 2100
                    },
                    {
                        x: 'Oct',
                        y: 1500
                    }
                ]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'rangeArea',
                animations: {
                    speed: 500
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: [0.24, 0.24, 1, 1]
            },
            stroke: {
                curve: 'straight',
                width: [0, 0, 2, 2]
            },
            legend: {
                show: false,
            },
            markers: {
                hover: {
                    sizeOffset: 5
                }
            }
        },


    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <div className='grid grid-cols-1 gap-2' >
                <h1 className='text-gray-500 font-semibold px-4'>Unique Visitors</h1>
                <div id="chart" className='w-full relative' >
                    <ReactApexChart options={visitorsChart.options} series={visitorsChart.series} type="rangeArea" height={350} width={500} />
                    <div className='w-20 h-8 rounded-md border flex justify-between items-center shadow px-2 absolute top-5 right-0 md:-right-40 bg-white' >
                        <img className='w-6' src={img} alt="" />
                        <h1 className='text-black font-bold'>351</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniqueVisitors;