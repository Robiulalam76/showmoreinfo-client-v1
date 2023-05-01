import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import SmallLoader from '../../loaders/SmallLoader';

const ChangePassword = ({ closeModal }) => {
    const { userData } = useContext(AuthContext)
    const [modal, setModal] = useState(true)
    const [passwordError, setPasswordError] = useState("")
    const [sendLoading, setSendLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log(userData);

    const handlePasswordChange = (data) => {
        if (data.newPassword !== data.repeatNewPassword) {
            setPasswordError("New Password and Repeat Password Not Match")
        }
        else {

            const updateData = {
                currentPassword: data.currentPassword,
                currentEmail: userData?.email,
                newPassword: data?.newPassword,
            }
            setSendLoading(true)
            fetch(`https://3twn4n.xn--b5bp.com/app/v1/user/change-password`, {
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
                        setPasswordError(data.error)
                        setSendLoading(false)
                    }
                    if (data.token) {
                        localStorage.setItem("HeyLinkToken", data?.token)
                        setSendLoading(false)
                        toast.success("Password Change Successfull")
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

    console.log(modal);


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

            <div draggable ref={modalRef} className={`z-500 w-80 md:w-[800px] h-fit p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white ${modal ? "opacity-50" : "opacity-100 duration-1000"}`}>
                <div className='bg-white rounded-2xl w-full mx-auto'>
                    <h1 className='text-xl font-semibold text-gray-900 text-center'>Password Recovery</h1>

                    {/* ---------Forgot password form start--------- */}
                    <form onSubmit={handleSubmit(handlePasswordChange)}
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

                        <input {...register("newPassword", { required: "New Password is required" })}
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="password" name="newPassword" placeholder='New Password' />
                        {errors.newPassword && (
                            <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {errors.newPassword.message}
                                </p>
                            </div>
                        )}

                        <input {...register("repeatNewPassword", { required: "Repeat Password is required" })}
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="password" name="repeatNewPassword" placeholder='Repeat New Password' />
                        {errors.repeatNewPassword && (
                            <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {errors.repeatNewPassword.message}
                                </p>
                            </div>
                        )}
                        {
                            passwordError && <div className="bg-red-200 h-10 w-full flex justify-end items-center">
                                <p className="text-gray-900 text-sm py-3 px-2">
                                    {passwordError}
                                </p>
                            </div>
                        }

                        <button type='submit'
                            className='h-12 flex justify-center items-center bg-[#239ae7] hover:bg-sky-700 duration-150 text-white rounded-[50px] my-4'>
                            <span className='font-bold'>
                                {!sendLoading ? "Change Password" : <SmallLoader />}
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

export default ChangePassword;