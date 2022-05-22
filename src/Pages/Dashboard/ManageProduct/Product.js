import React from 'react';

const Product = ({ index, product, setSelectedProduct }) => {
    return (
        <tr >
            <th>{index + 1}</th>
            <td className='flex items-center gap-4'>
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={product?.img} />
                    </div>
                </div>
                {product?.name}</td>
            <td>{product?.price}</td>
            <td>{product?.quantity}</td>
            <td>{product?.minimumOrder}</td>
            <td>
                {
                    <label for="delete-modal" class="btn btn-error modal-button" onClick={() => setSelectedProduct(product)} >X</label>
                }
            </td>
        </tr>
    );
};

export default Product;