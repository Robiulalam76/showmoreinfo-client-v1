import React, { useContext, useEffect, useState } from 'react';
import ViewMessages from '../DetailsMessages/ViewMessages';
import DefaultSwitch from '../../../../../components/ToggleSwitch/DefaultSwitch';
import { ServiceContext } from '../../../../../ContextAPI/ServiceProvider/ServiceProvider';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import MessageTable from './MessageTable';
import { useDispatch } from 'react-redux';
import { setOpenTab } from '../../../../../Slices/controllerSlice';

const MessagesTab = () => {
    const { userData } = useContext(AuthContext)
    const { handleDefaultSwitch } = useContext(ServiceContext)
    const [messageData, setMessageData] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOpenTab(false))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/app/v1/message`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setMessageData(data.data[0]));
    }, []);

    const handleToggleSwitch = (input) => {
        if (messageData) {
            handleDefaultSwitch(messageData?._id, { turnOnOffMessage: input }, 'message',)
        }
        else if (!messageData) {
            fetch(`http://localhost:8000/app/v1/message`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify({ turnOnOffMessage: true, userInfo: userData, })
            })
                .then(res => res.json())
                .then((data) => {
                    toast.success('Message Add Successfully')
                });
        }
    }

    return (
        <section className='min-h-full py-6'>
            <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4'>
                <div className='flex justify-between items-center w-full h-full'>
                    <h1 className='text-black font-bold text-left'>Turn ON / OFF Message</h1>
                    <DefaultSwitch initialToggle={messageData?.turnOnOffMessage === 'true'}
                        getToggle={handleToggleSwitch} />
                </div>
                {
                    messageData?.turnOnOffMessage === 'true' && <ViewMessages message={messageData} />
                }
            </div>
            <MessageTable />
        </section>
    );
};

export default MessagesTab;