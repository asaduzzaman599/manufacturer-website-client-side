import React from 'react';
import CommonHeading from '../Components/CommonHeading';
import code from './../images/blog-image/code.png'
import output from './../images/blog-image/output.JPG'
const Blogs = () => {
    return (
        <div className='my-6'>
            <CommonHeading>Blogs</CommonHeading>
            <div className='w-4/5 mx-auto grid gap-12 text-left my-10'>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold mb-5'>How will you improve the performance of a React Application?</h3>

                    <p>we have decrease the rate of re-rendaring component. we have to use key where need it help react to find out the component identically. use state locally where need . load only necessary data not all otherwise  it will waste memory space. reusing component as much as possible.</p>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold mb-5'>What are the different ways to manage a state in a React application?</h3>
                    <li><b>Local state :</b> we can manage our state locally with in component but those are only available for locally. </li>
                    <li><b>Global state :</b> We can manage sate  globally which are excesable any component. context api hwlp to manage state data globally</li>
                    <li><b>Server state :</b> By using server we can manage but we have to ensure server connection with ui.</li>
                    <li><b>URL state :</b> we can sometimee use url to send or receive data with help of some hooks like.</li>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold mb-5'>How does prototypical inheritance work?</h3>
                    <p>Prototypical inheritance help to use one object property to another so that we don't have to write property or method every time for every new object. Here a prarent object share their property or method copy to child object which are inherited. It allows us to reuse property or methods. It helps to identify  similer characteristic and behaviour object .   </p>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold mb-5'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                    <p>when a component render in the ui after rendering it immutable. If any code or any variable changes behind it will not create any impact in the ui. Thats why if we use products = [...] directly and then if any changes happend it will not change the ui. so we have to take help of useState hook  const [products, setProducts] = useState([]). Here by using setProducts we can set new value also it always track the location of products value where it used. when any changes happend in products using useState setProducts it change the value all over the ui where used.</p>
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold mb-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>

                    <p className='mt-6 font-bold mb-4'>Code :</p>
                    <img src={code} alt="" />

                    <p className='mt-6 font-bold mb-4'>Output :</p>
                    <img src={output} alt="" />
                </div>
                <div className="shadow-lg p-6">
                    <h3 className='text-xl font-bold mb-5'>What is a unit test? Why should write unit tests?</h3>
                    <p>Unit testing is testing individual component of code of project.It help to  track code debug and problems of a project developing time individually. it check functions, methods or compoents accuracy and help to improve performance. Unit testing ensuring products code quality.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;