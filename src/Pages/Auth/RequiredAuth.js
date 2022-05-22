import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const RequiredAuth = () => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)







    return (
        <Outlet />
    );
};

export default RequiredAuth;