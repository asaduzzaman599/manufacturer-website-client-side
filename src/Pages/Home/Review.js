import React from 'react';
import { useQuery } from 'react-query';
import { baseUrl } from '../../Api/BaseUrl';
import CommonTitle from '../../Components/CommonTitle';
import Loading from '../Shared/Loading';
import Reviewcard from '../Shared/Reviewcard';

const Review = () => {

    const { isLoading, error, data } = useQuery('review', () =>
        baseUrl.get('/review')
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <CommonTitle>Customers Review</CommonTitle>
            <div className='grid md:grid-cols-2 w-5/6 mx-auto gap-6'>
                {
                    data?.data?.map(review => <Reviewcard review={review} key={review._id}></Reviewcard>)
                }
            </div>
        </div>
    );
};

export default Review;