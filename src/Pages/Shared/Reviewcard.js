import React from 'react';
import noUser from './../../images/no-user.jpg'
import RatingComponent from './RatingComponent';

const Reviewcard = ({ review, index }) => {

    return (
        <div className=" max-w-lg bg-base-100 shadow-xl mb-4 border-2" data-aos={index % 2 === 0 ? `fade-up-right` : `fade-up-left`} data-aos-duration="1200">
            <div className="card-body">
                <div className='flex flex-col md:flex-row justify-between gap-4 items-center mb-3'>
                    <div className='flex flex-col md:flex-row justify-start gap-2 items-center flex-1'>
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-accent ring-offset-base-100 ">
                                <img src={review.img || noUser} />
                            </div>
                        </div>
                        <p className='text-secondary-content font-bold text-base flex-1'>{review.name}</p>
                    </div>
                    <div>
                        <RatingComponent review={review} />
                    </div>
                </div>
                <hr />
                <div className='text-right mt-3 w-full overflow-hidden'>
                    <p className='w-full py-2 wrap text-center text-sm break-words'>{review.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Reviewcard;