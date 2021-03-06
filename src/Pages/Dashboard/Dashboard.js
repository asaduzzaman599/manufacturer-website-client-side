import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import CommonHeading from '../../Components/CommonHeading';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const { admin, loading } = useAdmin()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col   p-10">
                {/* <!-- Page content here --> */}

                <CommonHeading>Welcome to Dashboard</CommonHeading>
                <Outlet />
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-primary-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {/* only user */}
                    {
                        !admin &&
                        <>
                            <li><NavLink to='/dashboard/myorder'>My Orders</NavLink></li>
                            <li><Link to='/dashboard/AddReview'>Add A Review</Link></li>
                        </>
                    }
                    {/* Only admin */}
                    {admin &&
                        <>
                            <li><Link to='/dashboard/manageOrder'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'> Make Admin</Link></li>
                            <li><Link to='/dashboard/manageProducts'>  Manage Products</Link></li>
                        </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;