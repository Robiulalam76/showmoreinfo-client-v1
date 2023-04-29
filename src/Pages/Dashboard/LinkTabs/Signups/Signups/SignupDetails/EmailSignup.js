import React, { useState } from 'react';
import ProButton from '../../../../../../components/Buttons/ProButton';
import SmallIcon from '../../../../../../components/Buttons/SmallIcon';
import DefaultSwitch from '../../../../../../components/ToggleSwitch/DefaultSwitch';
import ProToggleSwitch from '../../../../../../components/ToggleSwitch/ProToggleSwitch';

const EmailSignup = () => {
    const [buttonText, setButtonText] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [termsCondition, setTermsCondition] = useState(false)
    const [appearanceToggle, setAppearanceToggle] = useState(false)

    return (
        <div className='mt-4'>
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-black font-bold text-left'>Display shortcut on scroll</h1>
                    <SmallIcon>?</SmallIcon>
                    <ProButton />
                </div>
                <ProToggleSwitch />
            </div>

            <div className='mb-4'>
                <h1 className='text-black font-bold text-left mb-2'>Button Text & Success Message</h1>

                <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
                    <div>
                        <label className='text-sm text-gray-500' htmlFor="buttonText">Button Text</label>
                        <input onChange={(e) => setButtonText(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none' type="text" name='buttonText' id='buttonText' defaultValue='Click to Subscribe' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-500' htmlFor="successMessage">Success Message</label>
                        <input onChange={(e) => setSuccessMessage(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none' type="text" name='successMessage' id='successMessage' defaultValue='Thanks for Subscribing!' />
                    </div>
                </div>

                <button className='mt-4 w-20 h-8 flex justify-center items-center text-white bg-blue-600 rounded-md font-semibold' type='submit' ><span>SAVE</span></button>
            </div>

            <div className='flex justify-between items-center w-full h-full mb-4'>
                <h1 className='text-black font-bold text-left'>Terms & Conditions (optional)</h1>
                <div className="flex items-center gap-2">
                    <span className='text-gray-500 text-sm font-semibold'>OFF</span>
                    <DefaultSwitch initialToggle={termsCondition} getToggle={setTermsCondition} />
                    <span className='text-gray-500 text-sm font-semibold'>ON</span>
                </div>
            </div>


            <div className='flex justify-between items-center w-full h-full mb-4'>
                <h1 className='text-black font-bold text-left'>Appearance</h1>
                <div className="flex items-center gap-2">
                    <span className='text-gray-500 text-sm font-semibold'>OFF</span>
                    <DefaultSwitch initialToggle={appearanceToggle} getToggle={setAppearanceToggle} />
                    <span className='text-gray-500 text-sm font-semibold'>ON</span>
                </div>
            </div>

        </div>
    );
};

export default EmailSignup;