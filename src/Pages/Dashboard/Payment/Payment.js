import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CommonTitle from '../../../Components/CommonTitle';

const Payment = () => {
    const { orderId } = useParams()
    const { data, isLoading } = useQuery('payment', () => fetch(`/order/${orderId}`))


    return (
        <div>
            <CommonTitle>CheckOut Your Order</CommonTitle>
            <div class="card max-w-lg bg-base shadow-2xl text-base-content">
                <div class="card-body">
                    <h2 class="card-title">Order Id : {orderId}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn">Buy Now</button>
                    </div>
                </div>
            </div>

            <div class="card max-w-lg bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;