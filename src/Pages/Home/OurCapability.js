import React, { useState } from 'react';
import image2 from './../../images/parts/image2.jpg'
const OurCapability = () => {


    return (
        <section className='mt-12' id='contact'>
            <hr />
            <div className=' w-5/6 mx-auto '>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 p-10 '>
                    <div className='text-center md:text-left h-full flex flex-col gap-6 h-full justify-evenly ' >
                        <div className=''>
                            <h3 className='text-2xl font-bold mb-10' data-aos="fade-up-right" data-aos-delay="50"
                                data-aos-duration="1000">Our Capability</h3>
                            <p className='text-sm text-justify' data-aos="fade-up-right" data-aos-delay="75"
                                data-aos-duration="1200">We are always aiming to exceed Clients expectations and provide great car parts deal solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our production.</p>
                        </div>
                        <div><button className="btn btn-primary">Explore More</button></div>
                    </div>
                    <div>
                        <img src={image2} className='w-full h-30 rounded-3xl' alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCapability;