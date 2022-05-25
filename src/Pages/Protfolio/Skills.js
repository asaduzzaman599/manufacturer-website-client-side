import React from 'react';
import Skill from './Skill';

const Skills = () => {
    const skills = [
        { _id: 1, name: "HTML5" },
        { _id: 2, name: "CSS3" },
        { _id: 3, name: "BOOTSTRAP" },
        { _id: 4, name: "TAILWIND CSS" },
        { _id: 5, name: "JAVASCRIPTS" },
        { _id: 6, name: "ECMASCRIPT" },
        { _id: 7, name: "REACTJS" },
        { _id: 8, name: "REACT ROUTER" },
        { _id: 9, name: "REACT HOOK" },
        { _id: 10, name: "NODEJS " },
        { _id: 11, name: "EXPRESSJS " },
        { _id: 12, name: "MONGODB " },
        { _id: 13, name: "JWT TOKEN " },
        { _id: 14, name: "FIREBASE " },
        { _id: 15, name: "CHROME DEBUG TOOL " },
        { _id: 16, name: "HEROKU" },
        { _id: 17, name: "NETLIFY" },
    ]
    return (
        <div className='mt-16 mb-10'>
            <hr />

            <h3 className='text-2xl font-bold my-6'>Technologies &amp; Skills</h3>
            <div className=''>

                <div className=" flex flex-wrap gap-6 justify-center">
                    {
                        skills.map(skill => <Skill key={skill._id} skill={skill}></Skill>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Skills;