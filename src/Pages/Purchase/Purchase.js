import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../Api/BaseUrl';
import { privateUrl } from '../../Api/PrivateApi';
import CommonHeading from '../../Components/CommonHeading';
import CommonTitle from '../../Components/CommonTitle';
import { auth } from '../../firebase.init';
import PartDetail from './PartDetail';
import PurchaseForm from './PurchaseForm';
import TotalAmount from './TotalAmount';
import UserInfo from './UserInfo'

const Purchase = () => {
    const { partId } = useParams()
    const [part, setPart] = useState({})

    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        baseUrl.get(`/product/${partId}`)
            .then(({ data }) => setPart(data))
    }, [])


    return (
        <div className='md:w-4/6 mx-auto'>
            <CommonHeading>Purchase</CommonHeading>

            <div className=' flex gap-6 p-6'>
                <PartDetail part={part}

                ></PartDetail>


            </div>
            {part?._id && <PurchaseForm
                part={part}
                user={user}
            ></PurchaseForm>}

        </div>
    );
};

export default Purchase;