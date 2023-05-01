import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const ServiceContext = createContext()
const ServiceProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);

    // handle toggle switch
    const handleDefaultSwitch = (id, toggleData, endPoint) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/${endPoint}/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(toggleData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Switch Updated')
                    setLoader(true)
                }
            })
    }

    const handleTitleUpdate = (id, data, endPoint) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v1/${endPoint}/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Switch Updated')
                }
            })
    }

    const dataInfo = {
        handleDefaultSwitch,
        handleTitleUpdate,
        setLoader,
        loader
    }
    return (
        <ServiceContext.Provider value={dataInfo}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;