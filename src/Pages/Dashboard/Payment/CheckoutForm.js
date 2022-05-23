import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { privateUrl } from '../../../Api/PrivateApi';

const CheckoutForm = ({ user, order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        if (user) {
            console.log(order.totalAmount)
            privateUrl.post(`/create-payment-intent?email=${user?.email}`, {
                totalAmount: order.totalAmount
            }).then(({ data }) => setClientSecret(data.clientSecret))
        }
    }, [user])

    console.log(clientSecret)

    const handleSubmit = async (event) => {

        setError('');
        event.preventDefault();

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
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
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