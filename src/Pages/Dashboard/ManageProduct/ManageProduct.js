import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../Api/BaseUrl';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import Product from './Product';
import { TrashIcon } from '@heroicons/react/solid'
const ManageProduct = () => {
    const [user] = useAuthState(auth)
    const { isLoading, error, data: products, refetch } = useQuery('ManageProducts', () =>
        baseUrl('/product').then(({ data }) => data)
    )
    const [selectedProduct, setSelectedProduct] = useState(null)

    if (isLoading) {
        return <Loading></Loading>
    }
    //delete product on click delete
    const deleteProduct = () => {
        if (!user) return
        privateUrl.delete(`/product/${selectedProduct._id}?email=${user.email}`)
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
            <CommonTitle>Manage Products</CommonTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            products.map((product, index) => <Product
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
            {   //product delete modal
                selectedProduct && <DeleteConfirmModal selectedProduct={selectedProduct}>
                    <button className="btn btn-error" onClick={deleteProduct}>Yes</button>
                </DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProduct;