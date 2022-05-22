import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateUrl } from '../../Api/PrivateApi';
import { auth } from '../../firebase.init';
import noUser from './../../images/no-user.jpg'
const User = ({ user, index, refetch }) => {
    const [admin] = useAuthState(auth)
    const makeAdmin = () => {
        if (!user) {
            return
        }
        privateUrl.put(`/admin/${user._id}?email=${admin?.email}`).then(({ data }) => {
            if (data?.modifiedCount) {
                refetch()
            }
        })

    }
    return (
        <tr >
            <th>{index + 1}</th>
            <td className='flex items-center gap-4'>
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={user?.img || noUser} />
                    </div>
                </div>
                {user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.role || "Customer"}</td>
            <td>
                {
                    user?.role === "admin"
                        ? <button class="btn btn-sm" onClick={makeAdmin}>Remove Admin</button>
                        : <button class="btn btn-sm" onClick={makeAdmin}>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default User;