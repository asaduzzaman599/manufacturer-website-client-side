import React from 'react';
import { useQuery } from 'react-query';
import { baseUrl } from '../../Api/BaseUrl';
import CommonTitle from '../../Components/CommonTitle';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { isLoading, error, data: parts } = useQuery('products', () =>
        baseUrl.get('/product?limit=6').then(({ data }) => data)
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='mt-12' id="parts">

            <CommonTitle>Vehicle Parts We Provide </CommonTitle>
            <div className='w-5/6 mx-auto grid md:grid-cols-3 gap-6'>
                {

                    parts?.map(part => <Part key={part._id}
                        part={part}
                    ></Part>)

                }
            </div>
        </section>
    );
};

export default Parts;