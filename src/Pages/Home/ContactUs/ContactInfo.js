import React from 'react';

const ContactInfo = ({ contactInfo: { name, Icon, value } }) => {
    return (
        <div>
            <div className='p-10 flex flex-col md:flex-row items-center  gap-8 shadow-lg '>
                <Icon className="h-10 w-10 text-primary-content" />
                <div className='md:text-left text-center'>
                    <h3 className='text-xl font-bold'>{name}</h3>
                    <p className='text-sm'>{value}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;