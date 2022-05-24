import React from 'react';
import { TrashIcon } from '@heroicons/react/solid'

const Product = ({ index, product, setSelectedProduct }) => {
    return (
        <tr >
            <th>{index + 1}</th>
            <td className='flex items-center gap-4'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={product?.img} />
                    </div>
                </div>
                {product?.name}</td>
            <td>{product?.price}</td>
            <td>{product?.quantity}</td>
            <td>{product?.minimumOrder}</td>
            <td>
                {
                    <label for="delete-modal" className="btn hover:btn-error modal-button" onClick={() => setSelectedProduct(product)} > <TrashIcon className="h-5 w-5 text-red-500" /></label>
                }
            </td>
        </tr>
    );
};

export default Product;