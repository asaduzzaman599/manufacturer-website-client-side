import React from 'react';
import { useQuery } from 'react-query';
import CommonTitle from '../../Components/CommonTitle';

const Parts = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:5000/product').then(res =>
            res.json()
        )
    )

    console.log(data)
    return (
        <div>
            <CommonTitle>Vehicle Parts We Provide: </CommonTitle>
        </div>
    );
};

export default Parts;