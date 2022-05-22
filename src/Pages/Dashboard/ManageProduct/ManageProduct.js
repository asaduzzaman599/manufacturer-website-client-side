import React from 'react';
import { useQuery } from 'react-query';
import { baseUrl } from '../../../Api/BaseUrl';
import CommonTitle from '../../../Components/CommonTitle';
import Loading from '../../Shared/Loading';
import Product from './Product';

const ManageProduct = () => {
    const { isLoading, error, data, refetch } = useQuery('ManageProducts', () =>
        baseUrl('/product')
    )
    console.log(data)

    if (isLoading) {
        return <Loading></Loading>
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
                            ></Product>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;