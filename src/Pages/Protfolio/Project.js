import React from 'react';

const Project = ({ project }) => {
    return (
        <div class=" my-4 shadow-xl">
            <figure><img src={project.img} className='w-full border-2' alt='' /></figure>
            <div class="card-body">
                <h2 class="font-bold text-2xl text-primary">{project.name}</h2>

                <p className='font-bold'>Descriptions</p>
                {
                    project?.descriptions.map((description, index) => <li key={index} className='text-left'>{description}</li>)
                }
                <p className='font-bold'>Tools</p>
                <p>{project.tools}</p>
                <a href={project.link} target='_blank' className='btn btn-outline'>Visit</a>
            </div>
        </div>
    );
};

export default Project;