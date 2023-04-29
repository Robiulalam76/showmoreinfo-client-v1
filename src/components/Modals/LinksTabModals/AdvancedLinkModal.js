import React, { useEffect, useRef } from 'react';
import header from '../../../assets/icons/advanced-link-icons/header.svg'

const AdvancedLinkModal = ({ closeModal }) => {

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdownRef} className="z-50 absolute top-4 shadow rounded-md">
            <div className="md:w-[800px] bg-white p-6 flex justify-center">
                <div>
                    <div className='grid md:grid-cols-2 gap-8'>

                        {/* -------------SHARE YOUR CONTENT------------- */}
                        <div>
                            <h1 className='text-gray-600 font-bold'>SHARE YOUR CONTENT</h1>

                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Header</h1>
                                    <p className='text-gray-600 text-sm'>Clearly group your links</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Phone Number</h1>
                                    <p className='text-gray-600 text-sm'>Add call button with your phone number</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Music Link</h1>
                                    <p className='text-gray-600 text-sm'>Embed or add link to your music on various platforms: Apple Music, iTunes, Spotify, Deezer or YouTube</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Books & Publications</h1>
                                    <p className='text-gray-600 text-sm'>Promote books on your HeyLink.me</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Header</h1>
                                    <p className='text-gray-600 text-sm'>Clearly group your links</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Phone Number</h1>
                                    <p className='text-gray-600 text-sm'>Add call button with your phone number</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Music Link</h1>
                                    <p className='text-gray-600 text-sm'>Embed or add link to your music on various platforms: Apple Music, iTunes, Spotify, Deezer or YouTube</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Books & Publications</h1>
                                    <p className='text-gray-600 text-sm'>Promote books on your HeyLink.me</p>
                                </div>
                            </div>

                        </div>
                        {/* -------------SHARE YOUR CONTENT end------------- */}


                        {/* -------------MONETISE USING CRYPTO & COMMERCE start------------- */}
                        <div>
                            <h1 className='text-gray-600 font-bold'>MONETISE USING CRYPTO & COMMERCE</h1>

                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Header</h1>
                                    <p className='text-gray-600 text-sm'>Clearly group your links</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Phone Number</h1>
                                    <p className='text-gray-600 text-sm'>Add call button with your phone number</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Music Link</h1>
                                    <p className='text-gray-600 text-sm'>Embed or add link to your music on various platforms: Apple Music, iTunes, Spotify, Deezer or YouTube</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Books & Publications</h1>
                                    <p className='text-gray-600 text-sm'>Promote books on your HeyLink.me</p>
                                </div>
                            </div>
                            {/* -----------MONETISE USING CRYPTO & COMMERCE----------- */}

                            {/* -----------GROW YOUR AUDIENCE start----------- */}
                            <h1 className='text-gray-600 font-bold mt-6'>GROW YOUR AUDIENCE</h1>

                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Header</h1>
                                    <p className='text-gray-600 text-sm'>Clearly group your links</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Phone Number</h1>
                                    <p className='text-gray-600 text-sm'>Add call button with your phone number</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img className='w-10' src={header} alt="" />
                                <div>
                                    <h1 className='text-gray-900 font-bold'>Add Music Link</h1>
                                    <p className='text-gray-600 text-sm'>Embed or add link to your music on various platforms: Apple Music, iTunes, Spotify, Deezer or YouTube</p>
                                </div>
                            </div>

                            {/* -----------GROW YOUR AUDIENCE end----------- */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedLinkModal;