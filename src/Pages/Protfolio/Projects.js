import React from 'react';
import Project from './Project';

const Projects = () => {

    const projects = [
        { _id: 1, name: "Warehouse Management Website", descriptions: ["Store house website to control inventory management and this website build with MERN.", "User can insert, update and delete the stock and can analytic the warehouse. Protected app."], tools: "Html, Tailwind CSS, JS, ES6, Rest API, ExpressJs, NodeJs, MongoDB, Firebase, JWT Token.", link: "https://storehouse-asaduzzaman599.web.app/", img: 'https://i.ibb.co/t3vgBLp/store-house.jpg' },
        { _id: 2, name: "Simple ToDo App", descriptions: ["Users can add and delete task. After Complete the app notify and strikethrough the task text.", "All data stored in database and app always protect users data. Users own task not showing to other."], tools: "Html, Tailwind CSS, DaisyUI, JS, ES6, ReactJs, ExpressJs, NodeJs, MongoDB, Firebase, Rest API.", link: "https://simple-todo-app-asaduzzaman599.web.app/", img: 'https://i.ibb.co/hH4TmJP/todo-app.jpg' },
        { _id: 3, name: "M's Capture", descriptions: ["User can booked services using this responsive website.", "User have to login otherwise they will not allowed for booked. Protected app."], tools: "Html, CSS, React Bootstrap, JS, ES6, ReactJS, React Hooks, React Router, Firebase.", link: "https://m-s-capture-asaduzzaman599.web.app/", img: 'https://i.ibb.co/9pSNMTB/Capture.jpg' }
    ]



    return (
        <div className='mt-6'>
            <hr />
            <h3 className='text-2xl font-bold my-6'>Projects</h3>
            <div className=''>

                <div className="grid md:grid-cols-2 gap-8">
                    {
                        projects.map(project => <Project key={project._id} project={project}></Project>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Projects;