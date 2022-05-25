import React from 'react';

const Project = ({ project }) => {
    return (
        <div className=" my-4 shadow-xl">
            <figure><img src={project.img} className='w-full border-2' alt='' /></figure>
            <div className="card-body">
                <h2 className="font-bold text-2xl text-primary">{project.name}</h2>

                <p className='font-bold'>Description</p>
                <ol className='list-decimal'>
                    {
                        project?.descriptions.map((description, index) => <li key={index} className='text-left'>{description}</li>)
                    }
                </ol>
                <p className='font-bold'>Tools</p>
                <p>{project.tools}</p>
                <a href={project.link} target='_blank' className='btn btn-outline'>Visit</a>
            </div>
        </div>
    );
};

export default Project;