import React from 'react';

import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {




    // 
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-secondary to-primary'>Welcome to Dashboard</h1>
                <Outlet></Outlet>
                
            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={"/dashboard"} >My Dash Board</Link></li>
                    <li><Link to={'review'} >My Reviews</Link></li>
                    <li><Link to={'histry'} >My Histry</Link></li>
                    <li><Link to={'all-users'} >My All-User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;