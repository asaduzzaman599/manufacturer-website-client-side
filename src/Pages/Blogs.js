import React from 'react';
import CommonHeading from '../Components/CommonHeading';
import code from './../images/blog-image/code.png'
import output from './../images/blog-image/output.JPG'
const Blogs = () => {
    return (
        <div className='my-6'>
            <CommonHeading>Blogs</CommonHeading>
            <div className='w-4/5 mx-auto gaid gap-8 text-left'>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>How will you improve the performance of a React Application?</h3>
                    <p></p>
                    <li>we have to use to decrease rate of re-rendaring. we have to use key where need it help react to find out the component identically. use data locaally. load only necessary data not all. reusing component as much as possible</li>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h3>
                    <li>Local state – we can manage our data locally in component but those are only available for local component.</li>
                    <li>Global state – We can manage sate data globally which are excesable any component. context api hwlp to manage state data globally</li>
                    <li>Server state – By using server we can manage but we have to ensure server connection with ui.</li>
                    <li>URL state – we can sometime use usrl to send or receive data.</li>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>How does prototypical inheritance work?</h3>
                    <p>Prototypical inheritance help to use one object property to and other so that we don't have to write property or method every time for every new object. Here a prarent object share their property or method copy to child object which are inherited. It allows us to reuse property or methods.   </p>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                    <p>when a component render in the ui after rendering if any code or any variable changes behind it will not create any impact in the ui. thats why if we use products = [...] product then if any changes happend then it will not change the ui. so we have to use  const [products, setProducts] = useState([]). by using setProducts we can set new value also it always track the location of products where it used. when any changes happend in useState set products and it also change the value all over the ui where used.</p>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>

                    <p>Code :</p>
                    <img src={code} alt="" />

                    <p>""</p>
                    <p className='mt-6'>Output :</p>
                    <img src={output} alt="" />
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h3>
                    <p>Unit testing is testing individual component of code of project.It help to  track code debug and problems</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;