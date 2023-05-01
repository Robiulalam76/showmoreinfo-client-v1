import React, { useEffect, useRef } from 'react';
import close from '../../../assets/icons/link-customize-icons/close.svg'
import buzz from '../../../assets/icons/link-customize-icons/buzz.svg'
import wobble from '../../../assets/icons/link-customize-icons/wobble.svg'
import pop from '../../../assets/icons/link-customize-icons/pop.svg'
import blink from '../../../assets/icons/link-customize-icons/blink.svg'
import lock from '../../../assets/icons/link-customize-icons/pro-lock.svg'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setOpenEffcetsModal } from '../../../Slices/linksSlice';

const EffectsModal = ({ url }) => {
    const dispatch = useDispatch()

    const handleEffect = (input) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/common/${url?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ effects: input })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Effect Updated')
                    dispatch(setOpenEffcetsModal(''))
                }
            })
    }

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setOpenEffcetsModal(''))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdownRef} class="absolute -right-20 md:-right-16 -top-44 z-10 mt-2 md:w-96 rounded-md bg-gray-50 shadow">
            <div className='p-3'>
                <div className='w-full flex justify-end'>
                    <img onClick={() => dispatch(setOpenEffcetsModal(''))} className='w-3' src={close} alt="" />
                </div>
                <div className='py-3'>
                    <h1 className='text-center font-semibold text-gray-600 text-[16px]'>Add special effects</h1>
                </div>

                <div className='flex justify-center items-center gap-3 md:gap-6'>
                    <div onClick={() => handleEffect('buzz')} className='flex flex-col gap-4 justify-center items-center'>
                        <div>
                            <img className='w-12' src={buzz} alt="" />
                        </div>
                        <div className={`w-16 h-7 mt-2 bg-gray-200 rounded flex justify-center items-center
                        ${url?.effects === 'buzz' && 'bg-blue-400'}`}>
                            <h1 className='text-gray-500 font-semibold text-sm'>Buzz</h1>
                        </div>
                    </div>
                    <div onClick={() => handleEffect('wobble')} className='flex flex-col gap-4 justify-center items-center'>
                        <div>
                            <img className='w-6' src={wobble} alt="" />
                        </div>
                        <div className={`w-16 h-7 bg-gray-200 rounded flex justify-center items-center
                        ${url?.effects === 'wobble' && 'bg-blue-400'}`}>
                            <h1 className='text-gray-500 font-semibold text-sm'>Wobble</h1>
                        </div>
                    </div>
                    <div onClick={() => handleEffect('pop')} className='flex flex-col gap-4 justify-center items-center'>
                        <div>
                            <img className='w-12' src={pop} alt="" />
                        </div>
                        <div className={`w-16 h-7 mt-3 bg-gray-200 rounded flex justify-center items-center
                        ${url?.effects === 'pop' && 'bg-blue-400'}`}>
                            <h1 className='text-gray-500 font-semibold text-sm'>Pop</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='relative'>
                            <img className='w-12 h-6' src={blink} alt="" />

                            <div className='absolute -top-4 right-1 flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                <img className='w-7' src={lock} alt="" />
                            </div>
                        </div>
                        <div className={`w-16 h-7 mt-2 bg-gray-200 rounded flex justify-center items-center
                        ${url?.effects === 'blink' && 'bg-blue-400'}`}>
                            <h1 className='text-gray-500 font-semibold text-sm'>Blink</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EffectsModal;