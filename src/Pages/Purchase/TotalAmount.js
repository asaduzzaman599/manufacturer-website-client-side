import React from 'react';

const TotalAmount = ({ part, orderQuantity }) => {
    return (
        <div className="card max-w-lg bg-base-100 h-full flex items-center shadow-lg md:mt-10">
            <div className="card-body">
                <h2 className="text-4xl font-bold">Total Price</h2>
                <p className='text-3xl font-bold'> ${orderQuantity * parseInt(part?.price)}</p>

            </div>
        </div>
    );
};

export default TotalAmount;