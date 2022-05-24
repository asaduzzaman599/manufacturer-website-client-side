import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    return (
        <div className=" max-w-lg shadow-xl mt-12">
            <figure><img src={part?.img} className="w-full p-10" alt="vehicle part" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold  justify-between">
                    <span>{part?.name}</span>

                </h2>

                <hr />
                <p className='text-center m-3 text-base-content'><small>{part?.description}</small></p>
                <p className='text-2xl font-bold text-success'>${part?.price} <small className='text-sm'>per unit</small></p>

                <div className='text-right'>

                    <p><span className='font-bold'>Quantity:</span> {part?.quantity}</p>
                    <p><span className='font-bold'>Minimum Order:</span> {part?.minimumOrder}</p>
                </div>

            </div>
            <div className="card-actions w-full">
                <Link to={`/order/${part?._id}`} className=" w-full  badge-info-content font-bold cursor-pointer py-4 hover:btn-primary duration-700">Purchase Now</Link>
            </div>
        </div>
    );
};

export default Part;