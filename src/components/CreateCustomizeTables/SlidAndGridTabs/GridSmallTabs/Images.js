import React, { useState } from 'react';
import downArrow from '../../../../assets/icons/down-arrow.svg'
import rightArrow from '../../../../assets/icons/right-arrow.svg'
import deletes from '../../../../assets/icons/link-customize-icons/delete.svg'
import DeleteModal from '../../../Modals/CommonModals/DeleteModal';

const Images = () => {
    const [viewAddImageLink, setViewAddImageLink] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [imageLinkURL, setImageLinkURL] = useState('')

    console.log(imageLinkURL)
    return (
        <section className='mt-4'>
            <h1 className='text-black font-semibold mb-2'>Images <span>(1)</span></h1>
            <div onClick={() => setViewAddImageLink(!viewAddImageLink)}
                className='w-full h-14 flex justify-between items-center px-4 hover:bg-gray-100 bg-white'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 h-12' src="https://cdn-b.heylink.me/media/sliders/images/8d123d3c98dc4f6da28c74084c3e47a0.png" alt="" />
                    <h1>Add Image Link</h1>
                </div>
                {
                    viewAddImageLink ? <img className='w-5' src={downArrow} alt="" />
                        :
                        <img className='w-5' src={rightArrow} alt="" />
                }
            </div>

            {
                viewAddImageLink && <div className='w-full'>
                    <div className='w-full mb-4'>
                        <input onChange={(e) => setImageLinkURL(e.target.value)} className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageLinkURL' id='imageLinkURL' placeholder='Image Link URL' />
                        <label className='text-gray-500' htmlFor="imageLinkURL">Link URL</label>
                    </div>

                    <div className='relative cursor-pointer w-fit mx-auto'>
                        <div onClick={() => setDeleteModal(!deleteModal)} className='hidden md:block md:flex flex-col justify-center items-center gap-2'>
                            <img className='w-4' src={deletes} alt="" />
                            <span className='text-sm text-gray-500'>Delete</span>
                        </div>
                        {
                            deleteModal && <DeleteModal closeModal={setDeleteModal}></DeleteModal>
                        }
                    </div>
                </div>
            }
        </section>
    );
};

export default Images;