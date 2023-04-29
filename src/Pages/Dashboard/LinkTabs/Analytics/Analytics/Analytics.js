import React, { useEffect, useRef, useState } from 'react';
import down from '../../../../../assets/icons/down.png'
import ViewsAnalyticsChart from '../AnalyticsCharts/ViewsAnalyticsChart';
import UniqueVisitors from '../AnalyticsCharts/UniqueVisitors';
import ClicksAnalyticsChart from '../AnalyticsCharts/ClicksAnalyticsChart';
import CtrAnalyticsChart from '../AnalyticsCharts/CtrAnalyticsChart';
import { setOpenTab } from '../../../../../Slices/controllerSlice';
import { useDispatch } from 'react-redux';

const dateAnalytics = ['Last Week', 'Last 2 Weeks', 'Last Month', 'Last 3 Months', 'Last 6 Months']
const Analytics = () => {
    const [viewDateAnalytics, setViewDateAnalytics] = useState(false)
    const [selectedDateAnalytics, setSelectedDateAnalytics] = useState('Last Week')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOpenTab(false))
    }, [])

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setViewDateAnalytics(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section className='min-h-screen my-6 pb-6'>
            <div className='flex items-center gap-2 mb-2'>
                <h1 className='font-bold text-blue-900'>ANALYTICS</h1>
                <div className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center font-bold text-white'><span>!</span></div>
            </div>
            <div className='flex justify-start items-center gap-3 h-12 w-full mx-auto bg-gray-100 rounded-md px-4 mb-4'>
                <div className='w-8 h-8 flex justify-center items-center bg-gray-300 font-bold rounded-full'><span className='text-white p-1'>!</span></div>
                <p className='text-sm'>Please note that analytics data is refreshed once a day. This can delay updates to dimensions and metrics for up to two days.</p>
            </div>

            <div ref={dropdownRef} className='relative w-32 cursor-pointer'>
                <div onClick={() => setViewDateAnalytics(!viewDateAnalytics)} className='w-32 h-12 flex justify-between items-center bg-white'>
                    <h1 className='text-blue-900 font-bold'>{selectedDateAnalytics}</h1>
                    <img className='w-3' src={down} alt="" />
                </div>
                {
                    viewDateAnalytics && <div className='absolute top-10 w-full bg-white shadow border z-10'>
                        {
                            dateAnalytics.map(date => <div onClick={() => setSelectedDateAnalytics(date)}
                                className={`w-full h-10 hover:bg-gray-200 flex justify-start items-center ${selectedDateAnalytics === date && 'bg-gray-200 font-bold'}`}>
                                <h1 className='px-2'>{date}</h1>
                            </div>)
                        }
                    </div>
                }
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full border rounded-xl p-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-1 gap-2 border-r'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-500 font-semibold'>Views</h1>
                            <div className='w-5 h-5 rounded-full bg-gray-300 flex justify-center items-center font-bold text-white'><span>?</span></div>
                        </div>
                        <h1 className='text-black font-bold'>351</h1>
                        <h1 className='text-gray-500'>{selectedDateAnalytics}</h1>
                    </div>

                    <div className='grid grid-cols-1 gap-2 lg:border-r'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-500 font-semibold'>Unique Visitors</h1>
                            <div className='w-5 h-5 rounded-full bg-gray-300 flex justify-center items-center font-bold text-white'><span>?</span></div>
                        </div>
                        <h1 className='text-black font-bold'>17</h1>
                        <h1 className='text-gray-500'>{selectedDateAnalytics}</h1>
                    </div>
                </div>

                <hr className='lg:hidden' />

                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-1 gap-2 border-r'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-500 font-semibold'>Clicks</h1>
                            <div className='w-5 h-5 rounded-full bg-gray-300 flex justify-center items-center font-bold text-white'><span>?</span></div>
                        </div>
                        <h1 className='text-black font-bold'>1</h1>
                        <h1 className='text-gray-500'>{selectedDateAnalytics}</h1>
                    </div>

                    <div className='grid grid-cols-1 gap-2'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-500 font-semibold'>CTR</h1>
                            <div className='w-5 h-5 rounded-full bg-gray-300 flex justify-center items-center font-bold text-white'><span>?</span></div>
                        </div>
                        <h1 className='text-black font-bold'>0.28%</h1>
                        <h1 className='text-gray-500'>{selectedDateAnalytics}</h1>
                    </div>
                </div>
            </div>

            <div className=' w-full h-full border rounded-xl mt-6 py-4'>
                <h1 className='text-black font-bold text-left px-4 mb-4'>Link Performance by Date</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <ViewsAnalyticsChart />
                    <UniqueVisitors />
                    <ClicksAnalyticsChart />
                    <CtrAnalyticsChart />
                </div>
            </div>

        </section >
    );
};

export default Analytics;