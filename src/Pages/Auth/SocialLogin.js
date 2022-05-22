import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const SocialLogin = ({ from }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    useEffect(() => {
        if (error) {
            toast.error("Something went wrong")
        }
    }, [error])

    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button className='btn btn-outline w-full' onClick={() => signInWithGoogle()}>Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;