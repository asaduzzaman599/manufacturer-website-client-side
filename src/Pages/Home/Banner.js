import React from 'react';
import banner from './../../images/banner.jpg'
const Banner = () => {
    return (
        <section className="hero min-h-screen container  mx-auto">
            <div className="hero-content flex flex-col gap-10 lg:flex-row md:text-right">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl flex-1 w-full " />
                <div className='md:pl-16 md:pr-6 w-full'>
                    <h1 className="text-5xl font-bold flex-1 md:text-right" data-aos="fade-left" data-aos-delay="50"
                        data-aos-duration="1000" >Vehicle Portion!</h1>
                    <p className="py-6 md:text-right" data-aos="fade-left" data-aos-delay="75"
                        data-aos-duration="1100" >We are providing whole sale car parts. So make sure your loot with qualityful and durable car parts. Also track your order status here.</p>
                    <a href='#parts' className="btn btn-primary" data-aos="zoom-in-up" data-aos-duration="1200">Get Started</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;