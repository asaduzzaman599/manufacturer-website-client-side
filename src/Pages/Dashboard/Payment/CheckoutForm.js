import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { privateUrl } from '../../../Api/PrivateApi';

const CheckoutForm = ({ user, order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            //getting client secret key from back end
            privateUrl.post(`/create-payment-intent?email=${user?.email}`, {
                totalAmount: order.totalAmount
            }).then(({ data }) => setClientSecret(data.clientSecret))
        }
    }, [user])



    const handleSubmit = async (event) => {

        setError('');
        event.preventDefault();
        //if stripe and element not available then return
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });



        if (error) {
            setError(error.message);

        } else {
            //confirm payment with  client secret key
            stripe
                .confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: user?.displayName,
                            email: user?.email,
                        },
                    },
                })
                .then(({ paymentIntent }) => {
                    const payment = {
                        transactionId: paymentIntent.id,
                        paid: true,
                        status: 'pending'
                    }
                    privateUrl.put(`/order/${order._id}?email=${user.email}`, payment)
                        .then(({ data }) => {
                            if (data.modifiedCount) {
                                navigate('/dashboard/myorder')
                                toast.success("Payment successfully done")
                            }
                        })
                });
        }
    };
    return (
        <form onSubmit={handleSubmit} className='text-base-content'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='text-right mt-4'>
                <button type="submit" className='btn btn-success btn-right' disabled={!stripe}>
                    Pay
                </button>
                <p className='text-error'><small>{error}</small></p>
            </div>

        </form>
    );
};

export default CheckoutForm;