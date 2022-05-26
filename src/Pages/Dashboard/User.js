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
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={user?.img || noUser} />
                    </div>
                </div>
                {user?.name}</td>
            <td>{user?.email}</td>
            {/* if admin show role or client if not */}
            <td className='font-bold'>{user?.role || "Client"}</td>
            <td>
                {
                    //button for make admin
                    user?.role === "admin"
                        ? <button className="btn btn-sm btn-error" >Remove Admin</button>
                        : <button className="btn btn-sm" onClick={makeAdmin}>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default User;