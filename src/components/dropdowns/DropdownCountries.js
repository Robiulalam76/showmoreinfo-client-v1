import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLanguage, setShowLanguage } from '../../Slices/navberSlice';

const DropdownCountries = () => {
    const { languages } = useSelector((state) => state.navberSlice)
    const dispatch = useDispatch()

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setShowLanguage(false));
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <div ref={dropdownRef} class="absolute -right-16 md:right-0 z-10 mt-2 w-40 flex justify-center items-center rounded-md bg-white shadow-lg">
            <div className='grid grid-cols-1 cursor-pointer w-full'>
                {
                    languages.map(lan => <div onClick={() => dispatch(setSelectedLanguage(lan))}
                        className='flex items-center gap-2 hover:bg-gray-200 w-full h-12 px-2'>
                        <img className='w-6' src={lan.img} alt="" />
                        <p className='text-gray-900 hover:text-sky-500 text-xl'>{lan.name}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default DropdownCountries;