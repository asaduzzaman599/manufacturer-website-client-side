import React from 'react';

const Institute = ({ institute }) => {
    return (
        <div class="card max-w-lg bg-blue-200 shadow-xl image-full">
            <figure><img src="" /></figure>
            <div class="card-body">
                <p className='font-bold'>{institute.level}</p>
                <h3 className='font-bold text-xl'>{institute.institute}</h3>
                <p className='font-bold '>{institute.duration}</p>
                <p className=''>{institute.descriptions}</p>

            </div>
        </div>
    );
};

export default Institute;