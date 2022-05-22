import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { privateUrl } from '../../Api/PrivateApi';
import CommonTitle from '../../Components/CommonTitle';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Loading';
import Reviewcard from '../Shared/Reviewcard';


const AddReview = () => {
    const { isLoading, data, refetch } = useQuery('Reviews', () =>
        privateUrl(`/review?email=${user.email}`)
    )
    const [user] = useAuthState(auth)
    const [error, setError] = useState('')

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(data)
    const handleReview = (event) => {

        setError('')
        event.preventDefault()
        const rating = event.target.rating.value
        const description = event.target.description.value
        if (!user) {
            return
        }
        if (!description) {
            return setError('Description is empty')
        }

        const review = {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            rating,
            description
        }
        console.log(review, user)
        privateUrl.post(`/review?email=${user.email}`, review)
            .then(({ data: responseData }) => {
                if (responseData.success) {
                    toast.success("Review Posted")
                    refetch()
                    event.target.rating.value = ''
                    event.target.description.value = ''
                } else {
                    toast.error(responseData?.message || "something went wrong")
                }
            })

    }
    return (
        <div>
            <CommonTitle>Your Reviews</CommonTitle>
            <div className='w-full grid md:grid-cols-2 gap-4'>
                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <form onSubmit={handleReview} class="card-body">
                        <h2 class="card-title">Add Review</h2>
                        <label htmlFor="" className='flex justify-between'>

                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </label>
                        <input type="range" name="rating" min='1' max='5' />
                        <label htmlFor="" className=' mt-4'>Say somthing</label>
                        <textarea class="input input-bordered w-full h-20 mb-4" name="description" id="" cols="30" rows="10" />
                        {error && <p><small className='text-error'>{error}</small></p>}
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </form>
                </div>


                <div className=''>

                    {
                        data?.data?.map(review => <Reviewcard review={review} key={review._id}></Reviewcard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddReview;