import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DefaultSwitch from '../../../ToggleSwitch/DefaultSwitch';

const DescriptionAndLink = ({ initialForSlider, getForSlider, getDescriptionData }) => {
    const { register, handleSubmit } = useForm();
    const [addLinkToggle, setAddLinkToggle] = useState(false);
    const [addDesToggle, setAddDesToggle] = useState(false);

    const handleSendData = (data) => {
        getDescriptionData(data)
    }

    return (
        <form onChange={handleSubmit(handleSendData)}>
            <button onClick={() => getForSlider(!initialForSlider)} className='flex items-center pl-6 mt-6 text-gray-600 cursor-pointer gap-6 h-16 w-full bg-blue-200 rounded-md'>
                <input checked={initialForSlider} type="radio" name="forSlider" id="forSlider" />
                <span className='cursor-pointer'>For Slider</span>
            </button>


            <div className='flex justify-between items-center mt-6'>
                <h1 className='text-gray-600 font-bold'>Add Description</h1>
                <div className="flex items-center gap-2">
                    <span className='text-gray-500 text-sm font-semibold'>Off</span>
                    <DefaultSwitch initialToggle={addDesToggle} getToggle={setAddDesToggle} />
                    <span className='text-gray-500 text-sm font-semibold'>On</span>
                </div>
            </div>

            {
                addDesToggle && <div className='w-full'>
                    <div className='w-full mb-4'>
                        <input {...register("descriptionTitle")}
                            className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='descriptionTitle' id='descriptionTitle' placeholder='Image Slider Title' />
                        <label className='text-gray-500' htmlFor="descriptionTitle">Title</label>
                    </div>
                    <div className='w-full mb-4'>
                        <input {...register("descriptionText")}
                            className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='descriptionText' id='descriptionText' placeholder='Image Slider Description' />
                        <label className='text-gray-500' htmlFor="descriptionText">Description</label>
                    </div>
                </div>
            }




            <div className='flex justify-between items-center mt-4'>
                <h1 className='text-gray-600 font-bold'>Add Link</h1>
                <div className="flex items-center gap-2">
                    <span className='text-gray-500 text-sm font-semibold'>Off</span>
                    <DefaultSwitch initialToggle={addLinkToggle} getToggle={setAddLinkToggle} />
                    <span className='text-gray-500 text-sm font-semibold'>On</span>
                </div>
            </div>


            {
                addLinkToggle && <div className='w-full'>
                    <div className='w-full mb-4'>
                        <input {...register("imageSliderLinkText")}
                            className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageSliderLinkText' id='imageSliderLinkText' placeholder='Image Slider Link Text' />
                        <label className='text-gray-500' htmlFor="imageSliderLinkText">Link Text</label>
                    </div>
                    <div className='w-full mb-4'>
                        <input {...register("imageSliderLinkURL")}
                            className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageSliderLinkURL' id='imageSliderLinkURL' placeholder='Image Slider Link URL' />
                        <label className='text-gray-500' htmlFor="imageSliderLinkURL">Link URL</label>
                    </div>
                </div>
            }

            <div className='flex items-center pl-6 mt-6 text-gray-600 cursor-pointer gap-6 h-16 w-full bg-gray-200 rounded-md'>
                <input disabled type="radio" name="forEveryImage" id="forEveryImage" />
                <label disabled className='cursor-pointer' htmlFor="forEveryImage" id='forEveryImage'>For Every Image</label>
            </div>
        </form>
    );
};

export default DescriptionAndLink;