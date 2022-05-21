import React, { useEffect, useState } from 'react';

const PartDetail = ({ part }) => {

    const { quantity: partQuantity, minimumOrder: partMinimumQuantity } = part

    const [minimumOrder, setminiMumOrder] = useState(part.minimumOrder)

    useEffect(() => {
        setminiMumOrder(partMinimumQuantity)
    }, [part])

    const handleOrdersQuantity = (event) => {
        const quantity = event.target.value;
        if (+quantity <= partQuantity && +quantity >= partMinimumQuantity) {
            setminiMumOrder(quantity)
        }
    }
    return (
        <div class="card card-side bg-base shadow-xl w-2/4 mx-auto">
            <figure><img src={part.img} alt="Movie" /></figure>
            <div class="card-body text-right">
                <h2 class="card-title">{part.name}</h2>
                <p>{part.Quantity}</p>
                <p>Price: ${part.price} <small>per unit</small></p>
                <p>Quantity: ${partQuantity} <small>per unit</small></p>
                <p>OrderQuantity :<input type='number' className='w-2/6 border-2 text-right bg-base-200' value={minimumOrder} onChange={handleOrdersQuantity} /></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartDetail;