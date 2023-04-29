import React, { useContext, useEffect, useRef, useState } from 'react';
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import edit from '../../../../../assets/icons/appearance-tab-icons/edit.svg'
import right from '../../../../../assets/icons/appearance-tab-icons/blue-right.png'
import blueRight from '../../../../../assets/icons/blue-right.png'
import AppearanceShareModal from '../../../../../components/Modals/AppearanceModals/AppearanceShareModal';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { setInputChange, setOpenUsername, setNewUsername, setUserNameUpdateSuccess } from '../../../../../Slices/appearanceSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserName = () => {
    const {
        openUsername,
        inputChange,
        newUsername,
        userNameUpdateSuccess,
    } = useSelector((state) => state.appearanceSlice)
    const dispatch = useDispatch()
    const { userData, setLoading } = useContext(AuthContext)

    const [viewModal, setViewModal] = useState(false)

    // copy from username input
    function copy(text) {
        const copyText = `showmore.info/${userData?.username}`
        navigator.clipboard.writeText(copyText)
        toast.success(`${copyText} Copy Successfull`)
    }

    const handleUpdate = () => {
        fetch(`http://localhost:8000/app/v1/user/${userData?._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ username: newUsername }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    toast.success('User Name Updated')
                    setLoading(true)
                    dispatch(setNewUsername(''))
                    dispatch(setUserNameUpdateSuccess(true))
                    dispatch(setInputChange(false))
                }
            });
    }

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                dispatch(setInputChange(false));
                setViewModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section id='shortcut' className='col-span-2 mb-4 bg-white'>
            <h1 className='text-left font-bold text-black'>USERNAME</h1>
            <div className='flex justify-between items-center gap-4 px-2 border rounded-xl w-full h-20'>

                <div ref={modalRef} className='flex items-center justify-between gap-2 w-full' >

                    <div className='flex-grow flex items-center gap-1'>
                        <h1 className='text-gray-500 text-xl'>showmore.info/</h1>
                        <input onChange={(e) => dispatch(setNewUsername(e.target.value))}
                            className={`bg-white w-full flex-grow focus:outline-none border-none text-black font-bold text-xl ${inputChange && 'bg-blue-200'}`} disabled={!inputChange} type="text" defaultValue={userData?.username} />
                        {
                            newUsername ? <>
                                {
                                    newUsername !== userData?.username ?
                                        <button onClick={() => handleUpdate()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                            <span>SAVE</span>
                                        </button>
                                        :
                                        <>
                                            {
                                                userNameUpdateSuccess === false && <img onClick={() => dispatch(setInputChange(!inputChange))}
                                                    className='w-4 cursor-pointer' src={edit} alt="" />
                                            }
                                        </>
                                }
                                {
                                    userNameUpdateSuccess === true && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                                }
                            </>
                                :
                                <img onClick={() => dispatch(setInputChange(!inputChange))} className='w-4' src={edit} alt="" />
                        }
                    </div>

                    <div className='relative'>
                        <svg onClick={() => copy()} className='bg-blue-600 rounded-full hover:bg-blue-800 duration-150' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="current" />
                            <rect x="10.5" y="16.5" width="12" height="12" rx="2.5" stroke="white" />
                            <rect x="17.5" y="10.5" width="12" height="12" rx="2.5" fill="current" stroke="white" />
                        </svg>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default UserName;