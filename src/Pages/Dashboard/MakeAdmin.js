import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { baseUrl } from '../../Api/BaseUrl';
import { privateUrl } from '../../Api/PrivateApi';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Loading';
import User from './User';
const MakeAdmin = () => {

    const [user, loading] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('usersData', () =>
        privateUrl(`/user?email=${user.email}`)
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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