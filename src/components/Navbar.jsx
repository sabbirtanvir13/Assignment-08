import React from 'react';
import { Link, NavLink } from 'react-router';
import Logoimg from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import './Root.css';

const Navbar = () => {
  return (
    //        <div className="navbar sticky top-0 bg-base-100 shadow-sm">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    //         <li>
    //         <NavLink to='/'>Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/app'>Apps</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/installation'>Installation</NavLink>
    //       </li>
    //       </ul>
    //     </div>
    //    <div className='flex'>
    //     <img className='w-[40px]' src={Logoimg}alt="" />
    //      <Link to="/" className="btn btn-ghost text-xl">HERO.IO</Link>
    //    </div>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <NavLink to='/'>Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/app'>Apps</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/installation'>Installation</NavLink>
    //       </li>


    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <button onClick={()=>window.open("https://github.com/sabbirtanvir13")} className="btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"><FaGithub /> Contribute</button>
    //   </div>
    // </div>

    <div className="sticky top-0 bg-base-100 shadow-sm  z-50">
      <div className=" mx-6 px-2">
        <div className="navbar">

          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/app">Apps</NavLink></li>
                <li><NavLink to="/installation">Installation</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/support">Support</NavLink></li>
              </ul>
            </div>

            <div className="flex">
              <img className="w-[40px]" src={Logoimg} alt="" />
              <Link to="/" className="btn btn-ghost text-xl">HERO.IO</Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/app">Apps</NavLink></li>
              <li><NavLink to="/installation">Installation</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/support">Support</NavLink></li>
            </ul>
          </div>

          <div className="navbar-end">
            <button
              onClick={() => window.open("https://github.com/sabbirtanvir13")}
              className="btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"
            >
              <FaGithub /> Contribute
            </button>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Navbar;

