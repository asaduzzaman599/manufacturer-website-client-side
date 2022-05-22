import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const RequiredAuth = () => {
    const location = useLocation()





    return (
        <Outlet />
    );
};

export default RequiredAuth;