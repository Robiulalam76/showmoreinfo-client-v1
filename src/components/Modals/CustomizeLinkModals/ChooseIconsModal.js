import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import SmallLoader from '../../loaders/SmallLoader';

import img1 from "../../../assets/icons/build-icons/img1.png"
import img2 from "../../../assets/icons/build-icons/img2.png"
import img3 from "../../../assets/icons/build-icons/img3.png"
import img4 from "../../../assets/icons/build-icons/img4.png"
import img5 from "../../../assets/icons/build-icons/img5.png"
import img6 from "../../../assets/icons/build-icons/img6.png"
import img7 from "../../../assets/icons/build-icons/img7.png"
import img8 from "../../../assets/icons/build-icons/img8.png"

const icons = [
    { id: "1", img: img1 },
    { id: "2", img: img2 },
    { id: "3", img: img3 },
    { id: "4", img: img4 },
    { id: "5", img: img5 },
    { id: "6", img: img6 },
    { id: "7", img: img7 },
    { id: "8", img: img8 },
]

const ChooseIconsModal = ({ imageUpload, closeModal }) => {
    const [selectedIcon, setSelectedIcon] = useState(null)
    const [sendLoading, setSendLoading] = useState(false)
    console.log(selectedIcon);
    const handleLoader = (data) => {
        imageUpload(data)
        setTimeout(() => {
            setSendLoading(true)
        }, 1000)
    }

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center'>

            <div ref={modalRef} className='z-500 w-80 h-fit p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white'>
                <div className='grid grid-cols-4 gap-6 bg-white '>
                    {
                        icons?.map((icon, i) => (
                            <button key={i} onClick={() => setSelectedIcon(icon?.img)}
                                className={`w-14 h-14 rounded-full
                            ${selectedIcon === icon?.img && "border-4 border-blue-600"}`}>
                                <img className='w-full h-full object-cover rounded-full' src={icon?.img} alt="" />
                            </button>
                        ))
                    }
                </div>

                {
                    selectedIcon ? <button onClick={() => handleLoader(selectedIcon)}
                        className='text-white text-xl font-semibold flex justify-center items-center w-52 h-12 rounded-3xl bg-[#215FC1]'>
                        <span>
                            {!sendLoading ? "Choose" : <SmallLoader />}
                        </span>
                    </button>
                        :
                        <button disabled className='text-white cursor-not-allowed text-xl font-semibold flex justify-center items-center w-52 h-12 rounded-3xl bg-[#84aff3]'>
                            <span>Choose</span>
                        </button>
                }
            </div>

        </div>
    );
};

export default ChooseIconsModal;