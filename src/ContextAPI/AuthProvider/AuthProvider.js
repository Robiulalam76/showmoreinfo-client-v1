import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('HeyLinkToken')

    useEffect(() => {
        if (!userData?._id) {
            setLoading(true)
            if (token) {
                fetch(`https://3twn4n.xn--b5bp.com/app/v1/user/me`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                        "content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => setUserData(data?.data));
            }
            else {
                setUserData(null)
            }
            setLoading(false)
        }
    }, [token]);


    const authInfo = {
        userData,
        setUserData,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;