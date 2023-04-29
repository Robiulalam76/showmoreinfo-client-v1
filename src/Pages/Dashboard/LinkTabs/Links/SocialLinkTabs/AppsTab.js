import React, { useState } from 'react';
import FastLinkProModal from '../../../../../components/Modals/CustomizeLinkModals/FastLinkProModal';
import ProButton from '../../../../../components/Buttons/ProButton';

const AppsTab = () => {
    const [addIosAppLink, setAddIosAppLink] = useState('')
    const [addAndriodAppLink, setAddAndriodAppLink] = useState('')
    const [openModalForIos, setOpenModalForIos] = useState(false)
    const [openModalForAndriod, setOpenModalForAndriod] = useState(false)
    // console.log(addIosAppLink);

    const closeModal = () => {
        setOpenModalForIos(false)
        setOpenModalForAndriod(false)
    }

    const handleAddIosAppLink = (e) => {
        e.preventDefault()
        const iosAppLink = e.target.iosAppLink.value
    }
    const handleAddAndriodAppLink = (e) => {
        e.preventDefault()
        const andriodAppLink = e.target.andriodAppLink.value
    }

    return (
        <section className='min-h-screen'>
            <div className='lg:max-w-[1180px] mx-auto'>
                <div className='flex items-center gap-2'>
                    <h1 className='font-semibold text-[#393AA7]'>MOBILE APP LINKS</h1>
                    <ProButton />
                </div>

                <div className='grid grid-cols-1 gap-3 border border-[#393AA7] rounded-md p-5'>
                    <div>
                        <form onSubmit={handleAddIosAppLink}
                            className='relative flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <input onChange={(e) => setAddIosAppLink(e.target.value)} className='flex-grow w-full h-10 border-none bg-gray-200 focus:outline-none px-6 rounded-3xl' type="text" />
                            {!addIosAppLink && <p className='md:hidden text-sm text-red-600'>Please enter a valid URL</p>}

                            <button onClick={() => setOpenModalForIos(!openModalForIos)}
                                className='relative w-full md:w-72 h-10 bg-[#a5a7fd] rounded-[50px] flex justify-center items-center gap-2' name='iosAppLink' type="submit">
                                <img className='w-5' src="https://cdn-f.heylink.me/static/media/ic_apple_icon.1c65b1a9.svg" alt="" />
                                <h1 className='text-white'>Add ios App Link</h1>

                                <div className='absolute top-1 flex justify-center items-center w-8 h-8 rounded-full bg-white'>
                                    <img className='p-1 w-6' src="https://cdn-f.heylink.me/static/media/lock.676efdd8.svg" alt="" />
                                </div>
                            </button>
                            {
                                openModalForIos && <FastLinkProModal closeModal={closeModal} />
                            }
                        </form>
                        {!addIosAppLink && <p className='hidden md:block text-sm text-red-600'>Please enter a valid URL</p>}
                    </div>


                    <div>
                        <form onSubmit={handleAddAndriodAppLink}
                            className='relative flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <input onChange={(e) => setAddAndriodAppLink(e.target.value)} className='flex-grow w-full h-10 border-none bg-gray-200 focus:outline-none px-6 rounded-3xl' type="text" />
                            {!addIosAppLink && <p className='md:hidden text-sm text-red-600'>Please enter a valid URL</p>}

                            <button onClick={() => setOpenModalForAndriod(!openModalForAndriod)}
                                className='relative w-full md:w-72 h-10 bg-[#a5a7fd] rounded-[50px] flex justify-center items-center gap-2' name='andriodAppLink' type="submit">
                                <img className='w-5' src="https://cdn-f.heylink.me/static/media/ic_android_icon.fef7af57.svg" alt="" />
                                <h1 className='text-white'>Add Andriod App Link</h1>

                                <div className='absolute top-1 flex justify-center items-center w-8 h-8 rounded-full bg-white'>
                                    <img className='p-1 w-6' src="https://cdn-f.heylink.me/static/media/lock.676efdd8.svg" alt="" />
                                </div>
                            </button>
                            {
                                openModalForAndriod && <FastLinkProModal closeModal={closeModal} />
                            }
                        </form>
                        {!addAndriodAppLink && <p className='hidden md:block text-sm text-red-600'>Please enter a valid URL</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppsTab;