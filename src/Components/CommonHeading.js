import React from 'react';

const CommonHeading = ({ children }) => {
    return (
        <h2 className='text-4xl font-bold text-secondary'>
            {children}
        </h2>
    );
};

export default CommonHeading;