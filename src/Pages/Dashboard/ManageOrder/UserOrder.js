import React from 'react';
import { privateUrl } from '../../../Api/PrivateApi';

const UserOrder = ({ order, index, user, refetch }) => {

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
            console.log(data)
            if (data.modifiedCount) {
                refetch()
            }
        })
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
                {order?.name}</td>
            <td>{order?.orderQuantity}</td>
            <td>{order.unitPrice}</td>
            <td>{order.totalAmount}</td>
            <td>
                {status}
            </td>
            <td>
                {
                    (order?.paid && (order?.status === "pending")) ? <button class="btn btn-sm btn-success mr-2" onClick={handleShipped}>Shipped Now</button> : ''
                }
                {
                    order?.paid && order?.status === "Shipped" && <p class="btn btn-sm btn-success mr-2" >Shipped</p>
                }


            </td>
        </tr>
    );
};

export default UserOrder;