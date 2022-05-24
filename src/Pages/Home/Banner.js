import React from 'react';
import banner from './../../images/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen container  mx-auto">
            <div className="hero-content flex flex-col gap-10 lg:flex-row md:text-right">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl flex-1 w-full " />
                <div className='md:pl-16 md:pr-6'>
                    <h1 className="text-5xl font-bold flex-1 md:text-right">Vehicle Portion!</h1>
                    <p className="py-6 md:text-right">We are providing whole to make sure your loot and track your product status here.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;