import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <Review></Review>

        </div>
    );
};

export default Home;