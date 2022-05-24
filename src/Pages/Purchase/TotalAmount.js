import React from 'react';

const TotalAmount = ({ part, orderQuantity }) => {
    return (
        <div class="card max-w-lg bg-base-100 h-full flex items-center shadow-lg md:mt-10">
            <div class="card-body">
                <h2 class="text-4xl font-bold">Total Price</h2>
                <p className='text-3xl font-bold'> ${orderQuantity * parseInt(part?.price)}</p>

            </div>
        </div>
    );
};

export default TotalAmount;