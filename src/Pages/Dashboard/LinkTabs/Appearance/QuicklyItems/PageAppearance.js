import React, { useContext } from 'react';
import { useState } from 'react';
import ColorPicker from '../../../../../components/ColorPicker/ColorPicker';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const PageAppearance = () => {
    const { userData, userRefetch } = useContext(AuthContext)
    const [bgColor, setBgColor] = useState('')
    const [pageTextColor, setPageTextColor] = useState('')
    const [buttonBgColor, setButtonBgColor] = useState('')
    const [buttonTextColor, setButtonTextColor] = useState('')
    const [openPicker, setOpenPicker] = useState(0)

    // const {backgroundColor,pageTextColor, } = userData

    const handleUpdate = (data) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/user/${userData?._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    toast.success("Color Update Successfull")
                    userRefetch()
                }
            });
    }

    const handleAction = () => {
        if (bgColor) {
            if (userData?.backgroundColor !== bgColor) {
                handleUpdate({ backgroundColor: bgColor })
            }
        }
        if (pageTextColor) {
            if (userData?.pageTextColor !== pageTextColor) {
                handleUpdate({ pageTextColor: pageTextColor })
            }
        }
        if (buttonBgColor) {
            if (userData?.buttonBackgroundColor !== buttonBgColor) {
                handleUpdate({ buttonBackgroundColor: buttonBgColor })
            }
        }
        if (buttonTextColor) {
            if (userData?.buttonTextColor !== buttonTextColor) {
                handleUpdate({ buttonTextColor: buttonTextColor })
            }
        }
    }


    return (
        <div className='col-span-2 mb-4 bg-white'>

            <h1 className='text-left font-bold text-black'>PAGE APPEARANCE</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-fit border rounded-3xl p-2 md:p-4'>

                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 1 ? 0 : 1)}>
                        <h1 className='mb-2 text-black font-bold'>Background Color</h1>
                        <div className={`h-16 flex justify-center items-center w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: `${userData?.backgroundColor}` }}>
                            <span className='text-white font-bold text-center'>{userData?.backgroundColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 1 && <ColorPicker getColor={setBgColor}
                            closePicker={setOpenPicker} action={handleAction} />
                    }
                </div>


                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 2 ? 0 : 2)}>
                        <h1 className='mb-2 text-black font-bold'>Page text color</h1>
                        <div className={`h-16 flex justify-center items-center w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: `${userData?.pageTextColor}` }}>
                            <span className='text-white font-bold text-center'>{userData?.pageTextColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 2 && <ColorPicker getColor={setPageTextColor}
                            closePicker={setOpenPicker} action={handleAction} />
                    }
                </div>


                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 3 ? 0 : 3)}>
                        <h1 className='mb-2 text-black font-bold'>Button Background Color</h1>
                        <div className={`h-16 flex justify-center items-center border w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: `${userData?.buttonBackgroundColor}` }}>
                            <span className='text-white font-bold text-center'>{userData?.buttonBackgroundColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 3 && <ColorPicker getColor={setButtonBgColor}
                            closePicker={setOpenPicker} action={handleAction} />
                    }
                </div>


                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 4 ? 0 : 4)}>
                        <h1 className='mb-2 text-black font-bold'>Button Text Color</h1>
                        <div className={`h-16 flex justify-center items-center border w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: `${userData?.buttonTextColor}` }}>
                            <span className='text-white font-bold text-center'>{userData?.buttonTextColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 4 && <ColorPicker getColor={setButtonTextColor}
                            closePicker={setOpenPicker} action={handleAction} />
                    }
                </div>

            </div>


        </div>
    );
};

export default PageAppearance;