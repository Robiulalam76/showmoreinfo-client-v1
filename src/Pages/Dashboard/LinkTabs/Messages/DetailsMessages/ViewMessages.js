import React, { useContext, useState } from 'react';
import ProButton from '../../../../../components/Buttons/ProButton';
import SmallIcon from '../../../../../components/Buttons/SmallIcon';
import DefaultSwitch from '../../../../../components/ToggleSwitch/DefaultSwitch';
import ProToggleSwitch from '../../../../../components/ToggleSwitch/ProToggleSwitch';
import edit from "../../../../../assets/icons/link-customize-icons/edit.svg";
import blueRight from '../../../../../assets/icons/blue-right.png'
import { useDispatch, useSelector } from 'react-redux';
import { setEmailPlaceholderText, setEmailPlaceholderUpdateSuccess, setMessageText, setMessageTextUpdateSuccess, setNamePlaceholderText, setNamePlaceholderUpdateSuccess, setPhoneNumberPlaceholderText, setPhoneNumberPlaceholderUpdateSuccess, setSuccessMessageText, setSuccessMessageTextUpdateSuccess } from '../../../../../Slices/messageSlice';
import { toast } from 'react-hot-toast';
import { ServiceContext } from '../../../../../ContextAPI/ServiceProvider/ServiceProvider';
import ChackedSwitch from '../../../../../components/ToggleSwitch/ChackedSwitch';

const ViewMessages = ({ message }) => {
    const {
        messageText,
        successMessageText,
        namePlaceholderText,
        emailPlaceholderText,
        phoneNumberPlaceholderText,
        messageTextUpdateSuccess,
        successMessageTextUpdateSuccess,
        namePlaceholderUpdateSuccess,
        emailPlaceholderUpdateSuccess,
        phoneNumberPlaceholderUpdateSuccess,
    } = useSelector((state) => state.messageSlice)
    const dispatch = useDispatch()
    const { handleDefaultSwitch } = useContext(ServiceContext)

    // custom field 1-----------
    const [customFieldChecked1, setCustomFieldChecked1] = useState(false)
    const [customField1, setCustomField1] = useState('')

    // custom field 2-----------
    const [customFieldChecked2, setCustomFieldChecked2] = useState(false)
    const [customField2, setCustomField2] = useState('')

    // custom field 3-----------
    const [customFieldChecked3, setCustomFieldChecked3] = useState(false)
    const [customField3, setCustomField3] = useState('')

    const handleUpdateMessageText = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ messageText: messageText })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
                dispatch(setMessageTextUpdateSuccess(true))
                dispatch(setMessageText(''))
            });
    }


    const handleUpdateSuccessMessageText = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ successMessageText: successMessageText })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
                dispatch(setSuccessMessageTextUpdateSuccess(true))
                dispatch(setSuccessMessageText(''))
            });
    }


    const handleMessageTextValild = (e) => {
        if (e !== message?.messageText) {
            dispatch(setMessageText(e))
        }
    }
    const handleSuccessMessageTextValid = (e) => {
        if (e !== message?.successMessageText) {
            dispatch(setSuccessMessageText(e))
        }
    }

    const handleNameFieldChacked = (input) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ nameFieldChacked: input })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
            });
    }

    const handleEmailFieldChacked = (input) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ emailFieldChacked: input })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
            });
    }
    const handlePhoneNumberFieldChacked = (input) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ phoneNumberFieldChacked: input })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
            });
    }

    const handleUpdateNamePlaceholder = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ namePlaceholder: namePlaceholderText })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
                dispatch(setNamePlaceholderUpdateSuccess(true))
                dispatch(setNamePlaceholderText(''))
            });
    }


    const handleUpdateEmailPlaceholder = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ emailPlaceholder: emailPlaceholderText })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
                dispatch(setEmailPlaceholderUpdateSuccess(true))
                dispatch(setEmailPlaceholderText(''))
            });
    }
    const handleUpdatePhoneNumberPlaceholder = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/message/${message?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ phoneNumberPlaceholder: phoneNumberPlaceholderText })
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Update Successfully')
                dispatch(setPhoneNumberPlaceholderUpdateSuccess(true))
                dispatch(setPhoneNumberPlaceholderText(''))
            });
    }

    const handleNamePlaceholderValid = (e) => {
        if (e !== message?.namePlaceholder) {
            dispatch(setNamePlaceholderText(e))
        }
    }
    const handleEmailPlaceholderValid = (e) => {
        if (e !== message?.emailPlaceholder) {
            dispatch(setEmailPlaceholderText(e))
        }
    }
    const handlePhoneNumberPlaceholderValid = (e) => {
        if (e !== message?.phoneNumberPlaceholder) {
            dispatch(setPhoneNumberPlaceholderText(e))
        }
    }
    const handleNameToggleSwitch = (input) => {
        handleDefaultSwitch(message?._id, { turnOnName: input }, 'message',)
    }
    const handleEmailToggleSwitch = (input) => {
        handleDefaultSwitch(message?._id, { turnOnEmail: input }, 'message',)
    }
    const handlePhoneNumberToggleSwitch = (input) => {
        handleDefaultSwitch(message?._id, { turnOnPhoneNumber: input }, 'message',)
    }

    return (
        <div className='mt-4'>
            {/* <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-gray-500 text-left'>Display shortcut on scroll</h1>
                    <SmallIcon>?</SmallIcon>
                    <ProButton />
                </div>
                <ProToggleSwitch />
            </div> */}

            <div className='mb-4'>
                <h1 className='text-black font-bold text-left'>Appearance</h1>
                <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
                    <div className='relative'>
                        <label className='text-sm text-gray-500' htmlFor="messageText">Message Text</label>
                        <input onChange={(e) => handleMessageTextValild(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none' type="text" name='messageText' id='messageText'
                            defaultValue={message?.messageText ? message?.messageText : 'Leave your message here...'} />
                        {
                            messageText &&
                            <button onClick={() => handleUpdateMessageText()} className="w-12 h-8 absolute right-3 bottom-0 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                <span>SAVE</span>
                            </button>
                        }
                        {
                            messageTextUpdateSuccess === true && <img className='w-4 absolute right-3 bottom-0 cursor-pointer' src={blueRight} alt="" />
                        }
                    </div>

                    <div className='relative'>
                        <label className='text-sm text-gray-500' htmlFor="successMessageText">Success Message Text</label>
                        <input onChange={(e) => handleSuccessMessageTextValid(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none' type="text" name='successMessageText' id='successMessageText'
                            defaultValue={message?.successMessageText ? message?.successMessageText : 'Your message was sent successfully!'} />
                        {
                            successMessageText &&
                            <button onClick={() => handleUpdateSuccessMessageText()} className="w-12 h-8 absolute right-3 bottom-0 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                                <span>SAVE</span>
                            </button>
                        }
                        {
                            successMessageTextUpdateSuccess === true && <img className='w-4 absolute right-3 bottom-0 cursor-pointer' src={blueRight} alt="" />
                        }
                    </div>
                </div>
            </div>


            {/* ----------------------------------------------------- */}
            <div className='flex justify-between items-center mb-4'>
                <h1 className=' text-gray-500'>Input Field Text</h1>
                <h1 className=' text-gray-500'>Required Field</h1>
            </div>


            {/* -----------name part----------- */}
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => handleNameFieldChacked(message?.nameFieldChacked === 'true' ? 'false' : 'true')} checked={message?.nameFieldChacked === 'true' ? true : false}
                        type="checkbox" name="name" id="name" />
                    <input onChange={(e) => handleNamePlaceholderValid(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm' type="text" name='name' id='name'
                        defaultValue={message?.namePlaceholder ? message?.namePlaceholder : 'Your Name'} />
                    {
                        namePlaceholderText &&
                        <button onClick={() => handleUpdateNamePlaceholder()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                            <span>SAVE</span>
                        </button>
                    }
                    {
                        namePlaceholderUpdateSuccess === true && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                    }
                </div>

                {
                    message?.nameFieldChacked === 'true' ? <DefaultSwitch
                        initialToggle={message?.turnOnName === 'true' ? true : false}
                        getToggle={handleNameToggleSwitch} />
                        :
                        <ChackedSwitch initialToggle={message?.turnOnName === 'true' ? true : false} />
                }
            </div>

            {/* -----------email part----------- */}
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => handleEmailFieldChacked(message?.emailFieldChacked === 'true' ? 'false' : 'true')} checked={message?.emailFieldChacked === 'true' ? true : false}
                        type="checkbox" name="email" id="email" />
                    <input onChange={(e) => handleEmailPlaceholderValid(e.target.value)}
                        className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm' type="text" name='email' id='email'
                        defaultValue={message?.emailPlaceholder ? message?.emailPlaceholder : 'Your Email Address'} />
                    {
                        emailPlaceholderText &&
                        <button onClick={() => handleUpdateEmailPlaceholder()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                            <span>SAVE</span>
                        </button>
                    }
                    {
                        emailPlaceholderUpdateSuccess === true && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                    }
                </div>

                {
                    message?.emailFieldChacked === 'true' ? <DefaultSwitch
                        initialToggle={message?.turnOnEmail === 'true' ? true : false}
                        getToggle={handleEmailToggleSwitch} />
                        :
                        <ChackedSwitch initialToggle={message?.turnOnEmail === 'true' ? true : false} />
                }
            </div>



            {/* -----------phoneNumber part----------- */}
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => handlePhoneNumberFieldChacked(message?.phoneNumberFieldChacked === 'true' ? 'false' : 'true')} checked={message?.phoneNumberFieldChacked === 'true' ? true : false}
                        type="checkbox" name="phone" id="phone" />
                    <input onChange={(e) => handlePhoneNumberPlaceholderValid(e.target.value)}
                        className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm' type="text" name='phone' id='phone'
                        defaultValue={message?.phoneNumberPlaceholder ? message?.phoneNumberPlaceholder : 'Your Phone Number'} />
                    {
                        phoneNumberPlaceholderText &&
                        <button onClick={() => handleUpdatePhoneNumberPlaceholder()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                            <span>SAVE</span>
                        </button>
                    }
                    {
                        phoneNumberPlaceholderUpdateSuccess === true && <img className='w-4 cursor-pointer' src={blueRight} alt="" />
                    }
                </div>

                {
                    message?.phoneNumberFieldChacked === 'true' ? <DefaultSwitch
                        initialToggle={message?.turnOnPhoneNumber === 'true' ? true : false}
                        getToggle={handlePhoneNumberToggleSwitch} />
                        :
                        <ChackedSwitch initialToggle={message?.turnOnPhoneNumber === 'true' ? true : false} />
                }
            </div>

            {/* -------------------------------------------------------------- */}


            {/* 
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setCustomFieldChecked1(!customFieldChecked1)} checked={customFieldChecked1} type="checkbox" name="customField1" id="customField1" />
                    <input onChange={(e) => setCustomField1(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="text" name='customField1' id='customField1' defaultValue='Custom Field #1' />
                </div>

                <ProToggleSwitch />
            </div>

            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setCustomFieldChecked2(!customFieldChecked2)} checked={customFieldChecked2} type="checkbox" name="customField2" id="customField2" />
                    <input onChange={(e) => setCustomField2(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="text" name='customField2' id='customField2' defaultValue='Custom Field #2' />
                </div>

                <ProToggleSwitch />
            </div>

            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setCustomFieldChecked3(!customFieldChecked3)} checked={customFieldChecked3} type="checkbox" name="customField3" id="customField3" />
                    <input onChange={(e) => setCustomField3(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="text" name='customField3' id='customField3' defaultValue='Custom Field #3' />
                </div>

                <ProToggleSwitch />
            </div> */}

        </div>
    );
};

export default ViewMessages;