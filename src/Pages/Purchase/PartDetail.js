import React, { useEffect, useState } from 'react';

const PartDetail = ({ part, orderQuantity, setOrderQuantity }) => {






    return (
        <div className="card card-side bg-base  w-full mx-auto  flex flex-col md:flex-row shadow-lg p-6">
            <figure><img src={part?.img} alt="Movie" /></figure>
            <div className="card-body text-right">
                <h2 className="text-4xl font-bold ">{part?.name}</h2>
                <p className='text-3xl  font-bold'>${part?.price}
                    <small className='text-base-content  text-sm'>/per unit</small></p>

                <div className='my-6'>
                    <p className='text-sm'>Description:</p>
                    <h3 className="text-xl font-medium text-gray-500 ">{part?.description} piece </h3>
                </div>

                <p><span className="font-semibold">Available Quantity:</span> {part?.quantity} piece </p>
                <p><span className="font-semibold">Minimum Order Quantity:</span> {part?.minimumOrder} piece </p>

                {
                    (+orderQuantity < part?.minimumOrder || +orderQuantity > part?.quantity) && <p className='text-error'>Order rang {part?.minimumOrder} - {part?.quantity} </p>
                }

            </div>
        </div>
    );
};

export default PartDetail;