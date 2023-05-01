import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownCountries from '../../../components/dropdowns/DropdownCountries';
import avatar from '../../../assets/avatars/user-avatar.png'
import logo from '../../../assets/logo/logo.png'
import ServicesDropdown from '../../../components/dropdowns/ServicesDropdown';
import { AuthContext } from '../../../ContextAPI/AuthProvider/AuthProvider';
import ProfileDropdown from '../../../components/dropdowns/ProfileDropdown';
import { Buffer } from "buffer";

const Navber = () => {
    const { userData } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [viewServices, setViewServices] = useState(false)
    const [viewProfile, setViewProfile] = useState(false)

    // image convarte buffer
    const buff = Buffer.from(
        userData?.image?.data?.data ? userData?.image?.data?.data : avatar
    );
    const base64 = buff?.toString("base64");

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setDropdown(false);
                setViewServices(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <nav ref={dropdownRef} className='py-14 text-white cursor-pointer max-w-[1440px] mx-auto'>
            <section className='flex justify-between items-center md:gap-12 px-3 md:px-16'>
                <div className='md:flex justify-between items-center md:gap-12 text-[18px]'>
                    <Link to='/' className='flex items-center gap-2'>
                        <img className='w-6 inline' src={logo} alt="" />
                        <h1 className='inline-block font-bold md:text-2xl hover:text-sky-500 duration-300 text-md'>ShowMore.info</h1>
                    </Link>

                    {/* <Link to='/templates'>
                        <h1 className='hidden lg:block hover:text-sky-500 duration-300'>Free Templates</h1>
                    </Link> */}

                    {/* -----------services route click to view services dropdown----------- */}
                    {/* <div onClick={() => setViewServices(!viewServices)} className='relative'>
                        <h1 className='hidden lg:block hover:text-sky-500 duration-300'>Services & Help</h1>
                        {
                            viewServices && <ServicesDropdown />
                        }
                    </div> */}

                    {/* <Link to='/pricing'>
                        <h1 className='hidden lg:block hover:text-sky-500 duration-300'>Pricing</h1>
                    </Link> */}
                </div>

                {/* -----------language dropdown----------- */}
                <div className='flex justify-between items-center gap-3 md:gap-12 text-[18px]'>
                    {
                        userData?._id && <Link to='/dashboard'>
                            <h1 className='hover:text-sky-500 duration-300'>Dashboard</h1>
                        </Link>
                    }

                    {/* <div onClick={() => setDropdown(!dropdown)} className='relative inline-block'>
                        <img className='w-6 md:w-8' src="https://cdn-f.heylink.me/static/img/lang-flags/en.svg" alt="" />
                        {
                            dropdown && <DropdownCountries />
                        }
                    </div> */}


                    {
                        userData?._id && <div className='relative'>
                            <img onClick={() => setViewProfile(!viewProfile)} className='rounded-full w-10 h-10'
                                src={`${userData?.image ? userData?.image : avatar}`} alt="" />
                            {
                                viewProfile && <ProfileDropdown setViewProfile={setViewProfile} />
                            }
                        </div>
                    }

                    {/* only small device show */}
                    {
                        !userData?._id && <Link to='/signup' className='block lg:hidden bg-orange-500 hover:bg-sky-500 hover:text-white border-white hover:border-sky-500 py-1 px-2 rounded-[50px] duration-300 text-sm'>
                            <button>Start for free</button>
                        </Link>
                    }

                    {/* medium + device show */}
                    {
                        !userData?._id && <Link to='/signup' className='hidden lg:block border-2 border-white hover:border-sky-500 py-2 px-6 rounded-[50px] duration-300'>
                            <div className='flex justify-between items-center gap-4 font-semibold hover:text-sky-500'>
                                <svg className='hover:fill-sky-600' xmlns="https://www.w3.org/2000/svg" width="8" height="10"><path d="M6.745 5.582L2.403 9.8a.838.838 0 01-1.083.053A.838.838 0 01.237 9.8a.772.772 0 010-1.123L4 5.02.237 1.363a.772.772 0 010-1.123A.84.84 0 011.32.187.84.84 0 012.403.24l4.342 4.218a.773.773 0 010 1.124z" fill="currentColor"></path></svg>
                                <span> Start for free</span>
                            </div>
                        </Link>
                    }

                    {/* -----------toggler button----------- */}
                    {/* <div onClick={() => setOpen(!open)} className="w-10 lg:hidden text-white">
                        {
                            open ? <span>
                                <svg className='w-8 mr-4 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                            </span>
                                :
                                <span>
                                    <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                                </span>
                        }
                    </div> */}
                    {/* -----------toggler button end----------- */}
                </div>
            </section>

            {/* -----------show only small devices after the toggler button clicked----------- */}
            {/* <div className='md:hidden flex justify-between items-center py-2 px-6 mt-3 bg-[#2a2b8b]'>
                <Link to='/templates'><h1 className='hover:text-sky-500 text-white duration-300'>Free Templates</h1></Link>
                <Link to='/pricing'><h1 className='hover:text-sky-500 text-white duration-300'>Pricing</h1></Link>
                <Link to='/login'><h1 className='hover:text-sky-500 text-white duration-300'>Login</h1></Link>
            </div> */}
            {/* <hr className='border-gray-400 mt-6 md:hidden' />
            {
                open && <div onClick={() => setOpen(false)} className={`bg-[#393AA7] min-h-screen flex flex-col gap-4 items-center py-6`}>
                    {
                        userData?._id && <Link to='/dashboard' className='bg-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                            <h1>Dashboard</h1>
                        </Link>
                    }
                    <Link to='/templates' className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <h1>Free Templates</h1>
                    </Link>
                    <Link to='/blog-and-help' className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <h1>Blog and Help</h1>
                    </Link>
                    <Link to='/contact' className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <h1>Contact</h1>
                    </Link>
                    <Link to='/community' className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <h1>Community</h1>
                    </Link>
                    <Link to='/agency' className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <h1>Agency</h1>
                    </Link>
                </div>
            } */}
        </nav>
    );
};

export default Navber;