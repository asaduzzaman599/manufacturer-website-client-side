import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ContactUs from './ContactUs/ContactUs';
import OurCapability from './OurCapability';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <Review></Review>
            <OurCapability></OurCapability>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;