import React, { useEffect, useState } from 'react';

const PartDetail = ({ part }) => {

    //part detail information

    return (
        <div className="card card-side bg-base  w-full mx-auto  flex flex-col md:flex-row shadow-lg p-6">
            <figure className='flex-1 md:p-10 p-6 '><img src={part?.img} alt="Movie" className='rounded-lg w-full h-50' /></figure>
            <div className="card-body text-right flex-1">
                <h2 className="md:text-4xl text-2xl text-center font-bold ">{part?.name}</h2>
                <p className='md:text-3xl text-sm text-center  font-bold'>${part?.price}
                    <small className='text-base-content  text-sm'>/per unit</small></p>

                <div className='my-6'>
                    <p className='text-sm text-center md:text-right font-semibold'>Description</p>
                    <h3 className="text-sm font-medium text-gray-500  text-center md:text-right">{part?.description}  </h3>
                </div>

                <p><span className="font-semibold">Available Quantity:</span> {part?.quantity} piece </p>
                <p><span className="font-semibold">Minimum Order Quantity:</span> {part?.minimumOrder} piece </p>

            </div>
        </div>
    );
};

export default PartDetail;