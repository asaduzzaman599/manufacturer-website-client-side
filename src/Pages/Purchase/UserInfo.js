import React from 'react';
import noUser from './../../images/no-user.jpg'
const UserInfo = ({ user }) => {
    console.log(user)
    return (

        <div className="card max-w-lg bg-primary text-primary-content my-10 ml-auto" >
            <div className="p-6 items-center gap-6 px-10 text-right flex justify-between">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={user?.photoURL || noUser} />
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-xl">{user?.displayName}</h2>
                    <p>Email : {user?.email}</p>

                </div>
            </div>
        </div>

    );
};

export default UserInfo;