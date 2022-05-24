import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/solid'

const Part = ({ part }) => {
    return (
        <div className=" max-w-lg bg-base-100 shadow-xl hover:shadow-2xl mt-12" data-aos="fade-up"
            data-aos-duration="3000">
            <figure><img src={part?.img} className="w-full p-10" alt="vehicle part" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold  justify-center">
                    <span>{part?.name}</span>

                </h2>

                <hr />
                <p className='text-center m-3 text-gray-400 text-sm'>{part?.description}</p>
                <p className='text-2xl'><span className=' font-bold text-success'>${part?.price}</span> <small className='text-sm'>/per unit</small></p>

                <div className='text-right'>

                    <p><span className='font-bold'>Quantity:</span> {part?.quantity}</p>
                    <p><span className='font-bold'>Minimum Order:</span> {part?.minimumOrder}</p>
                </div>

            </div>
            <div className="card-actions w-full">
                <Link to={`/order/${part?._id}`} className=" w-full  badge-info-content font-bold cursor-pointer py-4 hover:btn-primary duration-700 flex items-center justify-center gap-4">Purchase Now <ShoppingCartIcon className="h-5 w-5 " /></Link>
            </div>
        </div>
    );
};

export default Part;