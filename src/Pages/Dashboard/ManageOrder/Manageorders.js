import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import UserOrder from './UserOrder';

const Manageorders = () => {
    const [user] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('Orders', () =>
        privateUrl(`/allorder?email=${user.email}`)
    )
    /* if (data?.data?.length === 0) {
        refetch()
    } */
    console.log(data)
    return (
        <div>
            <CommonTitle>Manage Orders</CommonTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Shipped Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((order, index) => <UserOrder
                                key={order._id}
                                index={index}
                                user={user}
                                order={order}
                                refetch={refetch}
                            ></UserOrder>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Manageorders;