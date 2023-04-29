import React, { useState } from 'react';
import ProModal from '../../../Modals/CommonModals/ProModal';
import GridTab from './GridTab';
import SlidTab from './SlidTab';


const SliderGridTab = ({ slideGrid }) => {
    const [titleToggle, setTitleToggle] = useState(false);
    const [proModal, setProModal] = useState(false);
    const [togglePermit, setTogglePermit] = useState(false);

    return (
        <div className='cursor-pointer px-2'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-gray-900 font-semibold'>Show Title</h1>
                    <div className='flex justify-center items-center h-4 w-8 rounded-[50px] bg-orange-600 p-1'>
                        <img src="https://cdn-f.heylink.me/static/media/ic_pro_lock.f3e6f73e.svg" alt="" />
                    </div>
                </div>
                <div className="relative flex flex-col justify-center items-center ">
                    {
                        togglePermit ? <div onClick={() => setTitleToggle(!titleToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                ${titleToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                ${titleToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                            :
                            <div onClick={() => setProModal(!proModal)}
                                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                    ${titleToggle ? 'bg-red-100' : 'bg-gray-200'}`}>
                                <div className={`h-5 w-5 rounded-full shadow-md bg-gray-300`}>
                                </div>
                            </div>
                    }
                    {
                        proModal && <ProModal setCloseModal={setProModal} />
                    }
                </div>
            </div>


            {/* --------------slider and grid small tabs-------------- */}
            {
                slideGrid ? <SlidTab /> : <GridTab />
            }
        </div>
    );
};

export default SliderGridTab;