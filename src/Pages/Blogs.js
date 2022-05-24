import React from 'react';
import CommonHeading from '../Components/CommonHeading';

const Blogs = () => {
    return (
        <div className='my-6'>
            <CommonHeading>Blogs</CommonHeading>
            <div className='w-4/5 mx-auto gaid gap-8 text-left'>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>How will you improve the performance of a React Application?</h3>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h3>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>How does prototypical inheritance work?</h3>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h3>
                </div>
            </div>
        </div>
    );
};

export default Blogs;