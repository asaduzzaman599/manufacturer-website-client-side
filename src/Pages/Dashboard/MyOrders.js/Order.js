import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, index, refetch, setSelectedProduct }) => {

    let status;
    if (order.status === "shipped") {
        status = <span className='text-success font-semibold'>Shipped</span>
    } else if (order.status === "pending") {
        status = <span className='text-warning font-semibold'>Pending</span>
    } else {
        status = <span className='text-error font-semibold'>Unpaid</span>
    }
    console.log(order)
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
                            <Link to={`/dashboard/payment/${order._id}`} class="btn btn-sm btn-success mr-2" >Pay Now</Link>
                            {
                                <label for="delete-order-modal" class="btn btn-error modal-button" onClick={() => setSelectedProduct(order)} >X</label>
                            }
                        </>
                }
            </td>
        </tr>
    );
};

export default Order;