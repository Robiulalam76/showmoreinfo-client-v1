import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import down from '../../../../../assets/icons/down.png'
import { setOpenTab } from '../../../../../Slices/controllerSlice';

const countries = ['Bangladesh', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola']

const Subscription = () => {
    const [proPkg, setProPkg] = useState(true)
    const [selectedCountry, setSelectedCountry] = useState('Bangladesh')
    const [showCountries, setShowCountries] = useState(false)
    const [couponCode, setCouponCode] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOpenTab(false))
    }, [])

    const handleApply = (e) => {
        e.preventDefault()
        e.target.reset()
        setCouponCode('')
    }
    console.log(selectedCountry)
    const handleSetOption = (option) => {
        setSelectedCountry(option)
        setShowCountries(false)
    }
    return (
        <div className='min-h-screen my-6'>
            <div className='max-w-[500px] mx-auto'>
                <h1 className='text-gray-900 font-bold text-center text-3xl mb-4 mt-4'>Your subscription</h1>
                <p className='w-96 mx-auto text-center text-sm text-gray-500'>You're nearly there, complete the fields below to get access to the full suite of HeyLink.me PRO features.</p>

                <div className='py-4 cursor-pointer mt-6'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-2xl font-bold text-gray-700 inline-block'>
                                {proPkg ? '৳523 BDT' : '৳629 BDT'}
                            </h1>
                            <span className='text-gray-800 font-semibold text-md'> / month</span>
                        </div>

                        <div className='relative grid grid-cols-2 gap-2 items-center px-1 h-8 w-36 rounded-[50px] bg-gray-200'>
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
                            <div className='absolute left-0 -top-4 h-4 w-fit px-2 flex justify-center items-center bg-orange-500 rounded-[50px]'>
                                <span className='text-white text-sm'>SAVE 17%</span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3'>
                        {
                            proPkg ? <h1 className='text-gray-500 text-sm'>
                                <small className='line-through mr-2 text-sm'>৳7544 BDT  </small>
                                <small>৳6265 BDT / year: save 17% on the yearly</small>
                            </h1>
                                :
                                <small className='text-gray-500 text-md font-semibold block'>Save 17% on the yearly plan</small>
                        }
                    </div>
                </div>

                <div className='relative flex-grow'>
                    <div onClick={() => setShowCountries(!showCountries)}
                        className={`relative flex justify-between items-center px-4 w-full h-12 text-black
                    ${showCountries ? 'border-y border-x rounded-t rounded-x' : 'border rounded-md'}`}>
                        <input className='cursor-pointer border-none focus:outline-none w-full h-full'
                            value={selectedCountry} readOnly type="text" />
                        <img className='w-3 absolute right-3 top-4' src={down} alt="" />
                    </div>

                    {
                        showCountries && <div className={`absolute w-full bg-white h-56 overflow-y-auto 
                        ${showCountries && 'border-x border-b rounded-x rounded-b'}`} >
                            {
                                countries.map(option => <div onClick={() => handleSetOption(option)}
                                    className='cursor-pointer w-full h-10 hover:bg-gray-200 flex justify-start items-center px-4' >
                                    <h1 className={`${selectedCountry === option && 'font-bold'}`}>{option}</h1>
                                </div>)
                            }
                        </div>
                    }
                </div>

                <form onSubmit={handleApply} className='flex justify-between items-center w-full h-12 rounded-md border mt-4'>
                    <input onChange={(e) => setCouponCode(e.target.value)} className='px-2 flex-grow border-none focus:outline-none w-full h-full' type="text" name='couponCode' />
                    {couponCode ? <button className='text-white w-24 h-8 flex justify-center items-center mr-3 rounded-md bg-blue-600' type="submit"><span>Apply</span></button>
                        :
                        <button disabled className=' text-white w-24 h-8 flex justify-center items-center mr-3 rounded-md bg-gray-300'><span>Apply</span></button>
                    }
                </form>
                <p className='text-sm text-gray-500 text-center mt-1'>You might have received a discount code. Please enter it above</p>

            </div>
        </div>
    );
};

export default Subscription;