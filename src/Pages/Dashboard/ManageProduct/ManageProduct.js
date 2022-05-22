import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { baseUrl } from '../../../Api/BaseUrl';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal';
import Product from './Product';

const ManageProduct = () => {
    const [user] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('ManageProducts', () =>
        baseUrl('/product')
    )
    const [selectedProduct, setSelectedProduct] = useState(null)
    console.log(data)

    if (isLoading) {
        return <Loading></Loading>
    }
    const deleteProduct = () => {
        if (!user) return
        privateUrl.delete(`/product/${selectedProduct._id}?email=${user.email}`)
            .then(({ data }) => {
                console.log(data)
                if (data.deletedCount) {
                    setSelectedProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <CommonTitle>Manage Products</CommonTitle>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Availale</th>
                            <th>MInimum Order</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data.map((product, index) => <Product
                                key={product._id}
                                index={index}
                                product={product}
                                refetch={refetch}
                                setSelectedProduct={setSelectedProduct}
                            ></Product>)
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

export default ManageProduct;