import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const menubar = <>
        <li><Link to="/home" className='font-bold hover:text-white'>Home</Link></li>
        <li><Link to="/blog" className='font-bold hover:text-white'>Manage Products</Link></li>
        <li><Link to="/portfolio" className='font-bold hover:text-white' >My Portfolio</Link></li>
        <li><Link to="/dashboard" className='font-bold hover:text-white' >Dashboard</Link></li>
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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

                <Link to="/signup" className="hover:text-white font-bold mr-2 btn btn-ghost">Register</Link>

                {
                    user
                        ?
                        <button className="font-bold mr-5 btn btn-ghost hover:text-white" onClick={logout}>Sign Out</button>
                        :
                        <Link to="/login" className="font-bold mr-5 btn btn-ghost">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;