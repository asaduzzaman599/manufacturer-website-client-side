import React from 'react';
import notFound from './../../images/not-found.jpg'
const NotFound = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;