import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setSuccessfull } from '../../Slices/controllerSlice';
import img1 from '../../assets/icons/gif-images/success.gif'
import { AuthContext } from '../../ContextAPI/AuthProvider/AuthProvider';

const SendMessageForm = ({ messageData, refetch }) => {
    const { userData } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { successfull } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    function playSound() {
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3%27');
        audio.play();
    }

    const handleMessageSend = (data) => {
        // const newMessage = data.userInfo = userData._id
        fetch(`http://localhost:8000/app/v1/all-messages`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Message Send Successfully')
                playSound()
                dispatch(setSuccessfull(true))
                reset()
            });
    }

    return (
        <>
            {
                successfull ? <div className='w-full h-fit flex flex-col md:flex-row justify-center items-center bg-green-100 border-4 border-green-600 py-4 px-2 gap-2'>
                    <img className='w-16' src={img1} alt="" />
                    <h1 className='text-green-600 font-semibold text-2xl'>{messageData?.successMessageText ? messageData?.successMessageText : 'Your message was sent successfully!'}</h1>
                </div>
                    :
                    <div className="w-full h-fit bg-slate-200 rounded-[32px] border-2 border-[#E5E7EB] p-2">
                        <form onSubmit={handleSubmit(handleMessageSend)} className="">
                            <div className="mb-4">
                                <input
                                    {...register("messageText", { required: 'Text is Required', maxLength: { value: 510, message: '510 characters remaining' } })}
                                    className="w-full h-12 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-400 text-xl"
                                    name="messageText"
                                    placeholder={messageData?.messageText ? messageData?.messageText : 'Leave your message here...'} />
                                {errors.messageText && (
                                    <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                        <p className="text-white text-sm py-3 px-2">
                                            {errors.messageText.message}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {
                                messageData?.nameFieldChacked === 'true' && <div className="mb-4">
                                    <input
                                        {...register("name", messageData?.turnOnName === 'true' && { required: 'Name is Required', maxLength: { value: 16, message: '16 characters remaining' } })}
                                        className="w-full h-12 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-400 text-xl"
                                        name="name"
                                        placeholder={`${messageData?.namePlaceholder ? messageData?.namePlaceholder : 'Enter Your Name'} ${messageData?.turnOnName === 'true' ? '' : '(Optional)'}`} />
                                    {errors.name && (
                                        <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                            <p className="text-white text-sm py-3 px-2">
                                                {errors.name.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            }
                            {
                                messageData?.emailFieldChacked === 'true' && <div className="mb-4">
                                    <input
                                        {...register("email", messageData?.turnOnEmail === 'true' && { required: 'Email is Required', maxLength: { value: 40, message: '40 characters remaining' } })}
                                        className="w-full h-12 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-400 text-xl"
                                        name="email"
                                        placeholder={`${messageData?.emailPlaceholder ? messageData?.emailPlaceholder : 'Your Email Address'} ${messageData?.turnOnEmail === 'true' ? '' : '(Optional)'}`} />
                                    {errors.email && (
                                        <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                            <p className="text-white text-sm py-3 px-2">
                                                {errors.email.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            }
                            {
                                messageData?.phoneNumberFieldChacked === 'true' && <div className="mb-4">
                                    <input
                                        {...register("phoneNumber", messageData[0]?.turnOnPhoneNumber === 'true' && { required: 'Phone Number is Required', maxLength: { value: 15, message: '15 characters remaining' } })}
                                        className="w-full h-12 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-400 text-xl"
                                        name="phoneNumber"
                                        placeholder={`${messageData[0]?.phoneNumberPlaceholder ? messageData[0]?.phoneNumberPlaceholder : 'Your Phone Number'} ${messageData[0]?.turnOnPhoneNumber === 'true' ? '' : '(Optional)'}`} />
                                    {errors.phoneNumber && (
                                        <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                            <p className="text-white text-sm py-3 px-2">
                                                {errors.phoneNumber.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            }


                            <button className="w-full h-12 rounded-[60px] border flex justify-center items-center gap-3" type="submit"
                                style={{ backgroundColor: `${userData?.buttonBackgroundColor}`, color: `${userData?.buttonTextColor}` }} >
                                <h1 className="text-xl font-semibold">Send Message</h1>
                                <svg className="w-6" xmlns="https://www.w3.org/2000/svg" fill='current' viewBox="0 0 20 20"><path d="M19.5 9.3L1.2.1C1.1 0 .9 0 .8 0 .6 0 .5.1.3.2.2.3.1.4.1.6 0 .7 0 .9.1 1l2.5 9-2.5 9v.4c0 .1.1.2.2.3.1.1.2.2.3.2 0 .1.1.1.3.1.1 0 .3 0 .4-.1l18.3-9.2c.1-.1.3-.2.3-.3s.1-.2.1-.4 0-.3-.1-.4c-.1-.2-.2-.3-.4-.3zM2.2 17.6L4 10.8l5-.8-5-.8-1.8-6.8L17.3 10 2.2 17.6z"></path></svg>
                            </button>
                        </form>
                    </div>
            }
        </>
    );
};

export default SendMessageForm;