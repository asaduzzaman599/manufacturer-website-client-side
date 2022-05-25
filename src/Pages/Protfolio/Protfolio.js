import React from 'react';
import CommonHeading from '../../Components/CommonHeading';
import About from './About';
import Education from './Education';
import Projects from './Projects';
const Protfolio = () => {
    return (
        <div>
            <CommonHeading>Protfolio</CommonHeading>
            <div className='w-4/5 mx-auto mb-10'>
                <About></About>
                <Education></Education>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default Protfolio;