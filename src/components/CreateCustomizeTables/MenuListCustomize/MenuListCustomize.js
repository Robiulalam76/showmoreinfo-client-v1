import React, { useContext, useEffect, useRef, useState } from 'react';
import downArrow from '../../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../../assets/icons/link-customize-icons/up-arrow.svg'
import plus from '../../../assets/icons/plus.svg'
import downArrow2 from '../../../assets/icons/down-arrow.svg'
import deletes from '../../../assets/icons/link-customize-icons/delete.svg'
import swap from '../../../assets/icons/link-customize-icons/swap.svg'
import blueRight from '../../../assets/icons/blue-right.png'
import edit from '../../../assets/icons/link-customize-icons/edit.svg'
import DeleteModal from '../../Modals/CommonModals/DeleteModal';
import MenuItems from './MenuItems';
import ProButton from '../../Buttons/ProButton';
import ProToggleSwitch from '../../ToggleSwitch/ProToggleSwitch';
import ProModal from '../../Modals/CommonModals/ProModal';
import DefaultSwitch from '../../ToggleSwitch/DefaultSwitch';
import { toast } from 'react-hot-toast';
import { ServiceContext } from '../../../ContextAPI/ServiceProvider/ServiceProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen, setDeleteModal, setOpenInputChange1 } from '../../../Slices/controllerSlice';
import { setMenuName, setMenuNameUpdateSuccess, setProModal1, setProModal2, setViewCurrency } from '../../../Slices/menuSlice';
import { setRenderReducer } from '../../../Slices/getDataSlice';

const MenuListCustomize = ({ menu }) => {
    const {
        currencyItems,
        viewCurrency,
        proModal1,
        proModal2,
        menuName,
        menuNameUpdateSuccess
    } = useSelector((state) => state.menuSlice)
    const { open, deleteModal, openInputChange1 } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()
    const { handleDefaultSwitch, loader } = useContext(ServiceContext)

    const handleToggleSwitch = (input) => {
        handleDefaultSwitch(menu?._id, { show: input }, 'links/menu',)
        if (loader) {
            dispatch(setRenderReducer({ render: true }))
        }
    }

    const handleMenuItems = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/menu`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ item: { itemText: 'D', ItemPrice: 'T' } })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Menu Name Added')
                }
            })
    }

    const handleUpdateMenuName = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/menu/${menu?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ name: menuName })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Menu Name Added')
                    dispatch(setMenuName(''))
                    dispatch(setRenderReducer({ render: true }))
                    dispatch(setMenuNameUpdateSuccess(menu?._id))
                    dispatch(setOpenInputChange1(''))
                }
            })
    }

    const handleCurrency = (input) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/menu/${menu?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ currency: input })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Currency Added')
                    dispatch(setViewCurrency(false))
                    dispatch(setRenderReducer({ render: true }))
                }
            })
    }

    const handleMenuName = (e) => {
        if (e !== menu?.name) {
            dispatch(setMenuName(e))
        }
    }


    let outSideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outSideRef.current.contains(e.target)) {
                dispatch(setViewCurrency(false))
                dispatch(setProModal1(false))
                dispatch(setProModal2(false))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div>
            <div className='relative w-full my-6 border border-gray-200 rounded-md'>

                <div className='h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6'>
                    <div>
                        <img className='w-5' src={swap} alt="" />
                    </div>

                    <div className='w-full h-14 flex items-center gap-2'>
                        <input onChange={(e) => handleMenuName(e.target.value)}
                            className='flex-grow focus:outline-none text-red-500 border-none w-full h-12 px-4 bg-gray-200' name='menuName' type="text" defaultValue={menu?.name && menu.name} placeholder='Please enter the name of the menu or price list' />
                        {
                            menuName ?
                                <button onClick={() => handleUpdateMenuName()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                    <span>SAVE</span>
                                </button>
                                :
                                <>
                                    {
                                        menuNameUpdateSuccess !== menu?._id && <img onClick={() => dispatch(setOpenInputChange1(openInputChange1 ? '' : menu?._id))}
                                            className='w-4 cursor-pointer' src={edit} alt="" />
                                    }
                                </>
                        }
                        {
                            menuNameUpdateSuccess === menu?._id && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                        }
                    </div>

                    <div className='flex md:justify-center items-center gap-2 md:gap-6'>
                        <div className='relative cursor-pointer hidden md:block'>
                            <div onClick={() => dispatch(setDeleteModal(deleteModal ? '' : menu?._id))} className='md:flex flex-col justify-center items-center gap-2'>
                                <img className='w-4' src={deletes} alt="" />
                                <span className='text-sm text-gray-500'>Delete</span>
                            </div>
                            {
                                deleteModal === menu?._id && <DeleteModal
                                    endPoint={"menu"}
                                    id={menu?._id}
                                ></DeleteModal>
                            }
                        </div>

                        {/* -----------toggler switch start----------- */}
                        <DefaultSwitch initialToggle={menu?.show === 'true'} getToggle={handleToggleSwitch} />
                        {/* -----------toggler switch start----------- */}
                    </div>
                </div>


                {
                    open === menu?._id && menu.item.map(i => <MenuItems menuId={menu?._id} item={i} />)
                }


                {
                    open === menu?._id && <div className='px-4 cursor-pointer py-4'>
                        <button onClick={() => handleMenuItems()}
                            className='flex items-center gap-4 mt-5'>
                            <img className='w-5' src={plus} alt="" />
                            <span className='text-blue-900 underline'>Add additional item</span>
                        </button>

                        <div ref={outSideRef} className='flex flex-col md:flex-row items-center gap-6 mt-4'>
                            <h1 className='font-semibold text-black'>Currency</h1>
                            <div className='relative'>
                                <div onClick={() => dispatch(setViewCurrency(viewCurrency ? false : true))}
                                    className='flex items-center justify-between px-2 w-60 h-12 bg-gray-100 border rounded-md'>
                                    <h1 className='text-black font-semibold'>{menu?.currency}</h1>
                                    <img src={downArrow2} alt="" />
                                </div>
                                {
                                    viewCurrency && <div className='bg-whtie absolute h-44 border w-full overflow-y-auto bg-white px-2 z-50'>
                                        {
                                            currencyItems.map(i => <div
                                                onClick={() => handleCurrency(i)}
                                                className='hover:bg-gray-200 h-8 w-full flex items-center justify-start'>
                                                <h1 className={`text-black ${i === menu?.currency && 'font-semibold'}`}>{i}</h1>
                                            </div>)
                                        }
                                    </div>
                                }
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-between items-center mt-4'>
                                {/* <div>
                                    <div className='flex items-center gap-4'>
                                        <h1 className='text-gray-900 font-semibold'>Spotlight</h1>
                                        <ProButton />
                                    </div>
                                    <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p>
                                </div> */}
                                {/* -----------toggler switch start----------- */}

                                {/* <div className='relative'>
                                    <div onClick={() => dispatch(setProModal1(proModal1 ? false : true))}>
                                        <ProToggleSwitch />
                                    </div>
                                    {
                                        proModal1 && <ProModal />
                                    }
                                </div> */}

                                {/* -----------toggler switch start----------- */}
                            </div>

                            <div className='flex justify-between items-center mt-4'>
                                {/* <div>
                                    <div className='flex items-center gap-4'>
                                        <h1 className='text-gray-900 font-semibold'>Add Link / URL</h1>
                                        <ProButton />
                                    </div>
                                    <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p>
                                </div> */}
                                {/* -----------toggler switch start----------- */}


                                {/* <div className='relative'>
                                    <div onClick={() => dispatch(setProModal2(proModal2 ? false : true))}>
                                        <ProToggleSwitch />
                                    </div>
                                    {
                                        proModal2 && <ProModal />
                                    }
                                </div> */}

                                {/* -----------toggler switch start----------- */}
                            </div>
                        </div>
                    </div>
                }

                {/* -----------toggler button start----------- */}
                <div onClick={() => dispatch(setOpen(open ? '' : menu?._id))}
                    className='cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center'>
                    <img className='w-4' src={open === menu?._id ? upArrow : downArrow} alt="" />
                </div>
                {/* -----------toggler button end----------- */}
            </div>
        </div >
    );
};

export default MenuListCustomize;