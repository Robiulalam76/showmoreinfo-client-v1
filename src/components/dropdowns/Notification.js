import React from 'react';
import dot from '../../assets/icons/dot.png'

const Notification = () => {
    return (
        <div class="absolute -right-36 md:right-0 z-10 w-80 md:w-[500px] mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="p-3 md:p-6">
                <p className='text-gray-900 font-semibold mb-4'>Release notes</p>

                <div>
                    <div className='flex items-center gap-3 md:gap-6 mb-6 hover:bg-gray-100 rounded-md p-2'>
                        <img className='w-8' src={dot} alt="" />
                        <div className='flex flex-col gap-1'>
                            <small className='text-gray-400 text-sm'>2023-01-27</small>
                            <p className='text-gray-600 text-[16px]'>[Localisation] Malay.</p>
                            <p className='text-gray-400 text-sm'>We localised website in Malay language.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 md:gap-6 mb-6 hover:bg-gray-100 rounded-md p-2'>
                        <img className='w-8' src={dot} alt="" />
                        <div className='flex flex-col gap-1'>
                            <small className='text-gray-400 text-sm'>2023-01-27</small>
                            <p className='text-gray-600 text-[16px]'>[Localisation] Malay.</p>
                            <p className='text-gray-400 text-sm'>We localised website in Malay language.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 md:gap-6 mb-6 hover:bg-gray-100 rounded-md p-2'>
                        <img className='w-8' src={dot} alt="" />
                        <div className='flex flex-col gap-1'>
                            <small className='text-gray-400 text-sm'>2023-01-27</small>
                            <p className='text-gray-600 text-[16px]'>[Localisation] Malay.</p>
                            <p className='text-gray-400 text-sm'>We localised website in Malay language.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 md:gap-6 mb-6 hover:bg-gray-100 rounded-md p-2'>
                        <img className='w-8' src={dot} alt="" />
                        <div className='flex flex-col gap-1'>
                            <small className='text-gray-400 text-sm'>2023-01-27</small>
                            <p className='text-gray-600 text-[16px]'>[Localisation] Malay.</p>
                            <p className='text-gray-400 text-sm'>We localised website in Malay language.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;