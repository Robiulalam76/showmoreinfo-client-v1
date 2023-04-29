import React, { useEffect, useRef, useState } from 'react';
import empty from '../../../../../assets/icons/crypto-tab-icons/empty.svg'
import arrowRight from '../../../../../assets/icons/crypto-tab-icons/arrow-right.svg'
import arrowDown from '../../../../../assets/icons/crypto-tab-icons/arrow-down.svg'
import { Link } from 'react-router-dom';

const cryptoWallets = [
    {
        id: '1',
        name: 'Crypto.com Coin',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
    {
        id: '2',
        name: 'Crypto.com Coin',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        demoAddress: 'ijrofakmnxkcjhsudwdakfj0d',
        img: 'https://cdn-icons-png.flaticon.com/128/7280/7280229.png'
    },
]
const CryptoTab = () => {
    const [selectedSocial, setSelectedSocial] = useState('Select Popular Crypto Currency')
    const [demoAddress, setDemoAddress] = useState('dfissssssfijdfjfwwjgije')
    const [socialImg, setSocialImg] = useState('https://cdn-icons-png.flaticon.com/128/7280/7280229.png')
    const [search, setSearch] = useState(false)
    const [allSocialLinks, setAllSocialLiks] = useState([])
    const [inputError, setInputError] = useState('')
    const [expan, setExpan] = useState(false)
    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setSearch(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    const handleCryptoAddress = (demoAd, name, img) => {
        // console.log(demoAd, name, img);
        setSelectedSocial(name)
        setDemoAddress(demoAd)
        setSocialImg(img)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const cryptoAddress = event.target.cryptoAddress.value
        setAllSocialLiks([...allSocialLinks, cryptoAddress])
        event.target.reset()
        setInputError('')
    }
    return (
        <section className='min-h-screen'>
            <div className='px-2 w-full md:w-[680px] mx-auto'>
                <form onSubmit={handleSubmit}
                    className='grid grid-cols-1 gap-6'>
                    <div className='relative'>
                        <div onClick={() => setSearch(!search)}
                            className='relative border-b flex justify-between items-center px-4 h-14 w-full bg-white'>
                            <div className='flex items-center gap-4'>
                                <img className='w-6' src={socialImg} alt="" />
                                <h1>{selectedSocial}</h1>
                            </div>
                            <div>
                                <img className='w-3' src={arrowDown} alt="" />
                            </div>
                        </div>
                        {
                            search && <div ref={dropdownRef}
                                className="w-full top-12 border-x border-b right-0 cursor-pointer absolute z-50 border bg-gray-50 shadow">
                                <div className='p-3'>
                                    <div className='w-full h-12 border border-blue-600 bg-gray-200'>
                                        <input className='w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none' type="text" placeholder='Start typing or select...' />
                                    </div>
                                </div>
                                <div className='w-full h-44 border-t overflow-y-auto bg-white'>
                                    {
                                        cryptoWallets && cryptoWallets.map(cw => <div
                                            onClick={() => handleCryptoAddress(cw.demoAddress, cw.name, cw.img)}
                                            className='h-8 w-full flex items-center gap-4 mb-2 hover:bg-blue-200 px-2'>
                                            <img className='w-6' src={cw.img} alt="" />
                                            <h1 className='text-gray-900'>{cw.name}</h1>
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className='rounded-[50px] h-14 w-full bg-gray-200'>
                        <input onChange={e => setInputError(e.target.value)}
                            className='w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none' name='cryptoAddress' type="text" placeholder={demoAddress} />
                    </div>
                    {
                        inputError ? <div className='flex justify-center items-center gap-1 px-4 rounded-[50px] h-14 w-56 mx-auto md:w-full bg-blue-600'>
                            <button className='text-white font-semibold'>+ Add</button>
                            <button className='text-white font-semibold'>{selectedSocial} Address</button>
                        </div>
                            :
                            <div className='flex justify-center items-center gap-1 px-4 rounded-[50px] h-14 w-56 mx-auto md:w-full bg-[#9FC1EA]'>
                                <button disabled className='text-white font-semibold'>+ Add</button>
                                <button disabled className='text-white font-semibold'>{selectedSocial} Address</button>
                            </div>
                    }
                </form>
            </div>

            <div className='flex justify-center items-center my-6'>
                <img className='md:max-w-[400px]' src={empty} alt="" />
            </div>
            <h1 className='text-gray-600 text-sm text-center py-6'>You haven't added any Crypto Links yet</h1>

            <div className='py-8'>
                <div className='bg-gray-200 rounded-md px-3 py-2 h-fit'>
                    <div onClick={() => setExpan(!expan)} className='flex justify-between items-center h-12  w-full '>
                        <h1 className='font-bold text-gray-900'>Can't find the required Crypto?</h1>
                        {
                            expan ? <img className='w-4' src={arrowDown} alt="" />
                                :
                                <img className='w-3' src={arrowRight} alt="" />
                        }
                    </div>
                    {
                        expan && <Link to='/' className='text-blue-600 underline py-2'>Send us a request and we will do our best to add it.</Link>
                    }
                </div>
            </div>
        </section>
    );
};

export default CryptoTab;