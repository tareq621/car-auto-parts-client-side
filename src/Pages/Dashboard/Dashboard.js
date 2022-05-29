import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);
    return (
        <div className="drawer drawer-mobile">
            <input id="sideBar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center mt-2">
                <h2 className='text-4xl text-secondary'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="sideBar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        !admin && <>
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                        </>
                    }
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {admin &&
                        <>
                            <li><Link to="/dashboard/users">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageAllOrders">Manage All orders</Link></li>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                            <li><Link to="/dashboard/addParts">Add Parts</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div >
    );
};

export default Dashboard;