import React, { useContext, useEffect, useRef, useState } from 'react';
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import edit from '../../../../../assets/icons/appearance-tab-icons/edit.svg'
import right from '../../../../../assets/icons/appearance-tab-icons/blue-right.png'
import avatar from '../../../../../assets/avatars/user-avatar.png'
import ProButton from '../../../../../components/Buttons/ProButton';
import ProToggleSwitch from '../../../../../components/ToggleSwitch/ProToggleSwitch';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import ImageUploadModal from '../../../../../components/Modals/CustomizeLinkModals/ImageUploadModal';
import { useDispatch, useSelector } from 'react-redux';
import { setUploadImageModal } from '../../../../../Slices/controllerSlice';

const AvatarTitle = () => {
    const { userData, setLoading } = useContext(AuthContext)
    const [inputChange, setInputChange] = useState(false)
    const [profileTitleUpdateSuccess, setProfileTitleUpdateSuccess] = useState(false)
    const [newProfileTitle, setNewProfileTitle] = useState('')
    const [viewModal, setViewModal] = useState(false)

    const { uploadImageModal } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    console.log(userData);


    const handleUpdate = () => {
        const profileTitle = { profiletitle: newProfileTitle }
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/user/${userData?._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(profileTitle),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    toast.success('Profile Title Updated')
                    setNewProfileTitle('')
                    setInputChange(false)
                    setProfileTitleUpdateSuccess(true)
                    setLoading(true)
                }
            });
    }


    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                setInputChange(false);
                setViewModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section id='avatar-Title' className='mb-4 col-span-2 bg-white w-full'>
            <h1 className='text-left font-bold text-black'>AVATAR & TITLE</h1>

            <div className='relative p-2 md:p-4 border rounded-xl w-full h-fit'>
                <div className='relative flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full'
                        src={`${userData?.image ? userData?.image : avatar}`}
                        alt="prifle image" />

                    <button onClick={() => dispatch(setUploadImageModal(true))} className='relative flex justify-center items-center cursor-pointer w-36 h-10 rounded-3xl text-white bg-blue-600'>
                        <h1 className='cursor-pointer'>Upload Avatar</h1>
                    </button>


                </div>
                {
                    uploadImageModal && <ImageUploadModal endPoint={`user/${userData?._id}`} />
                }


                <div ref={modalRef} className='mt-6'>
                    <h1 className='text-sm text-gray-500 flex items-center gap-2 mt-2'>
                        <span className='text-black font-bold text-xl'>Profile Title</span>
                        <h1 className='flex justify-center items-center w-4 h-4 font-bold rounded-full bg-gray-300 text-white'><span>!</span></h1></h1>
                    <div className='flex-grow flex items-center gap-1'>
                        <input onChange={(e) => setNewProfileTitle(e.target.value)}
                            className={`bg-white text-black font-bold flex-grow focus:outline-none border-none 
                                ${inputChange && 'bg-blue-200'}`} disabled={!inputChange} type="text"
                            defaultValue={userData?.profiletitle ? userData.profiletitle : ''} placeholder='Add Profile Title' />
                        {
                            newProfileTitle ? <>
                                {
                                    newProfileTitle !== userData?.profiletitle ?
                                        <button onClick={() => handleUpdate()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                            <span>SAVE</span>
                                        </button>
                                        :
                                        <>
                                            {
                                                profileTitleUpdateSuccess === false && <img onClick={() => setInputChange(!inputChange)}
                                                    className='w-4 cursor-pointer' src={edit} alt="" />
                                            }
                                        </>
                                }
                            </>
                                :
                                <img onClick={() => setInputChange(!inputChange)} className='w-4' src={edit} alt="" />
                        }
                        {
                            profileTitleUpdateSuccess === true && <img className='w-4 cursor-pointer' src={right} alt="" />
                        }

                    </div>

                </div>

                {/* <div className='mt-6'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-left font-bold text-black'>Hide Avatar</h1>
                            <div className='relative'>
                                <ProToggleSwitch />
                                <div className='absolute -top-5 -right-2'>
                                    <ProButton />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-10'>
                            <h1 className='text-left font-bold text-black'>Hide Title</h1>
                            <div className='relative'>
                                <ProToggleSwitch />
                                <div className='absolute -top-5 -right-2'>
                                    <ProButton />
                                </div>
                            </div>
                        </div>
                    </div> */}
            </div>

        </section>
    );
};

export default AvatarTitle;