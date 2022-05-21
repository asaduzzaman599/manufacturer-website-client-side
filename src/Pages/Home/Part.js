import React from 'react';

const Part = ({ part }) => {
    return (
        <div class="card max-w-lg shadow-xl">
            <figure><img src={part?.img} className="w-full p-10" alt="vehicle part" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {part?.name}
                </h2>
                <p>{part?.description}</p>
                <p>Quantity: {part?.quantity}</p>
                <p>Minimum Order: {part?.minimumOrder}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-accent cursor-pointer py-4 ">Purchase Now</div>
                </div>
            </div>
        </div>
    );
};

export default Part;