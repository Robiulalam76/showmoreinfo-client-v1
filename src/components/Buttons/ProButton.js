import React, { useState } from 'react';
import lock from '../../assets/icons/link-customize-icons/pro-lock.svg'
import ProModal from '../Modals/CommonModals/ProModal';

const ProButton = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className='relative cursor-pointer flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
            <img onClick={() => setOpenModal(!openModal)} className='w-7' src={lock} alt="" />
            {
                openModal && <ProModal setCloseModal={setOpenModal} />
            }
        </div>
    );
};

export default ProButton;