import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('HeyLinkToken')

    // user data reFetch if user data updated
    const userRefetch = () => {
        if (token) {
            fetch(`http://localhost:8000/app/v1/user/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                    "content-type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => setUserData(data?.data));
        }
    }

    useEffect(() => {
        if (!userData?._id) {
            setLoading(true)
            if (token) {
                fetch(`http://localhost:8000/app/v1/user/me`, {
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
        userRefetch,
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