import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { useContext } from 'react';
import { AuthContext } from '../../../ContextAPI/AuthProvider/AuthProvider';
import { useState } from 'react';
import ChangePassword from '../../../components/Modals/PasswordSecurityModals/ChangePassword';
import ChangeEmail from '../../../components/Modals/PasswordSecurityModals/ChangeEmail';

const PasswordSecurity = () => {
    const { userData } = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(0)


    console.log(userData);
    return (
        <main className='relative bg-white mx-auto'>
            <div className='bg-[#393AA7]'>
                <Navber />
            </div>
            <div className='max-w-[1000px] mx-auto mt-6 min-h-screen'>
                <h1 className='text-left font-bold text-black text-xl mb-2'>PASSWORD & SECURITY</h1>
                <div className='w-full mx-auto h-fit border rounded-xl p-4'>

                    <div draggable className='flex justify-between items-center'>
                        <div className='flex flex-col gap-2 justify-start items-start'>
                            <h1 className='font-bold text-black text-left'>Current Email</h1>
                            <span>{userData?.email}</span>
                        </div>
                        <button onClick={() => setOpenModal(1)}
                            className='text-white font-semibold py-2 px-12 bg-[#393AA7] hover:bg-sky-500 duration-300 rounded-[50px]'>
                            Change
                        </button>
                    </div>

                    <hr className='my-3 border-gray-300' />

                    <div draggable className='flex justify-between items-center'>
                        <h1 className='font-bold text-black text-left'>Password</h1>
                        <button onClick={() => setOpenModal(2)}
                            className='text-white font-semibold py-2 px-12 bg-[#393AA7] hover:bg-sky-500 duration-300 rounded-[50px]'>
                            Change
                        </button>
                    </div>

                </div>
            </div>

            {
                openModal === 1 && <ChangeEmail closeModal={setOpenModal} />
            }
            {
                openModal === 2 && <ChangePassword closeModal={setOpenModal} />
            }

        </main>
    );
};

export default PasswordSecurity;