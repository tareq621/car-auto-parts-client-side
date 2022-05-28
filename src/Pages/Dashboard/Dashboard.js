import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile">
            <input id="sideBar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center mt-2">
                <h2 className='text-4xl text-secondary'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="sideBar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        user && <>
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                        </>
                    }
                    <li><Link to="/dashboard/addParts">Add Parts</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    <li><Link to={`/dashboard/profile/${user._id}`}>My Update Profile</Link></li>
                    <li><Link to="/dashboard/users">Make Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;