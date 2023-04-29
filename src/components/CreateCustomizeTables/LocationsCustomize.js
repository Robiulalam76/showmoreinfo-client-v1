import React, { useContext, useEffect, useState } from 'react';
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import deletes from '../../assets/icons/link-customize-icons/delete.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import add from '../../assets/icons/locations-tab-icons/add.svg'
import blueRight from '../../assets/icons/blue-right.png'
import emptyImage from "../../assets/icons/empty-image.svg";
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import DefaultSwitch from '../ToggleSwitch/DefaultSwitch';
import ProToggleSwitch from '../ToggleSwitch/ProToggleSwitch';
import DeleteModal from "../Modals/CommonModals/DeleteModal";
import ProButton from '../Buttons/ProButton';
import { ToastBar, toast } from 'react-hot-toast';
import { ServiceContext } from '../../ContextAPI/ServiceProvider/ServiceProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setRenderReducer } from '../../Slices/getDataSlice';
import { setOpen, setOpenInputChange1, setOpenInputChange2, setDeleteModal, setUploadImageModal } from '../../Slices/controllerSlice';
import { setLocationAddressUpdateSuccess, setMapAddressUpdateSuccess, setMarkersOnTheMapAddress, setNewAddress } from '../../Slices/locationSlice';
import { useForm } from 'react-hook-form';
import ImageUploadModal from '../Modals/CustomizeLinkModals/ImageUploadModal';

const LocationsCustomize = ({ location }) => {
    const {
        newAddress,
        markersOnTheMapAddress,
        locationAddressUpdateSuccess,
        mapAddressUpdateSuccess,
    } = useSelector((state) => state.locationSlice)
    const {
        open,
        openInputChange1,
        openInputChange2,
        deleteModal,
        uploadImageModal
    } = useSelector((state) => state.controllerSlice)

    const dispatch = useDispatch()
    const { handleDefaultSwitch, loader } = useContext(ServiceContext)

    const handleToggleSwitch = (input) => {
        handleDefaultSwitch(location?._id, { show: input }, 'links/location',)
        if (loader) {
            dispatch(setRenderReducer({ render: true }))
        }
    }

    const handleUpdateMarkerOnTheMapAddress = () => {
        fetch(`http://localhost:8000/app/v1/links/location/${location?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ markersOnMap: markersOnTheMapAddress?.address })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Location Updated')
                    dispatch(setRenderReducer({ render: true }))
                    dispatch(setMarkersOnTheMapAddress({ id: '', address: '' }))
                    dispatch(setMapAddressUpdateSuccess({ id: location?._id }))
                    dispatch(setOpenInputChange2(location?._id))
                }
            })
    }

    const handleUpdateLocation = () => {
        fetch(`http://localhost:8000/app/v1/links/location/${location?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ name: newAddress?.address })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Location Updated')
                    dispatch(setRenderReducer({ render: true }))
                    dispatch(setNewAddress({ id: '', address: '' }))
                    dispatch(setLocationAddressUpdateSuccess({ id: location?._id }))
                    dispatch(setOpenInputChange1(''))
                }
            })
    }

    const locationChange = (e) => {
        if (e !== location?.name) {
            dispatch(setNewAddress({ id: location?._id, address: e }))
        }
    }

    const handleUpdateMarkersAddress = (e) => {
        if (e !== location?.markersOnMap) {
            dispatch(setMarkersOnTheMapAddress({ id: location?._id, address: e }))
        }
    }

    let editRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!editRef.current.contains(e.target)) {
                dispatch(setOpenInputChange1(''))
                dispatch(setOpenInputChange2(''))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <>
            <div className='relative w-full my-6 cursor-pointer'>
                <div className='relative flex gap-4 w-full'>
                    <div className='mt-6'>
                        <img className='w-5' src={swap} alt="" />
                    </div>
                    <div className='w-full'>
                        <div className={`relative border border-gray-200 h-20 flex justify-between items-center gap-2 md:gap-6 py-4 px-4 w-full
                        ${open === location?._id ? "rounded-t-3xl" : "rounded-[60px]"}`}>


                            {/* -----------image upload input field end----------- */}

                            <div onClick={() => dispatch(setUploadImageModal(location?._id))}
                                class="relative w-14 h-14 flex justify-center items-center mx-auto bg-gray-200 rounded-full overflow-hidden"
                            >
                                <img
                                    className="w-14 h-14 cursor-pointer"
                                    src={`${location?.image ? location?.image : emptyImage}`}
                                    alt=""
                                />
                            </div>
                            {
                                uploadImageModal === location?._id && <ImageUploadModal
                                    endPoint={`links/location/${location?._id}`} />
                            }

                            {/* <div className=''>
                        <div
                            onClick={() => dispatch(setUploadImageModal(uploadImageModal ? '' : location?._id))}
                            class="relative w-12 h-12 flex justify-center items-center mx-auto bg-gray-200 rounded-md"
                        >
                            <label class="flex justify-center items-center">
                                <div class=" relative flex cursor-pointer items-center justify-center">
                                    {
                                        location?.image ? <img
                                            className="w-12 h-12 cursor-pointer"
                                            // src={`data:image/png;base64, ${base64}`}
                                            alt="" />
                                            :
                                            <img
                                                className="w-12 h-12 cursor-pointer"
                                                src=''
                                                alt=""
                                            />
                                    }
                                </div>
                            </label>
                        </div>
                        {uploadImageModal === location?._id && (
                            <ImageUploadModal
                                url={location}
                                endPoint='location'
                            />
                        )}
                    </div> */}

                            {/* -----------image upload input field end----------- */}

                            {/* -----------edit and input  icon start----------- */}
                            <div className='flex-grow flex flex-col gap-2'>
                                <div className='flex justify-between items-center cursor-pointer'>
                                    <input onChange={(e) => locationChange(e.target.value)}
                                        className={`mr-3 px-2 h-8 bg-white rounded w-full focus:outline-none text-gray-700 
                                ${openInputChange1 === location?._id ? 'font-normal bg-blue-100 border border-blue-600' : 'font-bold  border-none cursor-pointer'}`} type="text" disabled={!openInputChange1} defaultValue={location?.name} name='address' />
                                    {
                                        newAddress?.id === location?._id && newAddress?.address ?
                                            <button onClick={() => handleUpdateLocation()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                                <span>SAVE</span>
                                            </button>
                                            :
                                            <>
                                                {
                                                    locationAddressUpdateSuccess?.id !== location?._id && <img onClick={() => dispatch(setOpenInputChange1(openInputChange1 ? '' : location?._id))}
                                                        className='w-4 cursor-pointer' src={edit} alt="" />
                                                }
                                            </>
                                    }
                                    {
                                        locationAddressUpdateSuccess?.id === location?._id && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                                    }
                                </div>
                            </div>
                            {/* -----------edit  and input icon end----------- */}

                            <div className='flex md:justify-center items-center gap-2 md:gap-6'>
                                <div className='relative'>
                                    <div
                                        onClick={() => dispatch(setDeleteModal(deleteModal ? '' : location?._id))} className='hidden md:block md:flex flex-col justify-center items-center gap-2'>
                                        <img className='w-4' src={deletes} alt="" />
                                        <span className='text-sm text-gray-500'>Delete</span>
                                    </div>
                                    {deleteModal === location?._id && (
                                        <DeleteModal
                                            endPoint={"location"}
                                            id={location._id}
                                        ></DeleteModal>
                                    )}
                                </div>
                                <DefaultSwitch initialToggle={location?.show === 'true'} getToggle={handleToggleSwitch} />
                            </div>
                        </div>
                        {
                            open === location?._id && <div className={`relative h-fit cursor-pointer border-gray-200 py-4 px-4
                            ${open === location?._id ? "border-b border-x rounded-b-3xl" : "border-t"}`}>
                                <div className='mb-2'>
                                    <h1 className='text-gray-900 font-semibold text-sm'>Markers on the map</h1>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='flex items-center w-full h-12 bg-gray-200 rounded-md'>
                                        <input onChange={(e) => handleUpdateMarkersAddress(e.target.value)}
                                            className='w-full h-full px-3 border-none bg-gray-200 focus:outline-none text-gray-700 text-sm font-semibold' type="text"
                                            disabled={openInputChange2 === location?._id}
                                            defaultValue={location?.markersOnMap ? location?.markersOnMap?.slice(0, 80) : location?.name?.slice(0, 80)} />
                                    </div>
                                    {
                                        markersOnTheMapAddress?.id === location?._id && markersOnTheMapAddress?.address &&
                                        <button onClick={() => handleUpdateMarkerOnTheMapAddress()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                            <span>SAVE</span>
                                        </button>
                                    }

                                    {
                                        openInputChange2 === location?._id && mapAddressUpdateSuccess?.id !== location?._id &&
                                        <img
                                            onClick={() => dispatch(setOpenInputChange2(''))} className='w-3' src={edit} alt="" />
                                    }
                                    {
                                        mapAddressUpdateSuccess?.id === location?._id && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                                    }
                                </div>
                                {/* <div className='flex items-center gap-4 mt-4'>
                            <img src={add} alt="" />
                            <Link to='' className='text-blue-600 underline'>Add another marker</Link>
                            <ProButton />
                        </div> */}
                                {/* <div className='flex justify-between items-center mt-4'> */}
                                {/* <div> */}
                                {/* <div className='flex items-center gap-4'> */}
                                {/* <h1 className='text-gray-900 font-semibold'>Spotlight</h1> */}
                                {/* <ProButton /> */}
                                {/* </div> */}
                                {/* <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p> */}
                                {/* </div> */}
                                {/* -----------toggler switch start----------- */}
                                {/* <ProToggleSwitch /> */}
                                {/* -----------toggler switch start----------- */}
                                {/* </div> */}

                                {/* <div className='flex justify-between items-center mt-4'> */}
                                {/* <div className='flex items-center gap-4'> */}
                                {/* <h1 className='text-gray-900 font-semibold'>Map is Hidden</h1> */}
                                {/* <ProButton /> */}
                                {/* </div> */}
                                {/* -----------toggler switch start----------- */}
                                {/* <ProToggleSwitch /> */}
                                {/* -----------toggler switch start----------- */}
                                {/* </div> */}

                                {/* <div className='flex justify-between items-center mt-4'> */}
                                {/* <div className='flex items-center gap-4'> */}
                                {/* <h1 className='text-gray-900 font-semibold'>Map is Locked</h1> */}
                                {/* <ProButton /> */}
                                {/* </div> */}
                                {/* -----------toggler switch start----------- */}
                                {/* <ProToggleSwitch /> */}
                                {/* -----------toggler switch start----------- */}
                                {/* </div> */}

                                <div className='flex flex-col md:flex-row md:items-center gap-8 mt-4'>
                                    {/* <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Marker Button Color</h1>
                                    <ProButton />
                                </div>
                                <p className='text-gray-500 text-sm'>Choose the colour visitors will see for the location buttons on your page</p>
                                <div className='h-10 w-44 mt-2 bg-orange-600 rounded-md'></div>
                            </div> */}
                                    {/* <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Marker Font Color</h1>
                                    <ProButton />
                                </div>
                                <p className='text-gray-500 text-sm'>You can change the font of the location button here</p>
                                <div className='h-10 w-44 mt-2 border border-gray-300 rounded-md'></div>
                            </div> */}

                                </div>
                            </div>

                        }

                        {/* -----------toggler button start----------- */}
                        <div onClick={() => dispatch(setOpen(open ? '' : location?._id))}
                            className='cursor-pointer h-6 bg-gray-200 w-[90%] mx-auto flex justify-center items-center rounded-[60px]'>
                            <img className='w-4' src={open === location?._id ? upArrow : downArrow} alt="" />
                        </div>
                        {/* -----------toggler button end----------- */}
                    </div>
                </div>

            </div>



        </>
    );
};

export default LocationsCustomize;