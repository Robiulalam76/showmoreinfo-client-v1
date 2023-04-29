import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import proBanner from '../../../assets/icons/link-customize-icons/pro-banner.svg'
import star from '../../../assets/icons/link-customize-icons/star.svg'
import { setFastLinkProModal } from '../../../Slices/linksSlice';
import { setOpenFastLinkModal } from '../../../Slices/controllerSlice';

const FastLinkProModal = () => {
    const dispatch = useDispatch()
    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setFastLinkProModal(''))
                dispatch(setOpenFastLinkModal(''))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdownRef} class="absolute right-0 md:-right-16 -top-72 z-10 w-72 rounded-md bg-gray-50 shadow">
            <div className='p-3'>
                <div className='flex justify-center'>
                    <img src={proBanner} alt="" />
                </div>
                <div className='py-3'>
                    <h1 className='text-center font-semibold text-gray-600 text-[16px]'>It's time to turn PRO</h1>
                    <h1 className='text-center font-semibold text-gray-600 text-sm mt-2'>Fast link is available on the <strong>PRO</strong> plan</h1>
                </div>
                <Link to='/billing/subscription' className='flex justify-center ga-4 items-center bg-[#239AE7] h-10 px-6 rounded-[50px]'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={star} alt="" />
                        <h1 className='text-white text-[16px] font-bold'>Unlock PRO</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FastLinkProModal;