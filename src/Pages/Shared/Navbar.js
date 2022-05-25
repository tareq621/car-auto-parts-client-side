import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menubar = <>
        <li><Link to="/home" className='font-bold hover:text-white'>Home</Link></li>
        <li><a className='font-bold hover:text-white'>Shop</a></li>
        <li><a className='font-bold hover:text-white'>Blog</a></li>
        <li><a className='font-bold hover:text-white' >About</a></li>
        <li><a className='font-bold hover:text-white' >Contact Us</a></li>
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>
                <Link to="/" className="font-bold hover:text-white normal-case text-4xl ml-5">Auto Parts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/signup" className="font-bold mr-2 btn btn-ghost">Register</Link>
                <Link to="/login" className="font-bold mr-5 btn btn-ghost">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;