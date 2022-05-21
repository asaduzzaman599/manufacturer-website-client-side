import React from 'react';

const CommonTitle = ({ children }) => {
    return (
        <h2 className='text-4xl font-bold text-secondary'>
            {children}
        </h2>
    );
};

export default CommonTitle;