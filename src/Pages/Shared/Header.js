import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth"
import { auth } from "../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()

    console.log(location.pathname)

    const menuItems = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/protfolio'>PROTFOLIO</NavLink></li>
        <li><NavLink to='/blog'>BLOGS</NavLink></li>
        {
            user ?

                <>
                    <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
                    <li><button className='btn btn-ghost' onClick={() => signOut(auth)}>LOGOUT</button></li>
                </>
                : <>
                    <li><NavLink to='/login'>LOGIN</NavLink></li>
                    <li><NavLink to='/signup'>SIGN Up</NavLink></li>
                </>
        }

    </>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}
                    </ul>
                </div>
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl " to='/'>Vehicle Portions</Link>
                </div>
                {location?.pathname.includes('/dashboard') && <label for="my-drawer-2" className=" drawer-button lg:hidden rounded-full ml-4"  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </label>}

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">

                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;