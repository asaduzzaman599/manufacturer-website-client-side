import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal';
import Order from './Order';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('Orders', () =>
        privateUrl(`/order?email=${user.email}`)
    )

    const [selectedProduct, setSelectedProduct] = useState(null)

    if (isLoading) {
        return <Loading></Loading>
    }

    const deleteProduct = () => {
        if (!user) return
        privateUrl.delete(`/order/${selectedProduct._id}?email=${user.email}`)
            .then(({ data }) => {
                if (data.deletedCount) {
                    toast.success('Delete successfully')
                    setSelectedProduct(null)
                    refetch()
                } else {

                }
            }).catch(error => toast.error(error.message))
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
                                setSelectedProduct={setSelectedProduct}
                            ></Order>)
                        }

                    </tbody>
                </table>
            </div>
            {
                selectedProduct && <DeleteConfirmModal selectedProduct={selectedProduct}>
                    <button class="btn btn-error" onClick={deleteProduct}>Yes</button>
                </DeleteConfirmModal>
            }
        </div>
    );
};

export default MyOrders;