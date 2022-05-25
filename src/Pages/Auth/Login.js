import React, { useEffect, useState } from 'react';
import CommonTitle from '../../Components/CommonTitle';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { token } = useToken()
    const { register, formState: { errors }, getValues, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const [emailError, setEmailError] = useState('')
    const [sendPasswordResetEmail, sending, passwordReseterror] = useSendPasswordResetEmail(auth);
    useEffect(() => {
        if (error) {
            console.log(error?.message)
            switch (error?.message) {
                case 'Firebase: Error (auth/user-not-found).':

                    toast.error("User not found")
                    break;
                case 'Firebase: Error (auth/wrong-password).':

                    toast.error("Wrong email or password")
                    break;

                default:
                    toast.error("Something went wrong")
                    break;
            }
        }
    }, [error])
    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        if (token) {
            navigate(from)
        }
    }, [token])



    const onSubmit = ({ email, password }) => {

        signInWithEmailAndPassword(email, password)
    };


    const handleForgetPass = () => {
        const email = getValues('email')
        if (!email) {
            setEmailError('Please Enter Your email')
        } else if (!(/\S+@\S+\.\S+/).test(email)) {
            setEmailError('Invalid email')
        } else {
            setEmailError('')
            sendPasswordResetEmail(email)
            toast('Reset Password mail sent')
        }
    }

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='p-10'>
            <div className='md:w-4/6 flex mx-auto'>
                <div className='md:w-4/6 mx-auto p-10 shadow-xl'>

                    <div className="block ">
                        <CommonTitle >
                            Login
                        </CommonTitle>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full " {...register("email", {
                                required: true,
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Invalid Email'
                                }
                            })} />

                            <label className="label">
                                <span className="label-text-alt  text-error">{errors.email?.type === 'required' && "Email is required" ||
                                    (errors.email?.type === 'pattern' && " invalid email Email ")
                                    || emailError}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full  " {...register("password", {
                                required: true, minLength: {
                                    value: 6,
                                    message: 'Password length must be more than 6'
                                }
                            })} />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.password?.type === 'required' && "Password is required"}
                                    {errors.password?.type === 'minLength' && errors.password.message}</span>

                            </label>

                        </div>
                        <p className='text-primary text-right hover:underline font-semibold'><small><Link to='/signup'>SignUp Here</Link></small></p>
                        <p className='text-primary  hover:underline cursor-pointer font-semibold mb-6 ' onClick={handleForgetPass}><small>Forget Password?</small></p>
                        <input type="submit" onClick={() => setEmailError('')} className='btn btn-primary w-full ' value="Login" />
                    </form>
                    <SocialLogin></SocialLogin>
                </div>

            </div>

        </div>
    );
};

export default Login;