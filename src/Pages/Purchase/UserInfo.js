import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const UserInfo = () => {
    const [user] = useAuthState(auth)
    return (

        <div className="card max-w-lg bg-primary text-primary-content my-10 ml-auto" >
            <div className="card-body text-right">
                <h2 className="font-bold text-xl">{user?.displayName}</h2>
                <p>Email : {user?.email}</p>
            </div>
        </div>

    );
};

export default UserInfo;