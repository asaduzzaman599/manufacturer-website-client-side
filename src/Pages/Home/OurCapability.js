import React, { useState } from 'react';
import CommonTitle from '../../Components/CommonTitle';
import image1 from './../../images/parts/image1.jpg'
import image2 from './../../images/parts/image2.jpg'
import image3 from './../../images/parts/image3.jpg'
const OurCapability = () => {
    const imageArr = [image1, image2, image3]
    const [counter, setCounter] = useState(0)

    setInterval(() => {
        const count = (counter + 1) % imageArr.length;
        setCounter(count)
    }, 2000)
    return (
        <div className='mt-12 w-5/6 mx-auto ' id='contact'>
            <hr />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 p-10 '>
                <div className='text-center md:text-left h-full flex flex-col gap-6 h-full justify-evenly ' >
                    <div className=''>
                        <h3 className='text-2xl font-bold mb-10' data-aos="fade-up-right" data-aos-delay="50"
                            data-aos-duration="1000">Our Capability</h3>
                        <p className='text-sm text-justify' data-aos="fade-up-right" data-aos-delay="75"
                            data-aos-duration="1200">We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our production.</p>
                    </div>
                    <div><button className="btn btn-primary">Explore More</button></div>
                </div>
                <div>
                    <img src={imageArr[1]} className='w-full h-30 rounded-3xl' />
                </div>
            </div>

        </div>
    );
};

export default OurCapability;