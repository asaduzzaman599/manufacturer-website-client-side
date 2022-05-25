import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { privateUrl } from '../../Api/PrivateApi';
import CommonTitle from '../../Components/CommonTitle';
import { auth } from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState, reset } = useForm();
    const [error, setError] = useState({ price: '', quantity: "", minimumOrder: "" })
    const onSubmit = ({ name, description, price, quantity, minimumOrder }) => {

        const formData = new FormData()
        const fileField = document.querySelector('input[type="file"]');
        formData.append('image', fileField.files[0])
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY} `, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success && user) {
                    const img = result?.data?.display_url;
                    const product = {
                        name, price, quantity, minimumOrder, description, img
                    }
                    privateUrl.post(`/product?email=${user?.email}`, product).then(({ data }) => {
                        if (data?.success) {
                            toast.success("Product Inserted Successfully")
                            reset()
                        } else {
                            toast.error("Something went wrong")
                        }
                    })
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };
    return (
        <div>

            <div className='md:w-4/6 mx-auto shadow-xl p-10 my-6'>
                <form onSubmit={handleSubmit(onSubmit)} className=' grid gap-10'>
                    <CommonTitle>Add a product</CommonTitle>
                    <input type="text" placeholder="Name" className="input input-bordered w-full " {...register("name")} required />
                    <textarea type="text" placeholder="Description" className="input input-bordered w-full " {...register("description")} required />
                    <div className='w-full'>
                        <input type="text" placeholder="Price" className="input input-bordered w-full " {...register("price")} required />
                        {error.price && <label className='text-error'><small>{error.price}</small></label>}
                    </div>
                    <div className='flex gap-4'>

                        <div className='w-full'>
                            <input type="number" placeholder="Quantity" className="input input-bordered w-full "
                                {...register("quantity")} required />
                            {error.quantity && <label className='text-error'><small>{error.quantity}</small></label>}
                        </div>
                        <div className='w-full'>
                            <input type="number" placeholder="Minimum Order" className="input input-bordered w-full " {...register("minimumOrder")} required />
                            {error.minimumOrder && <label className='text-error'><small>{error.minimumOrder}</small></label>}
                        </div>
                    </div>
                    <label htmlhtmlFor='image' className='text-left'> image
                        <input type="file" id='image' placeholder="image" className="input input-bordered w-full " /></label>
                    <input type="submit" value="Add" className='btn btn-primary w-full' required />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;