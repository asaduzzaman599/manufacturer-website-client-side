import React from 'react';

const Summary = ({ summary }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <summary.Icon className="h-16 w-16 text-base-100" />
            <div>
                <h3 className='text-2xl font-bold'>{summary.count}+</h3>
                <h3 className='text-2xl font-bold '>{summary.name}</h3>
            </div>
        </div>
    );
};

export default Summary;