import React from 'react';
import img1 from '../../../assets/icons/drawer-left-arrow.png'
import img2 from '../../../assets/icons/drawer-right-arrow.png'

const PreviewDrawer = ({ preview, setPreview }) => {
    return (
        <div onClick={() => setPreview(!preview)} className='hidden lg:block cursor-pointer'>
            <div className='absolute -right-3 top-56'>
                {
                    preview ? <img className='w-8' src={img1} alt="" />
                        :
                        <img className='w-8' src={img2} alt="" />
                }
            </div>
        </div>

    );
};

export default PreviewDrawer;