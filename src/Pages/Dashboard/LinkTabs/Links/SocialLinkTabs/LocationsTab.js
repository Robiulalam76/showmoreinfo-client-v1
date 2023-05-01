import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from '../../../../../assets/icons/locations-tab-icons/empty.svg'
import LocationsCustomize from '../../../../../components/CreateCustomizeTables/LocationsCustomize';
import PageLoader from '../../../../../components/loaders/PageLoader';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import useFetch from '../../../../../Hoock/Hoock';
import { setRenderReducer } from '../../../../../Slices/getDataSlice';
import { setSelectedLocation, setSearch } from '../../../../../Slices/locationSlice';

const LocationsTab = () => {
    const {
        locations,
        selectedLocation,
        search
    } = useSelector((state) => state.locationSlice)
    const { render } = useSelector((state) => state.getData)
    const dispatch = useDispatch()
    const { userData } = useContext(AuthContext)
    const data = useFetch("links/location")

    const handleSubmit = (event) => {
        event.preventDefault()
        const selectLocation = event.target.location.value

        const data = {
            name: selectLocation,
            userInfo: userData?._id,
        };
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/location`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Location Add Successfully')
                dispatch(setRenderReducer({ render: true }))
                dispatch(setSelectedLocation(''))
                event.target.reset()
            });
    }

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setSearch(false))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <section className='min-h-screen'>
            <div className='px-2 w-full mx-auto'>
                <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center gap-6'>
                    <div className='relative w-full'>
                        <div onClick={() => dispatch(setSearch(search ? false : true))}
                            className='flex justify-between items-center px-3 w-full h-10 border border-blue-600 bg-gray-200 focus:outline outlien-blue-600 rounded-md'>

                            <input onChange={(e) => dispatch(setSelectedLocation(e.target.value))}
                                className='w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none' name='location' type="text"
                                defaultValue={selectedLocation} placeholder='Type or paste location address' />

                            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                        </div>
                        {
                            search && <div ref={dropdownRef}
                                className="w-full border-x border-b right-0 cursor-pointer absolute z-50 border bg-gray-50 shadow">

                                <div className='w-full h-44 border-t overflow-y-auto bg-white'>
                                    {
                                        locations && locations.map(location => <div
                                            onClick={() => dispatch(setSearch(search ? false : true))}>
                                            <div onClick={() => dispatch(setSelectedLocation(location.location))}
                                                className='py-2 px-4 hover:bg-blue-200'>
                                                <h1 className='text-gray-500'>{location.location}</h1>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    {
                        selectedLocation ? <button type='submit' className='cursor-pointer flex justify-center items-center gap-1 px-4 rounded-[50px] h-10 w-56 mx-auto bg-blue-600'>
                            <h1 className=' text-white font-semibold'>Add Location</h1>
                        </button>
                            :
                            <div className='flex justify-center items-center gap-1 px-4 rounded-[50px] h-10 w-56 mx-auto bg-[#9FC1EA]'>
                                <button disabled className='text-white font-semibold'>Add Location</button>
                            </div>
                    }
                </form>
            </div>


            {/* ------------------------------------------------- */}
            {
                render ? <PageLoader />
                    :
                    <div>
                        {
                            data?.length > 0 && data?.map(location => <LocationsCustomize location={location} />)
                        }
                        {
                            data?.length === 0 && <div className='flex flex-col justify-center items-center mt-12'>
                                <img className='md:w-96' src={empty} alt="" />
                                <p className='text-center mt-6 text-gray-400'>You can manage multiple locations on the PRO plan.Check it <Link to='/' className='text-blue-600 underline'>here</Link></p>
                            </div>
                        }
                    </div>
            }
            {/* ------------------------------------------------- */}

            <h1 className='text-gray-600 text-sm text-center py-6'>You can manage multiple locations on the PRO plan.Check it <Link to='/' className='text-blue-600 underline'>here</Link></h1>


        </section>
    );
};

export default LocationsTab;