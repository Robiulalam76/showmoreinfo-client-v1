import React, { useContext } from 'react';
import menu from '../../../../../assets/icons/menu-tab-icons/menu.svg'
import empty from '../../../../../assets/icons/menu-tab-icons/empty.svg'
import { Link } from 'react-router-dom';
import MenuListCustomize from '../../../../../components/CreateCustomizeTables/MenuListCustomize/MenuListCustomize';
import useFetch from "../../../../../Hoock/Hoock";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import PageLoader from '../../../../../components/loaders/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { setRenderReducer } from '../../../../../Slices/getDataSlice';

const MenuTab = () => {
    const { render } = useSelector((state) => state.getData)
    const { userData } = useContext(AuthContext)
    const dispatch = useDispatch()
    const data = useFetch("links/menu")

    const handleAddMenu = () => {
        const data = {
            name: 'My Manu',
            userInfo: userData?._id,
            currency: 'USD',
            item: {
                itemText: '',
                ItemPrice: ''
            },
        };
        fetch(`http://localhost:8000/app/v1/links/menu`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                toast.success('Menu Add Successfully')
                dispatch(setRenderReducer({ render: true }))
            });
    }
    return (
        <section className='min-h-screen'>
            <div>
                {
                    data.length === 0 ? <button onClick={() => handleAddMenu()}
                        className='flex justify-center items-center gap-4 w-fit px-6 mx-auto cursor-pointer h-12 rounded-[50px] bg-blue-600'>
                        <img src={menu} alt="" />
                        <h1 className='text-white font-semibold'>Add Menu or Price List</h1>
                    </button>
                        :
                        <button className='flex justify-center items-center gap-4 w-fit px-6 mx-auto cursor-pointer h-12 rounded-[50px] bg-blue-200' disabled >
                            <img src={menu} alt="" />
                            <h1 className='text-white font-semibold'>Add Menu or Price List</h1>
                        </button>
                }

                <div className='flex justify-start items-center gap-3 h-12 max-w-[600px] mx-auto mt-6 bg-yellow-100 rounded-md px-4'>
                    <div className='w-8 h-8 flex justify-center items-center bg-yellow-400 rounded-full'><span className='text-white p-1'>!</span></div>
                    <p className='text-sm'>You must upgrade to PRO account in order to create more than 1 menu.</p>
                </div>

                {
                    render ? <PageLoader />
                        :
                        <>
                            {
                                data?.length >= 1 ? <MenuListCustomize menu={data[0]} />
                                    :
                                    <div className='flex justify-center items-center my-6'>
                                        <img className='md:w-[400px]' src={empty} alt="" />
                                    </div>
                            }
                        </>
                }




                <h1 className='text-gray-600 text-sm text-center py-6'>You can add multiple menus & price lists on the PRO plan. Check it <Link to='/' className='text-blue-600 underline'>here</Link></h1>
            </div>
        </section>
    );
};

export default MenuTab;