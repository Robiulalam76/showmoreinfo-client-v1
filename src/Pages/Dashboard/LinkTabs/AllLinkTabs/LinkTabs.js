import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import rightArrow from '../../../../assets/icons/right-arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setOpenTab } from '../../../../Slices/controllerSlice';


const LinkTabs = () => {
    const [viewTab, setViewTab] = useState(1)
    const [viewTabsDropdown, setViewTabsDropdown] = useState(false)
    const { pathname } = useLocation()
    const { openTab } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()
    console.log(pathname === '/dashboard/appearance');

    useEffect(() => {
        dispatch(setOpenTab(true))
    }, [])

    useEffect(() => {
        if (pathname === '/dashboard' || pathname === '/dashboard/links' || pathname === '/dashboard/social' || pathname === '/dashboard/gallery' || pathname === '/dashboard/menu' || pathname === '/dashboard/locations' || pathname === '/dashboard/music' || pathname === '/dashboard/apps') {
            console.log('dddddddddd');
            dispatch(setOpenTab(true))
        }
        else {
            dispatch(setOpenTab(false))
        }
    }, [])

    // console.log(openTab, pathname);

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setViewTabsDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section ref={dropdownRef}>
            <div className='max-w-[1440px] mx-auto'>

                <div className='flex items-center md:flex-wrap gap-4 md:gap-8 px-5 md:px-12'>
                    <Link to='/dashboard'
                        className={`text-gray-500 pb-2 pt-2 
                    ${openTab === true ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white '}`}>
                        <button className=''>Links</button>
                    </Link>

                    <Link to='/dashboard/appearance'
                        className={`text-gray-500 pb-2 pt-2
                    ${pathname === '/dashboard/appearance' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className=''>Appearance</button>
                    </Link>


                    <Link to='/dashboard/messages' onClick={() => setViewTab(9)}
                        className={`text-gray-500 pb-2 pt-2
                    ${pathname === '/dashboard/messages' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className=''>Messages</button>
                    </Link>


                    {/* to='/dashboard/settings' onClick={() => setViewTab(3)} */}
                    {/* <div id='settingTooltip'
                        className={`cursor-not-allowed text-gray-500 pb-2 pt-2 
                    ${pathname === '/dashboard/settings' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className='cursor-not-allowed'>Settings</button>
                    </div> */}

                    {/* <Link to='/dashboard/billing/subscription' onClick={() => setViewTab(4)}
                        className={`text-gray-500 pb-2 pt-2
                    ${pathname === '/dashboard/billing/subscription' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className=''>PRO</button>
                    </Link> */}

                    {/* ------- More button clcik to dropdown show--------- start */}
                    {/* <div onClick={() => setViewTabsDropdown(!viewTabsDropdown)}
                        className='relative md:hidden text-blue-500 pb-2 pt-2 border-b-4 border-white'>
                        <button className='flex items-center'>
                            <h1 className=''>More</h1>
                            <img className='w-5 mt-1' src={rightArrow} alt="" />
                        </button>
                        {
                            viewTabsDropdown && <div class="absolute right-0 z-10 mt-2 w-60 rounded-md bg-gray-50 shadow">
                                <div className='p-3'> */}
                    {/* <Link to='/dashboard/analytics' onClick={() => setViewTab(5)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Analytics</button>
                                    </Link> */}

                    {/* to='/dashboard/earn' onClick={() => setViewTab(6)} */}
                    {/* <div id='earnTooltip'
                                        className='cursor-not-allowed relative h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className='cursor-not-allowed'>Earn</button>

                                      
                                        <div className='absolute -top-1 left-6 bg-blue-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                                            <span className='text-[8px] text-white'>BETA</span>
                                        </div>
                                    </div> */}

                    {/* to='/dashboard/store' onClick={() => setViewTab(7)} */}
                    {/* <div id='stareTooltip'
                                        className='cursor-not-allowed h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className='cursor-not-allowed'>Store</button>
                                    </div> */}

                    {/* <Link to='/dashboard/signups' onClick={() => setViewTab(8)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Signups</button>
                                    </Link> */}
                    {/* <Link to='/dashboard/messages' onClick={() => setViewTab(9)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Messages</button>
                                    </Link> */}

                    {/* to='/dashboard/integrations' onClick={() => setViewTab(10)} */}
                    {/* <div id='integrationTooltip'
                                        className='cursor-not-allowed relative h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className='cursor-not-allowed'>Integrations</button>

                                       
                                        <div className='absolute -top-1 left-6 bg-green-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                                            <span className='text-[8px] text-white'>BETA</span>
                                        </div>
                                    </div> */}
                    {/* </div>
                            </div> */}
                    {/* } */}

                    {/* </div> */}
                    {/* ------- More button clcik to dropdown show--------- end */}

                    {/* -------only md + device show--------- start */}
                    {/* <Link to='/dashboard/analytics' onClick={() => setViewTab(5)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${pathname === '/dashboard/analytics'? ' border-green-600 text-blue-600 border-b-4':'border-b-4 border-white'}`}>
                        <button className=''>Analytics</button>
                    </Link> */}

                    {/* to='/dashboard/earn' onClick={() => setViewTab(6)} */}
                    {/* <div id='earnTooltip'
                        className={`cursor-not-allowed relative hidden md:block text-gray-500 pb-2 pt-2
                    ${pathname === '/dashboard/earn' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className='cursor-not-allowed'>Earn</button>
                        
                        <div className='absolute top-0 -right-4 bg-blue-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                            <span className='text-[8px] text-white'>BETA</span>
                        </div>
                    </div> */}

                    {/* to='/dashboard/store' onClick={() => setViewTab(7)} */}
                    {/* <div id='storeTooltip'
                        className={`cursor-not-allowed hidden md:block text-gray-500 pb-2 pt-2  
                    ${pathname === '/dashboard/store' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className='cursor-not-allowed'>Store</button>
                    </div>

                    <Link to='/dashboard/signups' onClick={() => setViewTab(8)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2  
                    ${pathname === '/dashboard/signups' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className=''>Signups</button>
                    </Link> */}

                    {/* <Link to='/dashboard/messages' onClick={() => setViewTab(9)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2 
                    ${pathname === '/dashboard/messages' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className=''>Messages</button>
                    </Link> */}

                    {/* to='/dashboard/integrations' onClick={() => setViewTab(10)} */}
                    {/* <div id='integrationTooltip' to=''
                        className={`cursor-not-allowed relative hidden md:block text-gray-500 pb-2 pt-2 
                    ${pathname === '/dashboard/integrations' ? ' border-green-600 text-blue-600 border-b-4' : 'border-b-4 border-white'}`}>
                        <button className='cursor-not-allowed'>Integrations</button>
                      
                        <div className='absolute top-0 -right-4 bg-green-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                            <span className='text-[8px] text-white'>NEW</span>
                        </div>
                    </div> */}
                    {/* -------only md + device show--------- end */}

                </div>
                <hr className='border-gray-300' />
            </div>

            <ReactTooltip anchorId="settingTooltip" place="top" variant="info" content="Not Allowed" />
            <ReactTooltip anchorId="earnTooltip" place="top" variant="info" content="Not Allowed" />
            <ReactTooltip anchorId="storeTooltip" place="top" variant="info" content="Not Allowed" />
            <ReactTooltip anchorId="integrationTooltip" place="top" variant="info" content="Not Allowed" />
        </section >
    );
};

export default LinkTabs;