import React from 'react';

const PrimaryButtons = ({ children }) => {
    return (
        <button
            className='text-white font-semibold py-2 px-12 bg-[#F67261] hover:bg-sky-500 duration-300 rounded-[50px]'>
            {children}
        </button>
    );
};

export default PrimaryButtons;