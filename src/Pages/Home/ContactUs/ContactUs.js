import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { toast } from 'react-toastify';
import CommonTitle from '../../../Components/CommonTitle';
import ContactInfo from './ContactInfo';

const ContactUs = () => {
    const contactInfos = [
        { _id: 1, name: "Phone", value: "+8801534681329", Icon: PhoneIcon },
        { _id: 2, name: "Email", value: "asaduzzmansoumit@gmail.com", Icon: MailIcon },
        { _id: 3, name: "Our Office", value: "Dhaka Cantonement, Dhaka", Icon: LocationMarkerIcon },
    ]
    return (
        <section className='mt-12' id='contact'>
            <hr />
            <CommonTitle>Contact Us</CommonTitle>
            <div className=' mb-10 md:w-4/5 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='grid gap-4 grid-cols-1'>

                    {
                        contactInfos.map(contactInfo => <ContactInfo key={contactInfo._id} contactInfo={contactInfo}></ContactInfo>)
                    }
                </div>
                <div className='p-10 grid gap-4'>
                    <h3 className='text-2xl font-semibold'> You can sent us message</h3>
                    <div>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered w-full" placeholder="What's on your main?"></textarea>
                    </div>
                    <div>
                        <button className='btn btn-primary w-full' onClick={() => toast.success("Thank you. We will contact soon")}>Submit</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ContactUs;