import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className='bg-neutral '>
            <div className="w-4/5 mx-auto grid md:grid-cols-5 grid-cols-1 p-10 text-neutral-content  ">
                <div className='md:col-span-3  md:text-left text-center'>
                    <Link to='/' className="text-3xl font-bold">Vehicle Portions</Link>

                </div>
                <div className=' md:text-left text-center grid'>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                </div>
                <div className=' md:text-lefttext-center grid'>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <p>{/* <FaFacebookF /> */}<small className='text-gray-400 mb-4'>copyright &copy;{year}</small></p>
        </footer>
    );
};

export default Footer;