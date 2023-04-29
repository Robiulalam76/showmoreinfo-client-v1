import React, { useState } from 'react';
import Apearance from '../SliderSmallTabs/Apearance';
import DescriptionAndLink from '../SliderSmallTabs/DescriptionAndLink';
import ShapAndSize from '../SliderSmallTabs/ShapAndSize';

const SlidTab = () => {

    // description Tab data
    const [sliderTabView, setSliderTabView] = useState(1);
    const [forSlider, setForSlider] = useState(false)
    const [descriptionData, setDescriptionData] = useState(null)

    // shap and size tab data
    const [heightWidth, setHeightWidth] = useState('Landscape 4:3 (Width:Height)')
    const [advanceImagesAutomatic, setAdvanceImagesAutomatic] = useState(false)

    // appearanc tab data
    const [titleDescriptionColor, setTitleDescriptionColor] = useState('#000008')
    const [linkAndTextColor, setLinkAndTextColor] = useState('#000008')
    const [buttonAndBackgroundColor, setButtonAndBackgroundColor] = useState('#000008')

    const handleSubmitGalleryData = () => {
        const slidTabData = {
            description_and_link: {
                for_slider: forSlider,
                description_title: descriptionData?.descriptionTitle,
                description_text: descriptionData?.descriptionText,
                image_slider_link_text: descriptionData?.imageSliderLinkText,
                image_slider_link_URL: descriptionData?.imageSliderLinkURL,
            },

            shap_and_size: {
                advance_images_automatic: advanceImagesAutomatic,
                shap_and_size: heightWidth,
            },
            appearance: {
                title_description_color: titleDescriptionColor,
                link_and_text_color: linkAndTextColor,
                button_and_background_color: buttonAndBackgroundColor
            }
        }

        console.log(slidTabData);
    }

    return (
        <>
            <div className='cursor-pointer mt-4 flex items-center flex-wrap md:flex-nowrap gap-6 w-full'>
                <div onClick={() => setSliderTabView(1)}
                    className={`border-b-2 border-white ${sliderTabView === 1 && 'border-green-500'}`}>
                    <h1 className='mb-2 text-black text-sm'>Description & Link</h1>
                </div>
                <div onClick={() => setSliderTabView(2)}
                    className={`border-b-2 border-white ${sliderTabView === 2 && 'border-green-500'}`}>
                    <h1 className='mb-2 text-black text-sm'>Shap & Size</h1>
                </div>
                <div onClick={() => setSliderTabView(3)}
                    className={`border-b-2 border-white ${sliderTabView === 3 && 'border-green-500'}`}>
                    <h1 className='mb-2 text-black text-sm'>Appearance</h1>
                </div>
            </div>

            <hr className='border-gray-200' />

            <div>
                {
                    sliderTabView === 1 && <DescriptionAndLink
                        initialForSlider={forSlider}
                        getForSlider={setForSlider}
                        getDescriptionData={setDescriptionData}
                    />
                }
                {
                    sliderTabView === 2 && <ShapAndSize
                        initialAdvanceImagesAutomatic={advanceImagesAutomatic}
                        getAdvanceImagesAutomatic={setAdvanceImagesAutomatic}
                        initialHeightWidth={heightWidth}
                        getHeightWidth={setHeightWidth}
                    />
                }
                {
                    sliderTabView === 3 && <Apearance
                        initialTitleDescriptionColor={titleDescriptionColor}
                        getTitleDescriptionColor={setTitleDescriptionColor}

                        initialLinkAndTextColor={linkAndTextColor}
                        getLinkAndTextColor={setLinkAndTextColor}

                        initialButtonAndBackgroundColor={buttonAndBackgroundColor}
                        getButtonAndBackgroundColor={setButtonAndBackgroundColor}
                    />
                }
            </div>


            <button onClick={() => handleSubmitGalleryData()} className='w-44 h-10 bg-blue-600 rounded text-white flex justify-center items-center mt-3'>
                <h1>Save</h1>
            </button>

            {/* <button disabled className='w-44 h-10 bg-gray-400 rounded text-white flex justify-center items-center mt-3'>
                        <h1>Save</h1>
                    </button> */}

        </>
    );
};

export default SlidTab;