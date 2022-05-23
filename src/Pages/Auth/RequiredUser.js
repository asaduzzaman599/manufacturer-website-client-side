import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequiredUser = ({ children }) => {
    const { admin, loading } = useAdmin()
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (admin) {
        return <Navigate to='/dashboard' replace />
    }
    return (
        children
    );
};

export default RequiredUser;