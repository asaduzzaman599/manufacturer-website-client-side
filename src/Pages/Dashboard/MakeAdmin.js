import React from 'react';
import { useQuery } from 'react-query';
import { baseUrl } from '../../Api/BaseUrl';
import { privateUrl } from '../../Api/PrivateApi';
import Loading from '../Shared/Loading';
import User from './User';
const MakeAdmin = () => {
    const { isLoading, error, data, refetch } = useQuery('usersData', () =>
        baseUrl('/user')
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data)


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data.map((user, index) => <User
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></User>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;