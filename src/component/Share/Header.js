import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../doctor_logo.png'

const Header = () => {

  const [user] = useAuthState(auth)

  if (user) {
    console.log(user)
  }

  const logOut = () => {
    signOut(auth)
  }


  const menuItems = <>
    <li><Link to={'home'}>Home</Link></li>
    <li><Link to={'appointment'}>Appointment</Link></li>
    <li><Link to={'review'}>Reviews</Link></li>
    <li><Link to={'contact'}>Contact Us</Link></li>
    <li><Link to={'about'}>About</Link></li>
    {user && <li><Link to={'dashboard'}>Dashboard</Link></li>}
    {user ? <button onClick={logOut} className='btn mx-3 btn-secondary'>Log Out</button>
      :
      <li><Link to={'log-in'}>Log In</Link></li>

    }
    {user ? '' : <li><Link to={'register'}>Register</Link></li>}

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" >
          <img style={{ width: '40px' }} className='mr-3' src={logo} alt='' />
          Doctor Portal</a>
      </div>
      <div className='navbar-end'>
        <label tabIndex="1" htmlFor='dashboard-sidebar' className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

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