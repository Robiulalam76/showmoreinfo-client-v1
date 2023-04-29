import React from 'react';
import copy from '../../assets/icons/copy.svg'
import edit from '../../assets/icons/edit.svg'

const UserNameChange = () => {
    return (
        <div class="absolute right-0 z-10 mt-2 w-60 rounded-md bg-gray-50 shadow">
            <div className='p-3'>
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-7 col-span-1' src={copy} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Copy Full Link</h1>
                </div>
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-5 col-span-1' src={copy} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Copy Short Link</h1>
                </div>
                <hr className='mb-2 border-gray-400' />
                <div className='grid grid-cols-4 hover:bg-gray-200 p-2 mb-2 rounded-md'>
                    <img className='w-5 col-span-1' src={edit} alt="" />
                    <h1 className='col-span-3 text-gray-500 font-semibold text-[16px]'>Copy Short Link</h1>
                </div>
            </div>
        </div>
    );
};

export default UserNameChange;