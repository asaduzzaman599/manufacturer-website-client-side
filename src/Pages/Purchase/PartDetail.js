import React, { useEffect, useState } from 'react';

const PartDetail = ({ part, orderQuantity, setOrderQuantity }) => {

    const { quantity, minimumOrder } = part



    useEffect(() => {
        setOrderQuantity(minimumOrder)
    }, [part])


    return (
        <div className="card card-side bg-base shadow-xl w-2/4 mx-auto  flex-1">
            <figure><img src={part.img} alt="Movie" /></figure>
            <div className="card-body text-right">
                <h2 className="card-title">{part.name}</h2>
                <p>{part.Quantity}</p>
                <p>Price: ${part.price} <small>per unit</small></p>
                <p>Available Quantity: {quantity}</p>
                <p>OrderQuantity :<input type='number' className='w-2/6 border-b-2 text-right ' value={orderQuantity} onChange={(event) => setOrderQuantity(event.target.value)} /></p>
                {
                    (+orderQuantity < minimumOrder || +orderQuantity > quantity) && <p className='text-error'>Order rang {part.minimumOrder} - {part.quantity} </p>
                }

            </div>
        </div>
    );
};

export default PartDetail;