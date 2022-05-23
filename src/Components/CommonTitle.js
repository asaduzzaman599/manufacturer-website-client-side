import React from 'react';

const CommonTitle = ({ children }) => {
    return (
        <h3 className='text-3xl font-bold text-info-content my-8'>
            {children}
        </h3>
    );
};

export default CommonTitle;