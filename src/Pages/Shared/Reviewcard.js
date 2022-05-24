import React from 'react';
import noUser from './../../images/no-user.jpg'
import RatingComponent from './RatingComponent';

const Reviewcard = ({ review }) => {

    return (
        <div className="card max-w-lg bg-base-100 shadow-2xl mb-4">
            <div className="card-body">
                <div className='flex justify-between  mb-3'>
                    <div className='flex justify-start gap-4 items-center'>
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-info ring-offset-base-100 ">
                                <img src={review.img || noUser} />
                            </div>
                        </div>
                        <p className='text-secondary-content font-bold text-xl'>{review.name}</p>
                    </div>
                    <div>
                        <RatingComponent review={review} />
                    </div>
                </div>
                <hr />
                <div className='text-right mt-3'>
                    <p className='w-full py-2 wrap'>{review.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Reviewcard;