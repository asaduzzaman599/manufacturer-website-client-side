import React from 'react';
import CommonTitle from '../../Components/CommonTitle';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className='md:w-4/6 flex mx-auto'>
                <div className='md:w-4/6 mx-auto p-10 shadow-xl'>

                    <div className="block md:hidden">
                        <CommonTitle >
                            Login
                        </CommonTitle>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full text-right" {...register("email", { required: true })} />

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
                        <input type="submit" className='btn btn-info w-full ' value="Login" />
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
                <div className='w-2/6 bg-info shrink py-10 md:block hidden'>

                    <CommonTitle>
                        Login
                    </CommonTitle>
                </div>
            </div>

        </div>
    );
};

export default Login;