import React from 'react';
import { Link } from 'react-router-dom';
import eye from '../../../assets/icons/eye.svg'

const PreviewSmallBtn = () => {
    return (
        <>
            <Link to='/preview' className='cursor-pointer block lg:hidden flex justify-center'>
                <div className='fixed bottom-8 right-auto flex gap-2 items-center justify-center w-24 h-8 rounded-[50px] bg-gray-300 border border-blue-900'>
                    <img className='w-4' src={eye} alt="" />
                    <h1 className='text-sm text-blue-900'>Preview</h1>
                </div>
            </Link>
        </>
    );
};

export default PreviewSmallBtn;