import React from 'react';
import noUser from './../../images/no-user.jpg'

const Reviewcard = ({ review }) => {

    return (
        <div class="card max-w-lg bg-base-300 shadow-xl">
            <div class="card-body">
                <div className='flex justify-between'>
                    <div className='flex justify-start gap-4 items-center'>
                        <div class="avatar">
                            <div class="w-12 rounded-full ring ring-base-100 ring-offset-base-100 ">
                                <img src={review.img || noUser} />
                            </div>
                        </div>
                        <p className='text-secondary-content font-bold text-xl'>{review.name}</p>
                    </div>
                    <div>
                        <p>* * * * *</p>
                    </div>
                </div>
                <div className='text-right'>
                    <small className='text-primary'>Description</small>
                    <p className=''>{review.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Reviewcard;