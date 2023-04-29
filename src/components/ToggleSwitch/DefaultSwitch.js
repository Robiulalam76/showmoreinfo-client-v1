import React, { useState } from 'react';

const DefaultSwitch = ({ initialToggle, getToggle }) => {
    // console.log(initialToggle);
    return (
        <div className="flex flex-col justify-center items-center ">
            <div onClick={() => getToggle(!initialToggle)}
                className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
            ${initialToggle ? 'bg-[#D9D9D9]' : 'bg-[#D9D9D9]'}`}>
                <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
            ${initialToggle ? 'bg-[#58D809] transform translate-x-5' : 'bg-white'}`}>
                </div>
            </div>
        </div>
    );
};

export default DefaultSwitch;