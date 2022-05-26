import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import UserOrder from './UserOrder';

const Manageorders = () => {
    const [user] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('Orders', () => privateUrl(`/allorder?email=${user.email}`)
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <CommonTitle>Manage Orders</CommonTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Client</th>
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