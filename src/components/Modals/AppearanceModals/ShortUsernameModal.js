import React, { useEffect, useRef, useState } from 'react';
import fb from '../../../assets/icons/appearance-tab-icons/facebook.png'
import linkedin from '../../../assets/icons/appearance-tab-icons/linkedin.png'
import telegram from '../../../assets/icons/appearance-tab-icons/telegram.png'
import copy from '../../../assets/icons/appearance-tab-icons/copy.png'
import ProButton from '../../Buttons/ProButton';
import ProModal from '../CommonModals/ProModal';

const shortUsernames = [
    'hel.me', 'heyl.me', 'heybio.link', 'hel.link', 'myhey.link'
]

const ShortUsernameModal = ({ closeModal }) => {
    const [proModal, setProModal] = useState(false)

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={modalRef} class="absolute right-0 z-10 mt-2 w-40 rounded-md bg-gray-50 shadow border">
            <div className='p-2 relative'>
                {
                    shortUsernames.map(userName => <div onClick={() => setProModal(!proModal)} className='grid grid-cols-4 items-center px-2 hover:bg-gray-200 mb-4'>
                        <h1 className='col-span-2 text-gray-500 font-semibold text-[16px]'>{userName}</h1>
                        <div className='col-span-2 flex justify-end items-center'>
                            <ProButton />
                        </div>
                    </div>)
                }
                {
                    proModal && <ProModal closeModal={setProModal} />
                }
            </div>
        </div>
    );
};

export default ShortUsernameModal;