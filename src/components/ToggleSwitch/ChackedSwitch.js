import React from 'react';

const ChackedSwitch = ({ initialToggle, getToggle }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div onClick={() => getToggle(!initialToggle)}
                className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-not-allowed
        ${initialToggle ? 'bg-gray-200' : 'bg-gray-300'}`}>
                <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
        ${initialToggle ? 'bg-gray-400 transform translate-x-5' : 'bg-gray-400'}`}>
                </div>
            </div>
        </div>
    );
};

export default ChackedSwitch;