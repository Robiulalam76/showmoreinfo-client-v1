import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewShareDrawer } from '../../../Slices/previewSlice';

const ShareButtomDrawer = () => {
    const { viewShareDrawer } = useSelector((state) => state.previewSlice)
    const dispatch = useDispatch()


    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setViewShareDrawer(''));
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <section className='absolute min-h-screen w-full bg-gray-600 bg-opacity-25'>
            {/* <div ref={dropdownRef} className={`absolute w-full h-40 bg-white border shadow rounded-t-2xl duration-300
            ${viewShareDrawer ? 'bottom-[380px]' : '-bottom-[380px]'}`}>

            </div> */}
        </section>
    );
};

export default ShareButtomDrawer;