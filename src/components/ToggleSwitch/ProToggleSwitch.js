import React, { useState } from 'react';
import ProModal from '../Modals/CommonModals/ProModal';

const ProToggleSwitch = () => {
    const [toggle, setToggle] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    return (
        <div className="relative flex items-center gap-2">
            <div onClick={() => setViewModal(!viewModal)}
                className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
                ${toggle ? 'bg-red-100' : 'bg-gray-200'}`}>
                <div className={`h-4 w-4 rounded-full shadow-md bg-gray-400`}></div>
            </div>
            {
                viewModal && <ProModal setCloseModal={setViewModal} />
            }
        </div>
    );
};

export default ProToggleSwitch;