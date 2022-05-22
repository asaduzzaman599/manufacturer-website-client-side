import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth"
import { auth } from "../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth)

    const menuItems = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        {
            user ?
                <li><button className='btn btn-ghost' onClick={() => signOut(auth)}>LOGOUT</button></li>
                : <>
                    <li><NavLink to='/login'>LOGIN</NavLink></li>
                    <li><NavLink to='/signup'>SIGN Up</NavLink></li>
                </>
        }

    </>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Vehicle Portions</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;