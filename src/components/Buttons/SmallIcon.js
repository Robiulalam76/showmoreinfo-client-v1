import React from 'react';

const SmallIcon = ({ children }) => {
    return (
        <div className='w-5 h-5 rounded-full bg-gray-300 flex justify-center items-center font-bold text-white'>
            <span>{children}</span></div>
    );
};

export default SmallIcon;