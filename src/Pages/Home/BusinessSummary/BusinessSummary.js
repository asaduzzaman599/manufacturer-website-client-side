import { ClockIcon, GlobeIcon, StatusOnlineIcon, ThumbUpIcon, UserGroupIcon, WifiIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import Summary from './Summary';

const BusinessSummary = () => {

    const summarys = [
        { _id: 1, name: "Happy Client", count: 300, Icon: UserGroupIcon },
        { _id: 2, name: "Shipped Order ", count: 900, Icon: ClockIcon },
        { _id: 3, name: "Country", count: 100, Icon: GlobeIcon },
        { _id: 4, name: "Feedbacks", count: 200, Icon: ThumbUpIcon },
    ]
    return (
        <div className=' bg-gradient-to-r from-primary  to-info py-10 mt-6 text-base-100' data-aos="fade-down"
            data-aos-duration="3000">
            <h3 className='text-xl font-bold mb-14 text-base-100 hidden md:block'>Clients Trust and Satisfaction with Durable Parts is Our main Goal</h3>
            <div className='w-4/5 grid md:grid-cols-4 gap-8 mx-auto'>
                {
                    summarys.map(summary => <Summary key={summary._id} summary={summary}></Summary>)
                }
            </div>

        </div>
    );
};

export default BusinessSummary;