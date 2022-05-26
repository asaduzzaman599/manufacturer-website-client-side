import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import OrderDeleteConfirmModal from '../MyOrders.js/OrderDeleteConfirmModal';
import UserOrder from './UserOrder';

const Manageorders = () => {
    const [user] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('Orders', () => privateUrl(`/allorder?email=${user.email}`)
    )

    const [selectedOrder, setSelectedOrder] = useState(null)

    if (isLoading) {
        return <Loading></Loading>
    }

    const deleteOrder = () => {
        if (!user) return
        privateUrl.delete(`/order/${selectedOrder._id}?email=${user.email}`)
            .then(({ data }) => {
                if (data.deletedCount) {
                    toast.success('Delete successfully')
                    setSelectedOrder(null)
                    refetch()
                } else {
                    toast.error('Something Went Wrong')
                }
            }).catch(error => toast.error(error.message))
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
                            <th>Email</th>
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
                                setSelectedOrder={setSelectedOrder}
                            ></UserOrder>)
                        }

                    </tbody>
                </table>
            </div>
            {   //delete order modal
                selectedOrder && <OrderDeleteConfirmModal selectedOrder={selectedOrder}>
                    <button className="btn btn-error" onClick={deleteOrder}>Yes</button>
                </OrderDeleteConfirmModal>
            }
        </div>
    );
};

export default Manageorders;