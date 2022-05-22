import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequiredAuth = () => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)


    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        toast("Please Login!")
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return (
        <Outlet />
    );
};

export default RequiredAuth;