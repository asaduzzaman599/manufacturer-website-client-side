import React from 'react';

const Order = ({ order, index, refetch, setSelectedProduct }) => {

    let status;
    if (order.status === "shipped") {
        status = <span className='text-success font-semibold'>Shipped</span>
    } else if (order.status === "pending") {
        status = <span className='text-warning font-semibold'>Pending</span>
    } else {
        status = <span className='text-error font-semibold'>Unpaid</span>
    }
    return (
        <tr >
            <th>{index + 1}</th>
            {/* <td className='flex items-center gap-4'> */}
            <td>
                {/* <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={user?.img || noUser} />
                    </div>
                </div> */}
                {order?.product}</td>
            <td>{order?.orderQuantity}</td>
            <td>{order.unitPrice}</td>
            <td>{order.totalAmount}</td>
            <td>
                {status}
            </td>
            <td>
                {
                    order?.paid
                        ? <p>paid</p>
                        : <>
                            <button class="btn btn-sm btn-success mr-2" >Pay Now</button>
                            {
                                <label for="delete-modal" class="btn btn-error modal-button" onClick={() => setSelectedProduct(order)} >X</label>
                            }
                        </>
                }
            </td>
        </tr>
    );
};

export default Order;