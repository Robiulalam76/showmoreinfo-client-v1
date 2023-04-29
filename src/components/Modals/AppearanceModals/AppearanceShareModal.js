import React from 'react';
import fb from '../../../assets/icons/appearance-tab-icons/facebook.png'
import linkedin from '../../../assets/icons/appearance-tab-icons/linkedin.png'
import telegram from '../../../assets/icons/appearance-tab-icons/telegram.png'
import copy from '../../../assets/icons/appearance-tab-icons/copy.png'

const AppearanceShareModal = () => {
    return (
        <div class="absolute right-0 z-10 mt-2 w-60 rounded-md bg-gray-50 shadow border">
            <div className='p-3'>
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-5 col-span-1' src={fb} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Share On Facebook</h1>
                </div>
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-6 col-span-1' src={linkedin} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Share On Linkedin</h1>
                </div>
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-6 col-span-1' src={telegram} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Share On Telegram</h1>
                </div>
                <hr className='mb-2 border-gray-400' />
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-6 col-span-1' src={copy} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Copy Full Link</h1>
                </div>
            </div>
        </div>
    );
};

export default AppearanceShareModal;