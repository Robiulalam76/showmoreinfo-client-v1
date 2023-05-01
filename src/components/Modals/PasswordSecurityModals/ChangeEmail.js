import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navber from '../../../Pages/Shared/Navber/Navber';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthProvider/AuthProvider';
import SmallLoader from '../../loaders/SmallLoader';
import { toast } from 'react-hot-toast';

const ChangeEmail = ({ closeModal }) => {
    const { userData } = useContext(AuthContext)
    const [modal, setModal] = useState(true)
    const [emailError, setEmailError] = useState("")
    const [sendLoading, setSendLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log(userData);

    const handleEmailChange = (data) => {
        console.log(data);
        if (data.newEmail !== data.repeatNewEmail) {
            setEmailError("New Email and Repeat Email Not Match")
        }
        else {

            const updateData = {
                currentEmail: userData?.email,
                newEmail: data?.newEmail,
                currentPassword: data?.currentPassword
            }
            setSendLoading(true)
            fetch(`https://3twn4n.xn--b5bp.com/app/v1/user/change-email`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.error) {
                        setEmailError(data.error)
                        setSendLoading(false)
                    }
                    if (data.token) {
                        localStorage.setItem("HeyLinkToken", data?.token)
                        setSendLoading(false)
                        toast.success("Email Change Successfull")
                        closeModal(false)
                    }
                })
        }
    }


    useEffect(() => {
        setTimeout(() => {
            setModal(false)
        },);
    },)


    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(0)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center cursor-pointer'>

            <div ref={modalRef} className={`z-500 w-80 md:w-[800px] h-fit p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white ${modal ? "opacity-50" : "opacity-100 duration-1000"}`}>
                <div className='bg-white rounded-2xl w-full mx-auto'>
                    <h1 className='text-xl font-semibold text-gray-900 text-center'>Change The Email for Your Personal Account</h1>

                    {/* ---------Forgot password form start--------- */}
                    <form onSubmit={handleSubmit(handleEmailChange)}
                        className='grid grid-cols-1 gap-4 mt-6' >

                        <input {...register("currentPassword", { required: "Password is required" })}
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="password" name="currentPassword" placeholder='Current Password' />
                        {errors.currentPassword && (
                            <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {errors.currentPassword.message}
                                </p>
                            </div>
                        )}

                        <input {...register("newEmail", { required: "New Email is required" })}
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="email" name="newEmail" placeholder='New Email' />
                        {errors.newEmail && (
                            <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {errors.newEmail.message}
                                </p>
                            </div>
                        )}

                        <input {...register("repeatNewEmail", { required: "Repeat Email is required" })}
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="email" name="repeatNewEmail" placeholder='Repeat New Email' />
                        {errors.repeatNewEmail && (
                            <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {errors.repeatNewEmail.message}
                                </p>
                            </div>
                        )}
                        {
                            emailError && <div className="bg-red-200 h-10 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {emailError}
                                </p>
                            </div>
                        }

                        <button type='submit'
                            className='h-12 flex justify-center items-center bg-[#239ae7] hover:bg-sky-700 duration-150 text-white rounded-[50px] my-4'>
                            <span className='font-bold'>
                                {!sendLoading ? "Change Email" : <SmallLoader />}
                            </span>
                        </button>
                    </form>
                    {/* ---------Forgot password form end--------- */}

                    <h1 onClick={() => closeModal(0)} className='cursor-pointer font-semibold text-gray-900 text-center'>Cancel</h1>
                </div>
            </div>
        </div>
    );
};

export default ChangeEmail;