import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import download from '../../../../../assets/icons/download.png'
import PageLoader from '../../../../../components/loaders/PageLoader';
import MessageDeleteModal from '../../../../../components/Modals/CommonModals/MessageDeleteModal';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import { setDeleteModal } from '../../../../../Slices/controllerSlice';
import { setAllMessages } from '../../../../../Slices/messageSlice';
import './MessagesTab.module.css'

const MessageTable = () => {
    const { allMessages } = useSelector((state) => state.messageSlice)
    const { deleteModal, render } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()
    const { userData } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    // get all messages
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8000/app/v1/all-messages/${userData?._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => dispatch(setAllMessages(data.data)));
        setLoading(false)
    }, [])
    return (
        <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4 cursor-pointer'>
            <h1 className='text-gray-900 font-bold text-left'>Messages</h1>

            <table className=''>
                <thead>
                    <tr className=''>
                        <th className='text-sm text-gray-500 py-2' scope="col">#</th>
                        <th className='text-sm text-gray-500 py-2' scope="col">Text</th>
                        <th className='text-sm text-gray-500 py-2' scope="col">Name</th>
                        <th className='text-sm text-gray-500 py-2' scope="col">Email</th>
                        <th className='text-sm text-gray-500 py-2' scope="col">Phone Number</th>
                        <th className='text-sm text-gray-500 py-2' scope="col">Date</th>
                        <th className='text-sm text-gray-500 py-2' scope="col">Action</th>
                    </tr>
                </thead>
                {
                    loading === true ? <PageLoader />
                        :
                        <tbody>
                            {
                                allMessages?.map((message, i) => (
                                    <tr>
                                        <td className='text-sm text-gray-500 py-2 px-2' data-label="#">{i}</td>
                                        <td className='text-sm text-gray-500 py-2 px-2' data-label="Text">
                                            {message?.messageText ? message?.messageText : '-'}
                                        </td>
                                        <td className='text-sm text-gray-500 py-2 px-2' data-label="Name">
                                            {message?.name ? message?.name : '-'}
                                        </td>
                                        <td className='text-sm text-gray-500 py-2 px-2' data-label="Email">
                                            {message?.email ? message?.email : '-'}
                                        </td>
                                        <td className='text-sm text-gray-500 py-2 px-2' data-label="Phone Number">
                                            {message?.phoneNumber ? message?.phoneNumber : '-'}
                                        </td>
                                        <td className='text-sm text-gray-500 py-2 px-2' data-label="Date">
                                            {message?.receivedData}
                                        </td>
                                        <td className='relative cursor-pointer text-sm text-gray-500 py-2 px-2 flex justify-between items-center' data-label="Action">
                                            <svg onClick={() => dispatch(setDeleteModal(message._id))}
                                                className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22"><path d="M9.998 12.521l2.294-2.281 1.414 1.407-2.293 2.281 2.293 2.281-1.414 1.407-2.294-2.281-2.293 2.281-1.413-1.407 2.293-2.281-2.293-2.281 1.413-1.407 2.293 2.281zM4.999 2.984v-.995c0-1.098.895-1.989 2-1.989h6c1.104 0 2 .891 2 1.989v.995h3c1.105 0 2 .891 2 1.99v1.99a1.994 1.994 0 01-2 1.989h-.08l-.92 10.944a1.994 1.994 0 01-2 1.989h-10c-1.105 0-2-.89-1.997-1.907L2.078 8.953h-.079c-1.106 0-2-.89-2-1.989v-1.99c0-1.099.894-1.99 2-1.99h3zm0 1.99h-3v1.99h16v-1.99h-13zm-.914 3.979l.914 10.944h10l.003-.083.91-10.861H4.085zm8.914-5.969v-.995h-6v.995h6z"></path></svg></td>
                                        {
                                            deleteModal === message._id && <MessageDeleteModal id={message?._id} endPoint={'all-messages'} />
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                }
            </table>

            <button className='relative mt-6 w-44 h-12 bg-blue-600 rounded-3xl flex justify-center items-center gap-2'>
                <img className='w-5' src={download} alt="" />
                <span className='text-white font-semibold'>Export to CSV</span>
            </button>
        </div>
    );
};

export default MessageTable;