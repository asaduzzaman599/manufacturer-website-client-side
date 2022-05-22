import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    return (
        <div className="card max-w-lg shadow-xl">
            <figure><img src={part?.img} className="w-full p-10" alt="vehicle part" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {part?.name}
                </h2>
                <p>{part?.description}</p>
                <p>Quantity: {part?.quantity}</p>
                <p>Minimum Order: {part?.minimumOrder}</p>
                <div className="card-actions justify-end">
                    <Link to={`/order/${part?._id}`} className="badge badge-accent cursor-pointer py-4 ">Purchase Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Part;