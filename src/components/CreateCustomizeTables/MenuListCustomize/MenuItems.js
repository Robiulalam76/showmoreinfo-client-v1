import React, { useState } from 'react';
import blueRight from '../../../assets/icons/blue-right.png'
import ProButton from '../../Buttons/ProButton';
import DeleteModal from '../../Modals/CommonModals/DeleteModal';
import ProModal from '../../Modals/CommonModals/ProModal';
import deletes from '../../../assets/icons/link-customize-icons/delete.svg'
import { toast } from 'react-hot-toast';

const MenuItems = ({ menuId, item }) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [proModal, setProModal] = useState(false)
    const [uploadImagePermit, setUploadImagePermit] = useState(false)

    // ------item name and item price from input field
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState('')

    // handle update item name
    const handleUpdateItemName = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/menu/${menuId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ item: { itemText: itemName, ItemPrice: item?.ItemPrice } })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Menu Item Name Added')
                    setItemName('')
                }
            })
    }

    // handle update item price
    const handleUpdateItemPrice = () => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/menu/${menuId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ item: { itemText: item?.itemText, ItemPrice: itemPrice } })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Menu Item Price Added')
                    setItemPrice('')
                }
            })
    }

    // console.log(itemName, itemPrice)
    return (
        <div className='relative cursor-pointer py-8 px-4'>

            <div>
                <h1 className='text-left text-gray-900 mb-2'>Items & Prices</h1>
                <hr />
            </div>

            <div className='flex flex-col md:flex-row md:items-start gap-4 w-full mt-4'>
                <div className='grid grid-cols-1 gap-4 w-full'>
                    <div className='flex flex-col md:flex-row md:items-start gap-4 w-full'>
                        <div className='w-full h-14 flex-grow relative'>
                            <input onChange={(e) => setItemName(e.target.value)} className='focus:outline-none border-none w-full h-12 px-4 bg-gray-200' type="text" placeholder='text item' name='itemName' defaultValue={item?.itemText && item?.itemText} />
                            {itemName &&
                                <div onClick={() => handleUpdateItemName()} className='absolute top-0 right-0 w-12 border-r border-y h-12 bg-white flex justify-center items-center'>
                                    <img className='w-5 cursor-pointer' src={blueRight} alt="" />
                                </div>
                            }
                            <p className='text-right text-sm text-gray-500'>50 characters left</p>
                        </div>

                        <div className='w-full md:w-80 relative'>
                            <input onChange={(e) => setItemPrice(e.target.value)} className='focus:outline-none border-none w-full h-12 px-4 bg-gray-200' type="number" name='itemPrice' placeholder='Item price (optional)' defaultValue={item?.ItemPrice && item?.ItemPrice} />
                            {itemPrice &&
                                <div onClick={() => handleUpdateItemPrice()} className='absolute top-0 right-0 w-12 border-r border-y h-12 bg-white flex justify-center items-center'>
                                    <img className='w-5 cursor-pointer' src={blueRight} alt="" />
                                </div>
                            }
                        </div>
                    </div>

                    {/* {uploadImagePermit ? <div className='relative cursor-pointer w-full h-32 border border-dashed border-gray-400 rounded-xl p-4'>
                        <div class="text-gray-500">Drop your images here, or just <span className='text-blue-600'>Browse</span> your local storage</div>
                        <h1 className='text-blue-600 text-center'>+ Upload Image</h1>
                        <input className='absolute w-full h-full opacity-0 cursor-pointer' type="file" />
                    </div>
                        :
                        <div className='relative'>
                            <div onClick={() => setProModal(!proModal)} className='relative cursor-pointer w-full h-32 border border-dashed border-gray-400 rounded-xl p-4'>
                                <div class="text-gray-500">Drop your images here, or just <span className='text-blue-600'>Browse</span> your local storage</div>
                                <div className='flex items-center gap-5 w-fit mx-auto'>
                                    <h1 className='text-blue-600'>+ Upload Image</h1>
                                    <ProButton />
                                </div>
                            </div>
                            {
                                proModal && <ProModal setCloseModal={setProModal} />
                            }
                        </div>
                    } */}
                </div>


                {/* -----------delete button----------- */}
                <div className='relative cursor-pointer'>
                    <div onClick={() => setDeleteModal(!deleteModal)}
                        className='flex justify-center items-center gap-2 w-12 h-12 mx-auto'>
                        <img className='w-4' src={deletes} alt="" />
                    </div>
                    {/* -----------delete button----------- */}
                    {
                        deleteModal && <DeleteModal closeModal={setDeleteModal} />
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuItems;