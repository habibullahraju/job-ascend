import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
        <NavLink  to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Home</NavLink>
        <NavLink to="/chart" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Statistics</NavLink>
        <NavLink to="/applied" className={({ isActive }) => isActive ? "bg-blue-500 font-bold" : ""}>Applied Jobs</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Blog</NavLink>
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost normal-case font-bold text-black text-2xl">Job Ascend</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-3">
    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Home</NavLink>
    <NavLink to="/chart" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Statistics</NavLink>
        <NavLink to="/applied" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Applied Jobs</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Blog</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-600">Star Applying</a>
  </div>
            </div>
            {/* <a href="/">home</a><a href="/blog">blog</a><a href="/applied">applied</a><a href="/chart">chart</a> */}
        </div>
    );
};

export default Header;