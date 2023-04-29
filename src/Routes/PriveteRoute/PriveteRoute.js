import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider/AuthProvider';

const PriveteRoute = ({ children }) => {
    const { userData, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        <div className='w-full h-full fixed top-0 left-0 right-0 bg-blue-500 bg-opacity-5 flex justify-center items-center mx-auto' role="status">
            <div class="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>
        </div>
    }

    if (userData?._id && loading === false) {
        return children
    }
    else if (!userData && loading === false) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
};

export default PriveteRoute;