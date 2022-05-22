import React from 'react';
import CommonTitle from '../../Components/CommonTitle';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div>
            <CommonTitle>
                Login
            </CommonTitle>

            <div className='md:w-2/6 mx-auto p-10 shadow-xl'>
                <form className=''>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" class="input input-bordered w-full text-right" />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Your Password" class="input input-bordered w-full  text-right" />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>
                        </label>

                    </div>
                    <input type="submit" className='btn btn-info w-full ' value="Login" />
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;