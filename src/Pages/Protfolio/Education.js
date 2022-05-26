import React from 'react';
import Institute from './Institute';

const Education = () => {
    const institutes = [
        { _id: 1, level: "School", institute: "Bhasantek School & College", duration: "2003 - 2014", descriptions: "Completed my School from Bhasantek school & College, Dhaka. I Passed ssc in 2014 with background science." },
        { _id: 2, level: "College", institute: "Cambrian College", duration: "2014 - 2016", descriptions: "Completed my College from Cambrian Collage, Dhaka. I Passed HSC in 2016 with background science." },
        { _id: 3, level: "University", institute: "Independent University, Bangladesh", duration: "2017 - 2021", descriptions: "Completed my Graduation on CSE from Independent University, Bangladesh in October, 2021" },
    ]

    return (
        <section>
            <hr />
            <h3 className='text-2xl font-bold my-6'>Education</h3>
            <div className=' grid md:grid-cols-3 grid-cols-1 gap-6'>
                {
                    institutes.map(institute => <Institute key={institute._id} institute={institute}></Institute>)
                }
            </div>
        </section>
    );
};

export default Education;