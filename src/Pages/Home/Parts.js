import React from 'react';
import { useQuery } from 'react-query';
import { baseUrl } from '../../Api/BaseUrl';
import CommonTitle from '../../Components/CommonTitle';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { isLoading, error, data: parts } = useQuery('repoData', () =>
        baseUrl.get('product?limit=6').then(({ data }) => data)
    )
    console.log(parts)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-12' id="parts">
            <hr />
            <CommonTitle>Vehicle Parts We Provide: </CommonTitle>
            <div className='w-4/6 mx-auto grid md:grid-cols-3 gap-6'>
                {
                    parts?.map(part => <Part key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;