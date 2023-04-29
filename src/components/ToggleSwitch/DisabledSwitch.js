import React from 'react';

const DisabledSwitch = () => {
    return (
        <div className="flex flex-col justify-center items-center cursor-not-allowed">
            <div
                className={`w-12 h-6 flex items-center rounded-full p-1 bg-gray-200`}>
                <div className={`h-5 w-5 rounded-full shadow-md bg-gray-300`}>
                </div>
            </div>
        </div>
    );
};

export default DisabledSwitch;