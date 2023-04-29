import React from 'react';
import Navber from '../Shared/Navber/Navber';
import check from '../../assets/icons/check.svg'
import { useState } from 'react';
const PricingCards = () => {
    const [proPkg, setProPkg] = useState(true)
    const starter = [
        'Unlimited Links', 'Link Analytics', 'Instant Checkout', 'Ecommerce Store & Unlimited Products', 'Lead Generation',
        'Bio Link Templates', 'Menu, Locations', 'Unlimited Social & Music Links', 'Unlimited Crypto Wallets', '9.9% + 30c (transaction fees)'
    ]
    const proMonth = [
        'PRO Custom Branding', 'PRO Custom Domain', 'PRO Link Analytics & Pixels', 'PRO Themes, Avatars, Icons',
        'PRO Support', 'PRO Layout', 'PRO Description, Highlights', 'PRO Fonts, Backgrounds', 'PRO Signups, Messages',
        'PRO Crypto, NFT', 'PRO Commerce', 'PRO Menu, Locations', 'PRO Galleries', 'PRO 3.9% + 30c (transaction fees)'
    ]
    return (
        <section className='bg-[#393AA7] min-h-screen'>
            <Navber />
            <h1 className='font-bold text-white text-center text-3xl'>Simple & fair pricing</h1>

            <div className='cursor-pointer grid md:grid-cols-2 gap-6 items-center justify-center md:max-w-[500px] mx-auto min-h-screen mt-2 mb-6'>

                {/* ------------starter package------------ */}
                <div className='w-[340px] md:w-96 md:absolute md:hover:scale-125 md:hover:z-10 right-[48%] duration-300 bg-white py-16 px-6 rounded-3xl shadow-md shadow-gray-500'>
                    <h1 className='font-bold text-blue-600 text-md'>STARTER</h1>
                    <div className='mt-3'>
                        <h1 className='text-2xl font-bold text-gray-700 inline-block'>Free</h1><span className='text-gray-800 font-semibold text-md'> / forever</span>
                    </div>
                    <div className='my-8'>
                        {
                            starter.map(str => <div className='flex items-center gap-4'>
                                <img className='w-3' src={check} alt="" />
                                <h1 className='text-gray-500 text-sm font-semibold'>{str}</h1>
                            </div>)
                        }
                    </div>
                </div>

                {/* ------------pro packages //  Monthly and Yearly------------ */}
                <div className='w-[340px] md:w-96 md:absolute md:hover:scale-110 md:hover:z-10 left-[48%] duration-300 bg-white px-6 py-4 rounded-3xl shadow-md shadow-gray-500'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-blue-600 text-md'>PRO</h1>
                        <div className='relative grid grid-cols-2 gap-2 items-center px-1 h-8 w-36 rounded-[50px] bg-gray-300'>
                            <div onClick={() => setProPkg(true)}
                                className={`flex justify-center items-center h-6 rounded-[50px] 
                                ${proPkg && 'bg-white'}`}>
                                <small className='text-gray-600 font-semibold'>Yearly</small>
                            </div>
                            <div onClick={() => setProPkg(false)}
                                className={`flex justify-center items-center h-6 rounded-[50px] 
                                ${!proPkg && 'bg-white'}`}>
                                <small className='text-gray-600 font-semibold'>Monthly</small>
                            </div>

                            {/* badgets */}
                            <div className='absolute left-0 -top-6 h-6 w-12 flex justify-center items-center bg-orange-500 rounded-[50px]'>
                                <span className='text-white text-sm'>SAVE!</span>
                            </div>
                        </div>

                    </div>
                    <div className='mt-3'>
                        <h1 className='text-2xl font-bold text-gray-700 inline-block'>
                            {proPkg ? '৳523 BDT' : '৳629 BDT'}
                        </h1>
                        <span className='text-gray-800 font-semibold text-md'> / month</span>
                        {
                            proPkg ? <h1 className='text-gray-500 text-md font-semibold'>
                                <small className='line-through mr-2 text-xl'>৳7544 BDT  </small>
                                <small>৳6265 BDT / year: save 17% on the yearly</small>
                            </h1>
                                :
                                <small className='text-gray-500 text-md font-semibold block'>Save 17% on the yearly plan</small>
                        }

                    </div>
                    <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4 my-3'>
                        <div className=''>
                            {
                                proMonth.map(str => <div className='flex items-center gap-4'>
                                    <img className='w-3' src={check} alt="" />
                                    <h1 className='text-gray-500 text-sm font-semibold'>{str}</h1>
                                </div>)
                            }
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-28' src="https://cdn-f.heylink.me/static/img/ic_placeholder_pro_plan.gif" alt="" />
                        </div>
                    </div>
                    <div className='mt-3 h-10 w-40 mx-auto bg-[#239AE7] hover:bg-[#3B3DA8] flex justify-center items-center rounded-[50px]'>
                        <button className='text-white font-semibold'>GET PRO</button>
                    </div>
                </div>
            </div>
            <div className='py-3 flex justify-center items-center text-center gap-2 text-gray-400 text-sm md:text-xl'>
                <span>Powered by</span>
                <svg className='w-6 text-gray-400' xmlns="https://www.w3.org/2000/svg" viewBox="0 0 58 32"><path d="M41.889 30.999H3.222C1.442 30.999 0 29.612 0 27.9c0-1.713 1.442-3.1 3.222-3.1H29a15.135 15.135 0 01-2.9-6.199l-5.156-.001c-1.78 0-3.222-1.388-3.222-3.1 0-1.714 1.442-3.101 3.222-3.101 0 0 3.912-.006 5.157-.006A15.146 15.146 0 0128.99 6.21c-2.882-.011-16.101-.011-16.101-.011-1.781 0-3.223-1.387-3.223-3.1C9.666 1.387 11.108 0 12.889 0h29C50.787 0 58 6.939 58 15.5s-7.213 15.499-16.111 15.499zm0-24.8c-5.34 0-9.667 4.163-9.667 9.301 0 5.137 4.327 9.3 9.667 9.3 5.339 0 9.666-4.163 9.666-9.3 0-5.138-4.327-9.301-9.666-9.301z"></path></svg>
                <span>Persollo</span>
            </div>
        </section>
    );
};

export default PricingCards;