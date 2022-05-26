import React, { useEffect, useState } from 'react';
import CommonTitle from '../../Components/CommonTitle';
import { useForm } from "react-hook-form";
import TotalAmount from './TotalAmount';
import { privateUrl } from '../../Api/PrivateApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PurchaseForm = ({ user, part, }) => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm({ defaultValues: { orderQuantity: part?.minimumOrder } });
    const [orderQuantity, setOrderQuantity] = useState(0)

    useEffect(() => {
        setOrderQuantity(part?.minimumOrder)
    }, [part])

    watch()

    const onSubmit = data => {

        if (!user) {
            return
        }

        const purchaseOrder = {
            name: user?.displayName,
            email: user?.email,
            address: data.address,
            phone: data.phone,
            description: data.description,
            productId: part._id,
            product: part.name,
            orderQuantity: data.orderQuantity,
            unitPrice: parseInt(part.price),
            totalAmount: parseInt(orderQuantity) * part.price,
        }
        console.log(data.orderQuantity)
        privateUrl.post(`/order?email=${user?.email}`, purchaseOrder).then(({ data }) => {
            if (data?.result?.insertedId) {

                toast.success("Your order placed successfully")
                navigate('/dashboard/myorder')
            } else {
                toast.error(data?.message)
            }
        })

    }

    return (
        <div className='flex flex-col-reverse md:flex-row'>


            <form onSubmit={handleSubmit(onSubmit)} className='p-10 grid gap-4 md:w-2/4 w-4/5 mx-auto '>
                <CommonTitle>Please Fillout This</CommonTitle>
                <input type="text" className="input input-bordered w-full " value={user.displayName} readOnly disabled />

                <input type="text" className="input input-bordered w-full " value={user.email} readOnly disabled />

                <input type="number" className="input input-bordered w-full "  {...register("orderQuantity")} />
                {+getValues("orderQuantity") < part?.minimumOrder && <p className=' text-error'><small> Please order minimum qunatity {part?.minimumOrder} </small></p>}
                {+getValues("orderQuantity") > part?.quantity && <p className=' text-error'><small> Please order maximum qunatity {part?.quantity} </small></p>}
                <p><small></small></p>

                <input type="text" name="address" placeholder="Address" className="input input-bordered w-full "  {...register("address")} required />

                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full "  {...register("phone")} required />

                <textarea type="text" name="description" placeholder="Description" className="input input-bordered w-full h-20"  {...register("description")} required />

                {/* if quantity less then minimum order or if more then quantity  disabled button */}
                <div className="text-right">
                    <button disabled={+getValues("orderQuantity") < part?.minimumOrder || +getValues("orderQuantity") > part?.quantity} className="btn btn-primary inline-block ml-auto w-full" type='submit'>Purchase</button>

                </div>

            </form>


            <TotalAmount
                part={part}
                orderQuantity={getValues('orderQuantity')}
            ></TotalAmount>
        </div>

    );
};

export default PurchaseForm;