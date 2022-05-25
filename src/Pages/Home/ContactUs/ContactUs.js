import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import CommonTitle from '../../../Components/CommonTitle';
import ContactInfo from './ContactInfo';

const ContactUs = () => {
    const contactInfos = [
        { id: 1, name: "Phone", value: "+8801534681329", Icon: PhoneIcon },
        { id: 2, name: "Email", value: "asaduzzmansoumit@gmail.com", Icon: MailIcon },
        { id: 3, name: "Our Office", value: "Dhaka Cantonement, Dhaka", Icon: LocationMarkerIcon },
    ]
    return (
        <div className='mt-12' id='contact'>
            <hr />
            <CommonTitle>Contact Us</CommonTitle>
            <div className=' mb-10 md:w-4/5 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-2'>
                <div>

                    {
                        contactInfos.map(contactInfo => <ContactInfo key={contactInfo} contactInfo={contactInfo}></ContactInfo>)
                    }
                </div>
                <div className='p-10 grid gap-4'>
                    <h3 className='text-2xl font-semibold'> You can sent us message</h3>
                    <div>
                        <input type="text" placeholder="Your Name" class="input input-bordered w-full " />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" class="input input-bordered w-full" />
                    </div>
                    <div>
                        <textarea class="textarea textarea-bordered w-full" placeholder="What's on your main?"></textarea>
                    </div>
                    <div>
                        <button className='btn btn-primary w-full'>Submit</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactUs;