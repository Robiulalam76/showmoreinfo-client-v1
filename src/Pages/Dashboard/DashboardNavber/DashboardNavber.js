import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownCountries from '../../../components/dropdowns/DropdownCountries';
import logo from '../../../assets/logo/logo.png'
import UserNameChange from '../../../components/dropdowns/UserNameChange';
import bell from '../../../assets/icons/bell.svg'
import star from '../../../assets/icons/star.svg'
import { Buffer } from "buffer";
import avatar from '../../../assets/avatars/user-avatar.png'
import ProfileDropdown from '../../../components/dropdowns/ProfileDropdown';
import Notification from '../../../components/dropdowns/Notification';
import { AuthContext } from '../../../ContextAPI/AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLanguage } from '../../../Slices/navberSlice';

const DashboardNavber = () => {
    const { selectedLanguage, showLanguage } = useSelector((state) => state.navberSlice)
    const dispatch = useDispatch()

    const { userData } = useContext(AuthContext)
    const [viewProfile, setViewProfile] = useState(false)
    const [viewBreadCramp, setViewBreadCramp] = useState(false)
    const [viewNotification, setViewNotification] = useState(false)

    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setViewBreadCramp(false);
                setViewNotification(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <nav ref={dropdownRef} className='pt-10 pb-4 text-white cursor-pointer max-w-[1440px] mx-auto px-4 md:px-12'>

            <div className='flex justify-between lg:gap-8 items-center text-[18px]'>
                <Link to='/' className='flex items-center gap-2'>
                    <img className='w-6 inline' src={logo} alt="" />
                    <h1 className='inline-block font-bold md:text-2xl text-blue-800 duration-300 text-md'>ShowMore.info</h1>
                </Link>

                <div className='hidden lg:block flex-grow lg:flex justify-between items-center bg-[#EFF6FF] px-6 rounded-[50px] h-12 w-80'>
                    <div className='flex items-center'>
                        <h1 className='text-gray-500 text-[16px]'>ShowMore.info/</h1>
                        <Link className='underline text-blue-900 text-[16px]'
                            target='_blank'
                            to={`/${userData?.username}`}>
                            {userData?.username && userData?.username}
                        </Link>
                    </div>

                    {/* <div className='relative'>
                        <svg onClick={() => setViewBreadCramp(!viewBreadCramp)} className='w-6' xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 56 50"><path d="M33.128 41.786v-6.243h22.873v6.243H33.128zM46.934 8.2h9.067v6.243h-9.067V8.2zM30.758 22.645c-5.122 0-9.599-3.357-10.997-8.202H-.009V8.2h19.77c1.398-4.845 5.875-8.202 10.997-8.202 6.307 0 11.436 5.079 11.436 11.324 0 6.244-5.129 11.323-11.436 11.323zm0-16.405c-2.829 0-5.133 2.28-5.133 5.082 0 2.8 2.304 5.081 5.133 5.081 2.828 0 5.131-2.281 5.131-5.081 0-2.802-2.303-5.082-5.131-5.082zM16.95 27.339c6.307 0 11.437 5.08 11.437 11.326 0 6.245-5.13 11.323-11.437 11.323-5.12 0-9.599-3.356-10.997-8.202H-.009v-6.243h5.962c1.398-4.846 5.877-8.204 10.997-8.204zm0 16.407c2.829 0 5.132-2.281 5.132-5.081 0-2.802-2.303-5.082-5.132-5.082-2.829 0-5.132 2.28-5.132 5.082 0 2.8 2.303 5.081 5.132 5.081z" fill="#878CAC"></path></svg>

                        {
                            viewBreadCramp && <UserNameChange />
                        }
                    </div> */}
                </div>

                <div className='flex justify-between items-center gap-6'>
                    {/* -----------bell icon start----------- */}
                    {/* <div className='flex justify-between items-center gap-3 md:gap-12 text-[18px]'>

                        <div className='relative inline-block'>
                            <img onClick={() => setViewNotification(!viewNotification)} className='w-5' src={bell} alt="" />
                            {
                                viewNotification && <Notification />
                            }
                        </div>
                    </div> */}
                    {/* -----------bell icon end----------- */}

                    {/* <Link to='/billing/subscription' className='hidden lg:block lg:flex justify-between gap-4 items-center bg-[#393AA7] h-10 px-4 rounded-[50px]'>
                        <div className='flex items-center gap-3'>
                            <img className='w-6' src={star} alt="" />
                            <h1 className='text-white text-sm'>Unlock PRO</h1>
                        </div>
                    </Link> */}

                    {/* -----------language dropdown----------- */}
                    {/* <div className='flex justify-between items-center gap-3 md:gap-12 text-[18px]'>

                        <div className='relative inline-block'>
                            <img onClick={() => dispatch(setShowLanguage(!showLanguage))} className='w-8' src={selectedLanguage.img} alt="" />
                            {
                                showLanguage && <DropdownCountries />
                            }
                        </div>
                    </div> */}
                    {/* -----------language dropdown----------- */}

                    <div className='relative'>
                        <img onClick={() => setViewProfile(!viewProfile)} className='rounded-full w-12 h-12'
                            src={`${userData?.image ? userData?.image : avatar}`} alt="" />
                        {
                            viewProfile && <ProfileDropdown setViewProfile={setViewProfile} />
                        }
                    </div>
                </div>
            </div>

            {/* ------------only small device show------------ */}
            <div className='lg:hidden mt-4 w-full flex justify-between items-center bg-[#EFF6FF] px-6 rounded-[50px] h-12'>
                <div className='flex items-center'>
                    <h1 className='text-gray-500 text-[16px]'>ShowMore.info/</h1>
                    <Link className='underline text-blue-900 text-[16px]' target='_blank'
                        to={`/${userData?.username}`}>
                        {userData?.username && userData?.username}
                    </Link>
                </div>
                {/* <div className='relative' onClick={() => setViewBreadCramp(!viewBreadCramp)}>
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 56 50"><path d="M33.128 41.786v-6.243h22.873v6.243H33.128zM46.934 8.2h9.067v6.243h-9.067V8.2zM30.758 22.645c-5.122 0-9.599-3.357-10.997-8.202H-.009V8.2h19.77c1.398-4.845 5.875-8.202 10.997-8.202 6.307 0 11.436 5.079 11.436 11.324 0 6.244-5.129 11.323-11.436 11.323zm0-16.405c-2.829 0-5.133 2.28-5.133 5.082 0 2.8 2.304 5.081 5.133 5.081 2.828 0 5.131-2.281 5.131-5.081 0-2.802-2.303-5.082-5.131-5.082zM16.95 27.339c6.307 0 11.437 5.08 11.437 11.326 0 6.245-5.13 11.323-11.437 11.323-5.12 0-9.599-3.356-10.997-8.202H-.009v-6.243h5.962c1.398-4.846 5.877-8.204 10.997-8.204zm0 16.407c2.829 0 5.132-2.281 5.132-5.081 0-2.802-2.303-5.082-5.132-5.082-2.829 0-5.132 2.28-5.132 5.082 0 2.8 2.303 5.081 5.132 5.081z" fill="#878CAC"></path></svg>

                    {
                        viewBreadCramp && <UserNameChange />
                    }
                </div> */}
            </div>
        </nav>
    );
};

export default DashboardNavber;