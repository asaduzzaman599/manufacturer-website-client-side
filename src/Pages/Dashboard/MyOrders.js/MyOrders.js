import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('Orders', () =>
        privateUrl(`/order?email=${user.email}`)
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <CommonTitle>My Orders</CommonTitle>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data.map((order, index) => <Order
                                key={user._id}
                                index={index}
                                order={order}
                                refetch={refetch}
                            ></Order>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;