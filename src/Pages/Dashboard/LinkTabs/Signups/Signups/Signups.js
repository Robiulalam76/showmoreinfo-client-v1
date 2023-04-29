import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import down from '../../../../../assets/icons/down.png'
import DefaultSwitch from '../../../../../components/ToggleSwitch/DefaultSwitch';
import { setOpenTab } from '../../../../../Slices/controllerSlice';
import EmailSignup from './SignupDetails/EmailSignup';
import SMSSignup from './SignupDetails/SMSSignup';
import WhatsupSignup from './SignupDetails/WhatsupSignup';

const options = ['All Types', 'Email', 'SMS', 'Whatsup']

const Signups = () => {
    const [emailSignup, setEmailSignup] = useState(false)
    const [smsSignup, setSMSSignup] = useState(false)
    const [whatsupSignup, setWhatsupSignup] = useState(false)
    const [selectedOption, setSelectedOption] = useState('All Types')
    const [showOptions, setShowOptions] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOpenTab(false))
    }, [])

    const handleSetOption = (data) => {
        setSelectedOption(data)
        setShowOptions(false)
    }

    return (
        <section className='min-h-full py-6'>
            <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4'>
                <div className='flex justify-between items-center w-full h-full'>
                    <div>
                        <h1 className='text-black font-bold text-left'>Email Signup</h1>
                        <p className='text-gray-500 mt-4'>Add an Email Signup form to your HeyLink.me so your visitors can easily signup!</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className='text-gray-500 text-sm font-semibold'>OFF</span>
                        <DefaultSwitch initialToggle={emailSignup} getToggle={setEmailSignup} />
                        <span className='text-gray-500 text-sm font-semibold'>ON</span>
                    </div>
                </div>
                {
                    emailSignup && <EmailSignup />
                }
            </div>


            <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4'>
                <div className='flex justify-between items-center w-full h-full'>
                    <div>
                        <h1 className='text-black font-bold text-left'>Signup by SMS</h1>
                        <p className='text-gray-500 mt-4'>Add an SMS Signup form.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className='text-gray-500 text-sm font-semibold'>OFF</span>
                        <DefaultSwitch initialToggle={smsSignup} getToggle={setSMSSignup} />
                        <span className='text-gray-500 text-sm font-semibold'>ON</span>
                    </div>
                </div>
                {
                    smsSignup && <SMSSignup />
                }

            </div>


            <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4'>
                <div className='flex justify-between items-center w-full h-full'>
                    <div>
                        <h1 className='text-black font-bold text-left'>Signup by WhatsApp</h1>
                        <p className='text-gray-500 mt-4'>Add an WhatsApp Signup form.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className='text-gray-500 text-sm font-semibold'>OFF</span>
                        <DefaultSwitch initialToggle={whatsupSignup} getToggle={setWhatsupSignup} />
                        <span className='text-gray-500 text-sm font-semibold'>ON</span>
                    </div>
                </div>
                {
                    whatsupSignup && <WhatsupSignup />
                }

            </div>



            <h1 className='text-black font-bold text-left mb-2'>SIGNUPS & SUBSCRIBERS</h1>
            <div className='w-full h-full rounded-xl border p-4 mb-4 cursor-pointer'>
                <div className='flex justify-between items-center gap-4'>
                    <h1 className='text-black font-bold text-left mb-2'>SOURCE</h1>
                    <div className='relative flex-grow'>
                        <div onClick={() => setShowOptions(!showOptions)} className='flex justify-between items-center px-4 w-full h-12 border bg-gray-100 rounded-md text-black'>
                            <h1>{selectedOption}</h1>
                            <img className='w-3' src={down} alt="" />
                        </div>

                        {
                            showOptions && <div className='absolute w-full bg-white border shadow overflow-y-auto' >
                                {
                                    options.map(option => <div onClick={() => handleSetOption(option)}
                                        className='w-full h-10 hover:bg-gray-200 flex justify-start items-center px-2' >
                                        <h1 className={`${selectedOption === option && 'font-bold'}`}>{option}</h1>
                                    </div>)
                                }
                            </div>
                        }
                    </div>
                </div>

                <table class="w-full h-12 text-sm text-left text-gray-400 mt-4">
                    <thead class="text-xs text-gray-500 bg-gray-100">
                        <tr>
                            <th scope="col" class="px-4 md:px-6 py-3">#</th>
                            <th scope="col" class="px-4 md:px-6 py-3">Contact data</th>
                            <th scope="col" class="px-4 md:px-6 py-3">Source</th>
                            <th scope="col" class="px-4 md:px-6 py-3">Date Added</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        <tr class="bg-white border-b">
                            <td class="px-4 md:px-6 py-4"></td>
                            <td class="px-4 md:px-6 py-4"></td>
                            <td class="px-4 md:px-6 py-4"></td>
                            <td class="px-4 md:px-6 py-4"></td>
                        </tr>
                    </tbody> */}
                </table>

                <div className='flex justify-start items-center gap-3 h-12 w-full mx-auto bg-gray-100 rounded-md px-4 mb-4 mt-4 '>
                    <div className='w-6 h-6 flex justify-center items-center bg-gray-300 font-bold rounded-full'><span className='text-white p-1'>!</span></div>
                    <p className='text-sm'>You don't have any sign ups or subscribers yet…</p>
                </div>
            </div>
        </section>
    );
};

export default Signups;