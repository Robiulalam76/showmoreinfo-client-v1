import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GalleryCustomize from '../../../../../components/CreateCustomizeTables/GalleryCustomize';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import useGetData from '../../../../../Hoock/GetData';
import { setOpenAddGallery } from '../../../../../Slices/gallerySlice';

const GalleryTab = () => {
    const { userData } = useContext(AuthContext)
    const { openAddGallery } = useSelector((state) => state.gallerySlice)
    const dispatch = useDispatch()
    const galleryData = useGetData('links/gallery')

    console.log(openAddGallery);

    const handleGallery = () => {
        const data = {
            title: 'My Gallery',
            userInfo: userData?._id
        }
        fetch(`http://localhost:8000/app/v1/links/gallery`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ title: 'My Gallery' })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Gallery Add Successfully')
            });
    }


    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setOpenAddGallery(false))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section className='min-h-screen'>
            <div>
                <h1 className='text-blue-800 mb-4 font-semibold'>IMAGE GALLERY</h1>
                {
                    !galleryData && <div className='relative'>
                        <div onClick={() => dispatch(setOpenAddGallery(true))}
                            className='cursor-pointer flex flex-col md:flex-row justify-center md:justify-start rounded-xl items-center border md:gap-6 h-32 w-full px-6'>
                            <div className='bg-blue-600 rounded-[50px] px-12 h-10 flex items-center gap-6'>
                                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57167 15.5858L9.28583 11.5858L12.5357 15.0858L18.5712 8.58579L20.4283 10.5858V4H5.57167V15.5858ZM5.57167 18.4142V20H14.4724L9.28583 14.4142L5.57167 18.4142ZM17.0987 20H20.4283V13.4142L18.5712 11.4142L13.8489 16.5L17.0987 20ZM5.57167 2H20.4283C21.4539 2 22.2854 2.89543 22.2854 4V20C22.2854 21.1046 21.4539 22 20.4283 22H5.57167C4.54604 22 3.7146 21.1046 3.7146 20V4C3.7146 2.89543 4.54604 2 5.57167 2ZM12.0714 5C13.6099 5 14.8571 6.34315 14.8571 8C14.8571 9.65685 13.6099 11 12.0714 11C10.533 11 9.28583 9.65685 9.28583 8C9.28583 6.34315 10.533 5 12.0714 5ZM12.0714 7C11.5586 7 11.1429 7.44772 11.1429 8C11.1429 8.55228 11.5586 9 12.0714 9C12.5843 9 13 8.55228 13 8C13 7.44772 12.5843 7 12.0714 7ZM0 6C0 4.89543 0.831442 4 1.85708 4H1.85746H2.78518C2.78494 4.52698 2.78521 4.74722 2.78551 4.99931V4.99932V4.99934V4.99939C2.78579 5.22564 2.7861 5.47759 2.7861 6H1.85746V18H2.7861C2.7861 18.5224 2.78579 18.7744 2.78551 19.0006V19.0007V19.0007C2.78521 19.2528 2.78494 19.473 2.78518 20H1.85746H1.85724C1.36153 20 0.911199 19.7908 0.578204 19.4498C0.222275 19.0854 0.000382493 18.5706 0.000382493 18V6H0ZM24.1429 20C25.1686 20 26 19.1046 26 18H25.9996L25.9996 6C25.9996 5.42506 25.7744 4.90679 25.4137 4.54195C25.0815 4.20587 24.6345 4 24.1428 4H24.1425L23.2148 4C23.2151 4.52661 23.2148 4.74691 23.2145 4.99877V4.99938C23.2142 5.22563 23.2139 5.47758 23.2139 6H24.1425V18H23.2139C23.2139 18.5224 23.2142 18.7744 23.2145 19.0006V19.0007V19.0012C23.2148 19.2531 23.2151 19.4734 23.2148 20H24.1425H24.1429Z" fill="white" />
                                </svg>

                                <h1 className='text-white font-semibold'>Add Gallery</h1>
                            </div>
                            <h1 className='text-gray-400 text-center'>You can add multiple Image Sliders on the PRO plan.Check it <Link to='/' className='underline text-blue-600'>here</Link></h1>
                        </div>
                        {
                            openAddGallery && <div ref={dropdownRef} onClick={() => handleGallery()}
                                class="absolute top-18 z-10 mt-2 md:w-96 rounded-md bg-gray-50 shadow">
                                <div className='cursor-pointer p-3'>
                                    <div className='h-32 px-3 w-full hover:bg-blue-200 rounded-md flex items-center gap-6'>
                                        <svg width="100" height="100" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57167 15.5858L9.28583 11.5858L12.5357 15.0858L18.5712 8.58579L20.4283 10.5858V4H5.57167V15.5858ZM5.57167 18.4142V20H14.4724L9.28583 14.4142L5.57167 18.4142ZM17.0987 20H20.4283V13.4142L18.5712 11.4142L13.8489 16.5L17.0987 20ZM5.57167 2H20.4283C21.4539 2 22.2854 2.89543 22.2854 4V20C22.2854 21.1046 21.4539 22 20.4283 22H5.57167C4.54604 22 3.7146 21.1046 3.7146 20V4C3.7146 2.89543 4.54604 2 5.57167 2ZM12.0714 5C13.6099 5 14.8571 6.34315 14.8571 8C14.8571 9.65685 13.6099 11 12.0714 11C10.533 11 9.28583 9.65685 9.28583 8C9.28583 6.34315 10.533 5 12.0714 5ZM12.0714 7C11.5586 7 11.1429 7.44772 11.1429 8C11.1429 8.55228 11.5586 9 12.0714 9C12.5843 9 13 8.55228 13 8C13 7.44772 12.5843 7 12.0714 7ZM0 6C0 4.89543 0.831442 4 1.85708 4H1.85746H2.78518C2.78494 4.52698 2.78521 4.74722 2.78551 4.99931V4.99932V4.99934V4.99939C2.78579 5.22564 2.7861 5.47759 2.7861 6H1.85746V18H2.7861C2.7861 18.5224 2.78579 18.7744 2.78551 19.0006V19.0007V19.0007C2.78521 19.2528 2.78494 19.473 2.78518 20H1.85746H1.85724C1.36153 20 0.911199 19.7908 0.578204 19.4498C0.222275 19.0854 0.000382493 18.5706 0.000382493 18V6H0ZM24.1429 20C25.1686 20 26 19.1046 26 18H25.9996L25.9996 6C25.9996 5.42506 25.7744 4.90679 25.4137 4.54195C25.0815 4.20587 24.6345 4 24.1428 4H24.1425L23.2148 4C23.2151 4.52661 23.2148 4.74691 23.2145 4.99877V4.99938C23.2142 5.22563 23.2139 5.47758 23.2139 6H24.1425V18H23.2139C23.2139 18.5224 23.2142 18.7744 23.2145 19.0006V19.0007V19.0012C23.2148 19.2531 23.2151 19.4734 23.2148 20H24.1425H24.1429Z" fill="gray" />
                                        </svg>
                                        <div className=''>
                                            <h1 className='text-gray-900 font-bold'>Image Slider</h1>
                                            <p className='text-gray-400 font-sm'>Add images and show them as a slider or a grid on your HeyLink.me page</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
                {
                    galleryData && <GalleryCustomize />
                }
            </div>
        </section>
    );
};

export default GalleryTab;

