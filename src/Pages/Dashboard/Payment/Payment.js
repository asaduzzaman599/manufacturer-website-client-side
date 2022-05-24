import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
const Payment = () => {
    const { orderId } = useParams()
    const [user] = useAuthState(auth)
    const { data, isLoading } = useQuery('payment', () => privateUrl.get(`/order/${orderId}?email=${user?.email}`))

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data?.data)
    return (
        <div>
            <CommonTitle>CheckOut Your Order</CommonTitle>
            <div class="card max-w-lg bg-base shadow-2xl text-base-content mb-6">
                <div class="card-body">
                    <h2 class="card-title text-2xl">Hello, <span className='text-info'>{data?.data?.name}</span></h2>
                    <p>Your order on <span className="font-bold">{data?.data?.product}</span> with quantity  <span className="font-bold">{data?.data?.orderQuantity}</span></p>
                    <p className=' text-xl'>your paying amount is <span className="font-bold"> ${data?.data?.totalAmount}</span></p>

                </div>
            </div>

            <div class="card max-w-lg shadow-2xl text-primary-content">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={data?.data} user={user} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;