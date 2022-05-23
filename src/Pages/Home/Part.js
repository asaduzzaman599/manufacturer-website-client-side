import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    return (
        <div className="card max-w-lg shadow-xl mt-12">
            <figure><img src={part?.img} className="w-full p-10" alt="vehicle part" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold  justify-between">
                    <span>{part?.name}</span>

                </h2>

                <hr />
                <p className='text-2xl font-bold text-success'>${part?.price} <small className='text-sm'>per unit</small></p>

                <div className='text-right'>
                    <p className='text-center m-3 text-base-content'>{part?.description}</p>
                    <p>Quantity: {part?.quantity}</p>
                    <p>Minimum Order: {part?.minimumOrder}</p>
                </div>

            </div>
            <div className="card-actions w-full">
                <Link to={`/order/${part?._id}`} className=" w-full  badge-info-content font-bold cursor-pointer py-4 hover:btn-info duration-700">Purchase Now</Link>
            </div>
        </div>
    );
};

export default Part;