import React from 'react';
import myBGPic from './../../images/personal/my-bg-pic.png'
import { FaRegEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <section className='md:flex items-center justify-center'>
            <div className='flex-1'>
                <img src={myBGPic} className='md:w-4/5 p-10' alt="" />
            </div>
            <div className='flex-1 w-full text-center md:text-left'>
                <h3 className='md:text-4xl text-3xl my-5'>Hi, <span className=' font-bold'> I'm Asaduzzaman</span></h3>
                <p className='md:text-2xl text-xl my-5 text-gray-500'>I am Mohammad Asaduzzaman Professional Web Developer &amp; I am now working as a MERN developer </p>

                <div className='bg-blue-300 p-10 rounded'>
                    <h3 className='font-bold text-xl  flex items-center gap-2'>Email Me <FaRegEnvelope /> </h3>
                    <p className='break-words'>asaduzzamansoumit@gmail.com</p>
                </div>
            </div>
        </section>
    );
};

export default About;