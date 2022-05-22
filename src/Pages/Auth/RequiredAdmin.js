import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequiredAdmin = ({ children }) => {
    const { admin, loading } = useAdmin()

    if (loading) {
        return <Loading></Loading>
    }
    console.log(admin, loading)

    return (
        children
    );
};

export default RequiredAdmin;