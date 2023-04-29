import React, { useState } from 'react';

const SwitchOnOff = ({ getToggle, initialToggle }) => {
    const [toggleSwitch, setToggleSwitch] = useState(initialToggle)

    const handleToggle = () => {
        setToggleSwitch(!toggleSwitch)
        getToggle(toggleSwitch)
    }
    return (
        <div className="flex items-center gap-2">
            <span className='text-gray-500 text-sm font-semibold'>OFF</span>
            <div className="flex flex-col justify-center items-center ">
                <div onClick={() => handleToggle()}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                ${toggleSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                    <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                ${toggleSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                    </div>
                </div>
            </div>
            <span className='text-gray-500 text-sm font-semibold'>ON</span>
        </div>
    );
};

export default SwitchOnOff;