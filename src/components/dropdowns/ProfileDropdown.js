import React, { useContext, useEffect, useRef } from 'react';
import appearance from '../../assets/icons/appearance.svg'
import security from '../../assets/icons/security.svg'
import billing from '../../assets/icons/billing.svg'
import logout from '../../assets/icons/logout.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider/AuthProvider';

const ProfileDropdown = ({ setViewProfile }) => {
    const { userData, setUserData } = useContext(AuthContext)


    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('HeyLinkToken')

        setUserData({})
        setTimeout(() => {
            navigate('/login')
        }, [300])




    }

    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setViewProfile(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div ref={dropdownRef} class="absolute right-0 z-10 mt-2 w-60 rounded-md bg-gray-50 shadow shadow-gray-400">
            <div className='p-3'>
                <div className='flex flex-col items-center gap-0 py-4'>
                    <span className='text-center text-gray-600 text-[16px] font-bold'>
                        {userData?.username && userData?.username}</span>
                    <span className='text-center text-gray-600 text-sm '>{userData?.email && userData?.email}</span>
                </div>
                <hr className='mb-2 border-gray-400' />
                <Link to='/dashboard/appearance' onClick={() => setViewProfile(false)}
                    className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={appearance} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Appearance</h1>
                </Link>
                <Link to="/password-security" className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={security} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Password & Security</h1>
                </Link>
                {/* <div className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={billing} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Billing & Subscription</h1>
                </div> */}
                <div onClick={() => handleLogout()} className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={logout} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Log out</h1>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;