import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
const NavigationMenu = () => {
    const navItems = <>
        <Link className='hover:text-[#FF3811] duration-300 p-2 lg:px-4 font-semibold' to={'/'}>Home</Link>
        <Link className='hover:text-[#FF3811] duration-300 p-2 lg:px-4 font-semibold' to={'/about'}>About</Link>
        <Link className='hover:text-[#FF3811] duration-300 p-2 lg:px-4 font-semibold' to={'/services'}>Services</Link>
        <Link className='hover:text-[#FF3811] duration-300 p-2 lg:px-4 font-semibold' to={'/blog'}>Blog</Link>
        <Link className='hover:text-[#FF3811] duration-300 p-2 lg:px-4 font-semibold' to={'/contact'}>Contact</Link>
    </>
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {navItems}
                        <Link to={'/'} className="py-2 px-4 border border-orange-600 text-[#FF3811] rounded-md font-semibold md:hidden ">Appointment</Link>
                    </ul>
                </div>
                <Link to={'/'}>
                    <img src={logo} alt="" className='h-20 w-20 mx-4 lg:mx-0' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className='flex'>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
                <Link to={'/'} className="py-1 px-2 md:py-2 md:px-4 border border-orange-600 text-[#FF3811] rounded-md font-semibold hidden md:block">Appointment</Link>
            </div>
        </div>
    );
};

export default NavigationMenu;