import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Api/BaseUrl';
import CommonTitle from '../../Components/CommonTitle';
import PartDetail from './PartDetail';
import UserInfo from './UserInfo';

const Order = () => {
    const { partId } = useParams()
    const [part, setPart] = useState({})

    useEffect(() => {
        baseUrl.get(`/product/${partId}`)
            .then(({ data }) => setPart(data))
    }, [])


    return (
        <div className='container mx-auto'>
            <CommonTitle>order</CommonTitle>
            <UserInfo></UserInfo>
            <div className=' '>
                <PartDetail part={part}></PartDetail>
            </div>
            <div >

            </div>
        </div>
    );
};

export default Order;