import React from 'react';
import { useQuery } from 'react-query';
import { baseUrl } from '../../Api/BaseUrl';
import CommonTitle from '../../Components/CommonTitle';
import Loading from '../Shared/Loading';
import Reviewcard from '../Shared/Reviewcard';

const Review = () => {

    const { isLoading, error, data: reviews } = useQuery('review', () =>
        baseUrl.get('/review').then(({ data }) => data)
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-12'>
            <hr />
            <CommonTitle>Customers Review</CommonTitle>
            <div className='grid md:grid-cols-2 md:w-4/6 mx-auto gap-6'>
                {
                    reviews?.map(review => <Reviewcard review={review} key={review._id}></Reviewcard>)
                }
            </div>
        </div>
    );
};

export default Review;