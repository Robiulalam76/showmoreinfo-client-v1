import React, { useState } from 'react';
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import blueRight from '../../../../../assets/icons/appearance-tab-icons/blue-right.svg'
import ProButton from '../../../../../components/Buttons/ProButton';

const LayoutSimple = () => {
    const [open, setOpen] = useState(true)
    return (
        <section id='layout' className='mb-4'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>LAYOUT</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='p-2 border rounded-xl w-full h-full'>
                    <h1 className='text-black font-semibold md:text-xl text-left'>Select a layout of your HeyLink.me</h1>

                    <div className='flex justify-center items-center mt-4 gap-4'>
                        <div className='relative flex flex-col items-center justify-center w-36 h-60 bg-blue-200 rounded-md'>
                            <div className='flex flex-col justify-start items-center w-32 h-48 rounded-md pt-5 bg-white'>
                                <div className='w-10 h-10 rounded-full bg-blue-300'></div>
                                <div className='flex items-center gap-2 justify-center mt-3'>
                                    <div className='w-6 h-1 rounded-full bg-blue-300'></div>
                                    <div className='w-10 h-1 rounded-full bg-blue-300'></div>
                                </div>
                                <div className='w-28 h-5 rounded-md bg-blue-300 mt-4'></div>
                                <div className='w-28 h-5 rounded-md bg-blue-300 mt-2'></div>
                                <div className='w-28 h-5 rounded-md bg-blue-300 mt-2'></div>
                                <div className='w-28 h-5 rounded-md bg-blue-300 mt-2 mb-2'></div>
                            </div>
                            <h1 className='text-center text-blue-600'>Avatar</h1>
                            <img className='w-5 absolute -top-2 -right-1' src={blueRight} alt="" />
                        </div>


                        <div className='relative flex flex-col items-center justify-center w-36 h-60 bg-white border rounded-md'>
                            <div className='flex flex-col justify-start items-center w-32 h-48 rounded-md pt-5'>
                                <div className='border w-28 h-20 flex flex-col justify-start items-center'>
                                    <div className='w-10 h-10 rounded-full bg-gray-300 mt-2'></div>
                                    <div className='flex items-center gap-2 justify-center mt-3'>
                                        <div className='w-6 h-1 rounded-full bg-gray-300'></div>
                                        <div className='w-10 h-1 rounded-full bg-gray-300'></div>
                                    </div>
                                </div>
                                <div className='w-28 h-5 rounded-md bg-gray-300 mt-4'></div>
                                <div className='w-28 h-5 rounded-md bg-gray-300 mt-2 mb-2'></div>
                            </div>
                            <h1 className='text-center text-gray-500'>cover Image</h1>
                            <div className='w-5 absolute -top-2 right-8' ><ProButton /></div>
                            <div className='w-8 h-8 rounded-full bg-white absolute flex justify-center items-center'>
                                <img className='w-5' src="https://cdn-f.heylink.me/static/media/lock.676efdd8.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            }
        </section>
    );
};

export default LayoutSimple;