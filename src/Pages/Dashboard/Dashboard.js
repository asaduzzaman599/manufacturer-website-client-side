import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CommonHeading from '../../Components/CommonHeading';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}

                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay "></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-primary-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/myprofile'>My Profile</Link></li>
                    {/* only user */}
                    <li><Link to='/myorder'>My Orders</Link></li>
                    <li><Link to='/AddReview'>Add A Review</Link></li>
                    {/* Only admin */}
                    <li><Link to='/manageOrder'>Manage All Orders</Link></li>
                    <li><Link to='/addProduct'>Add A Product</Link></li>
                    <li><Link to='/makeAdmin'> Make Admin</Link></li>
                    <li><Link to='/manageProducts'>  Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;