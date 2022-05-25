import React from 'react';

const Skill = ({ skill }) => {
    return (
        <div className=' flex justify-center items-center h-8'>
            <p className='font-bold'>{skill?.name}</p>
        </div>
    );
};

export default Skill;