import React, { useEffect, useRef, useState } from 'react';
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import edit from '../../../../../assets/icons/appearance-tab-icons/edit.svg'
import right from '../../../../../assets/icons/appearance-tab-icons/blue-right.png'
import AppearanceShareModal from '../../../../../components/Modals/AppearanceModals/AppearanceShareModal';
import ShortUsernameModal from '../../../../../components/Modals/AppearanceModals/ShortUsernameModal';

const ShortUserName = () => {
    const [open, setOpen] = useState(true)
    const [inputChange, setInputChange] = useState(false)
    const [newShortUsername, setNewShortUsername] = useState('')
    const [viewModal, setViewModal] = useState(false)
    const [viewShortUserNameModal, setViewShortUserNameModal] = useState(false)

    const handleUpdate = () => {
        setNewShortUsername('')
    }

    // console.log(newShortUsername)
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
        <section id='Short-username' className='mb-4'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>SHORT USERNAME</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='flex justify-between items-center gap-4 px-2 border rounded-xl w-full h-20'>

                    <div ref={modalRef} className='flex items-center justify-between gap-2 w-full' >
                        <div className='flex-grow'>
                            <div className='flex-grow flex items-center gap-1'>
                                <div className='relative'>
                                    <div onClick={() => setViewShortUserNameModal(!viewShortUserNameModal)}
                                        className='h-8 bg-gray-300 flex items-center justify-center w-fit px-2 rounded-2xl'>
                                        <h1 className='text-gray-500'>he1.me</h1>
                                        <img className='w-5' src={arrowDown} alt="" />
                                    </div>
                                    {
                                        viewShortUserNameModal && <ShortUsernameModal closeModal={setViewShortUserNameModal} />
                                    }
                                </div>
                                <input onChange={(e) => setNewShortUsername(e.target.value)} className={`bg-white flex-grow focus:outline-none border-none ${inputChange && 'bg-blue-200'}`} disabled={!inputChange} type="text" defaultValue='cNTsa' />
                                {
                                    newShortUsername ? <>
                                        {
                                            newShortUsername !== 'cNTsa' ? <img onClick={() => handleUpdate()} className='w-4' src={right} alt="" />
                                                :
                                                <img onClick={() => setInputChange(!inputChange)} className='w-4' src={edit} alt="" />
                                        }
                                    </>
                                        :
                                        <img onClick={() => setInputChange(!inputChange)} className='w-4' src={edit} alt="" />
                                }
                            </div>
                            <h1 className='text-sm text-gray-500'>Short Username</h1>
                        </div>

                        <div className='relative'>
                            <div onClick={() => setViewModal(!viewModal)} className="w-8 h-8 p-1 bg-blue-600 rounded-full flex justify-center items-center"><svg className='w-4 text-white' xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 56 50"><path d="M33.128 41.786v-6.243h22.873v6.243H33.128zM46.934 8.2h9.067v6.243h-9.067V8.2zM30.758 22.645c-5.122 0-9.599-3.357-10.997-8.202H-.009V8.2h19.77c1.398-4.845 5.875-8.202 10.997-8.202 6.307 0 11.436 5.079 11.436 11.324 0 6.244-5.129 11.323-11.436 11.323zm0-16.405c-2.829 0-5.133 2.28-5.133 5.082 0 2.8 2.304 5.081 5.133 5.081 2.828 0 5.131-2.281 5.131-5.081 0-2.802-2.303-5.082-5.131-5.082zM16.95 27.339c6.307 0 11.437 5.08 11.437 11.326 0 6.245-5.13 11.323-11.437 11.323-5.12 0-9.599-3.356-10.997-8.202H-.009v-6.243h5.962c1.398-4.846 5.877-8.204 10.997-8.204zm0 16.407c2.829 0 5.132-2.281 5.132-5.081 0-2.802-2.303-5.082-5.132-5.082-2.829 0-5.132 2.28-5.132 5.082 0 2.8 2.303 5.081 5.132 5.081z" fill='white' ></path></svg></div>
                            {
                                viewModal && <AppearanceShareModal />
                            }
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default ShortUserName;