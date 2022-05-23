import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CommonTitle from '../../Components/CommonTitle';
import { auth } from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { token } = useToken()
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const from = '/'
    useEffect(() => {
        if (token) {

            navigate(from)
        }
    }, [token])

    useEffect(() => {
        if (error || updateError) {
            console.log(error?.message)
            switch (error?.message) {
                case 'Firebase: Error (auth/email-already-in-use).':
                    toast.error("User already exist")
                    break;

                default:
                    toast.error("Something went wrong")
                    break;
            }
        }
    }, [error, updateError])



    const onSubmit = async ({ name, email, password }) => {
        console.log(name, email, password)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    };


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-primary p-10'>
            <div className='md:w-4/6 flex mx-auto bg-base-100'>
                <div className='md:w-4/6 mx-auto p-10 shadow-xl'>

                    <div className="block md:hidden">
                        <CommonTitle >
                            Sign Up
                        </CommonTitle>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full text-right" {...register("name", { required: true })} />

                            <label className="label">
                                <span className="label-text-alt  text-error">{errors.name?.type === 'required' && "Name is required"}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full text-right" {...register("email", { required: true })} />

                            <label className="label">
                                <span className="label-text-alt  text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Your Password" className="input input-bordered w-full  text-right" {...register("password", { required: true })} />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.password?.type === 'required' && "Password is required"}</span>
                            </label>

                        </div>
                        <input type="submit" className='btn btn-primary w-full ' value="Sign Up" />
                    </form>
                    <SocialLogin from={from}></SocialLogin>
                </div>
                <div className='w-2/6 bg-primary shrink py-10 md:block hidden  '>
                    <div className='flex items-center justify-center h-full'>
                        <CommonTitle>
                            Sign Up
                        </CommonTitle>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default SignUp;