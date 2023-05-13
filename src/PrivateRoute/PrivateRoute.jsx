import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import LoadingSpinner from '../Shared/Loading/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading) {
        return <LoadingSpinner />
    }
    else if(user){
        return children
    }
    toast.error('Login First');
    return <Navigate to={'/login'} state={{from: location}} replace/>
};

export default PrivateRoute;