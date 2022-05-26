import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from '../ManageProduct/DeleteConfirmModal';
import Order from './Order';
import OrderDeleteConfirmModal from './OrderDeleteConfirmModal';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const { isLoading, error, data: orders, refetch } = useQuery('Orders', () =>
        privateUrl(`/order?email=${user.email}`).then(({ data }) => data)
    )

    const [selectedOrder, setSelectedOrder] = useState(null)

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const deleteProduct = () => {
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
            <CommonTitle>My Orders</CommonTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>transactionId</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <Order
                                key={order._id}
                                index={index}
                                order={order}
                                refetch={refetch}
                                setSelectedProduct={setSelectedOrder}
                            ></Order>)
                        }

                    </tbody>
                </table>
            </div>
            {   //delete order modal
                selectedOrder && <OrderDeleteConfirmModal selectedOrder={selectedOrder}>
                    <button className="btn btn-error" onClick={deleteProduct}>Yes</button>
                </OrderDeleteConfirmModal>
            }
        </div>
    );
};

export default MyOrders;