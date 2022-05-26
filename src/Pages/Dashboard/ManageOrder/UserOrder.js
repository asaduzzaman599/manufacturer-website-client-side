import React from 'react';
import { privateUrl } from '../../../Api/PrivateApi';

const UserOrder = ({ order, index, user, refetch, setSelectedOrder }) => {

    let status;
    if (order.status === "shipped") {
        status = <span className='text-success font-semibold'>Shipped</span>
    } else if (order.status === "pending") {
        status = <span className='text-warning font-semibold'>Pending</span>
    } else {
        status = <span className='text-error font-semibold'>Unpaid</span>
    }


    const handleShipped = () => {
        privateUrl.put(`/order/${order._id}?email=${user.email}`, {
            status: "shipped"
        }).then(({ data }) => {
            if (data.modifiedCount) {
                refetch()
            }
        })
    }

    return (
        <tr >
            <th>{index + 1}</th>
            {/* <td className='flex items-center gap-4'> */}
            <td>{order?.name}</td>
            <td>{order?.email}</td>
            <td>{order.product}</td>
            <td>{order?.orderQuantity}</td>
            <td>{order.totalAmount}</td>
            <td>
                {status}
            </td>
            <td>
                {   //if order paid and status pending admin can shipped order other wise nothing
                    (order?.paid && (order?.status === "pending")) ? <button className="btn btn-sm btn-success mr-2" onClick={handleShipped}>Shipped Now</button> : ''
                }{   //if order unpaid and admin can shipped order other wise nothing
                    (!order?.paid) ? <label htmlFor="delete-order-modal" className="btn btn-sm btn-error modal-button" onClick={() => setSelectedOrder(order)} >Cencel</label> : ''
                }
                {   //if order paid and status shipped status shipped 
                    order?.paid && order?.status === "Shipped" && <p className="btn btn-sm btn-success mr-2" >Shipped</p>
                }


            </td>
        </tr>
    );
};

export default UserOrder;