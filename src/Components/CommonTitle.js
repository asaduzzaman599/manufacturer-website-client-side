import React from 'react';

const CommonTitle = ({ children }) => {
    return (
        <h3 className='text-2xl font-bold text-secondary'>
            {children}
        </h3>
    );
};

export default CommonTitle;