import React from 'react';
import { useForm } from 'react-hook-form';
import CommonTitle from '../../Components/CommonTitle';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className='md:w-4/6 flex mx-auto'>
                <div className='md:w-4/6 mx-auto p-10 shadow-xl'>

                    <div className="block md:hidden">
                        <CommonTitle >
                            Sign Up
                        </CommonTitle>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered w-full text-right" {...register("name", { required: true })} />

                            <label class="label">
                                <span class="label-text-alt  text-error">{errors.name?.type === 'required' && "Name is required"}</span>
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" class="input input-bordered w-full text-right" {...register("email", { required: true })} />

                            <label class="label">
                                <span class="label-text-alt  text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Your Password" class="input input-bordered w-full  text-right" {...register("password", { required: true })} />

                            <label class="label">
                                <span class="label-text-alt text-error">{errors.password?.type === 'required' && "Password is required"}</span>
                            </label>

                        </div>
                        <input type="submit" className='btn btn-primary w-full ' value="Sign Up" />
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
                <div className='w-2/6 bg-primary shrink py-10 md:block hidden'>

                    <CommonTitle>
                        Sign Up
                    </CommonTitle>
                </div>
            </div>

        </div>
    );
};
export default SignUp;