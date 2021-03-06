import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid'

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
                {/* <div className="avatar">
                    <div className="w-12 rounded-full">
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
                {order?.transactionId ? <small className='text-warning font-bold'>{order?.transactionId}</small> : <small className=' font-bold'>N/A</small>}
            </td>
            <td className=''>
                {
                    order?.paid
                        ? <>
                            <p className='text-success font-semibold'>Paid</p>

                        </>
                        : <>
                            <Link to={`/dashboard/payment/${order._id}`} className="btn btn-sm btn-success mr-2" >Pay</Link>
                            {
                                <label htmlFor="delete-order-modal" className="btn btn-sm btn-error modal-button" onClick={() => setSelectedProduct(order)} >X</label>
                            }
                        </>
                }
            </td>
        </tr>
    );
};

export default Order;