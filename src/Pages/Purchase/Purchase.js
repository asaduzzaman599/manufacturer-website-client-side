import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Api/BaseUrl';
import CommonHeading from '../../Components/CommonHeading';
import CommonTitle from '../../Components/CommonTitle';
import PartDetail from './PartDetail';
import UserInfo from './UserInfo'

const Purchase = () => {
    const { partId } = useParams()
    const [part, setPart] = useState({})
    const [orderQuantity, setOrderQuantity] = useState('')

    useEffect(() => {
        baseUrl.get(`/product/${partId}`)
            .then(({ data }) => setPart(data))
    }, [])

    const handlePurchase = (event) => {

        event.preventDefault()

        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const description = event.target.description.value;

        const purchaseOrder = {
            name: '',
            email: '',
            address,
            phone,
            description,
            productId: part._id,
            product: part.name,
            orderQuantity,
            price: +orderQuantity * part.price,
        }

        console.log(purchaseOrder)

    }
    return (
        <div className='container mx-auto'>
            <CommonHeading>order</CommonHeading>
            <UserInfo></UserInfo>
            <div className=' flex'>
                {<PartDetail part={part}
                    orderQuantity={orderQuantity}
                    setOrderQuantity={setOrderQuantity}
                ></PartDetail>
                }
                <form onSubmit={handlePurchase} className='p-10 grid gap-4 w-full  flex-1'>
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full " required />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full " required />
                    <textarea type="text" name="description" placeholder="Description" className="input input-bordered w-full h-20" required />


                    <div className="text-right">
                        <button disabled={+orderQuantity < part.minimumOrder || +orderQuantity > part.quantity} className="btn btn-primary inline-block ml-auto" type='submit'>Purchase</button>

                    </div>


                </form>
            </div>
            <div >

            </div>
        </div>
    );
};

export default Purchase;