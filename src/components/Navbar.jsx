// // import React from 'react';
// // import { Link, NavLink } from 'react-router';
// // import Logoimg from '../assets/logo.png'
// // import { FaGithub } from "react-icons/fa";
// // import './Root.css';

// // const Navbar = () => {
// //   return (
// //     //        <div className="navbar sticky top-0 bg-base-100 shadow-sm">
// //     //   <div className="navbar-start">
// //     //     <div className="dropdown">
// //     //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// //     //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
// //     //       </div>
// //     //       <ul
// //     //         tabIndex={0}
// //     //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
// //     //         <li>
// //     //         <NavLink to='/'>Home</NavLink>
// //     //       </li>
// //     //       <li>
// //     //         <NavLink to='/app'>Apps</NavLink>
// //     //       </li>
// //     //       <li>
// //     //         <NavLink to='/installation'>Installation</NavLink>
// //     //       </li>
// //     //       </ul>
// //     //     </div>
// //     //    <div className='flex'>
// //     //     <img className='w-[40px]' src={Logoimg}alt="" />
// //     //      <Link to="/" className="btn btn-ghost text-xl">HERO.IO</Link>
// //     //    </div>
// //     //   </div>
// //     //   <div className="navbar-center hidden lg:flex">
// //     //     <ul className="menu menu-horizontal px-1">
// //     //       <li>
// //     //         <NavLink to='/'>Home</NavLink>
// //     //       </li>
// //     //       <li>
// //     //         <NavLink to='/app'>Apps</NavLink>
// //     //       </li>
// //     //       <li>
// //     //         <NavLink to='/installation'>Installation</NavLink>
// //     //       </li>


// //     //     </ul>
// //     //   </div>
// //     //   <div className="navbar-end">
// //     //     <button onClick={()=>window.open("https://github.com/sabbirtanvir13")} className="btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"><FaGithub /> Contribute</button>
// //     //   </div>
// //     // </div>

// //     <div className="sticky top-0 bg-base-100 shadow-sm  z-50">
// //       <div className=" mx-6 px-2">
// //         <div className="navbar">

// //           <div className="navbar-start">
// //             <div className="dropdown">
// //               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
// //                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round"
// //                     strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
// //                 </svg>
// //               </div>

// //               <ul
// //                 tabIndex={0}
// //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
// //               >
// //                 <li><NavLink to="/">Home</NavLink></li>
// //                 <li><NavLink to="/app">Apps</NavLink></li>
// //                 <li><NavLink to="/installation">Installation</NavLink></li>
// //                 <li><NavLink to="/about">About Us</NavLink></li>
// //                 <li><NavLink to="/contact">Contact</NavLink></li>
// //                 <li><NavLink to="/support">Support</NavLink></li>
// //               </ul>
// //             </div>

// //             <div className="flex">
// //               <img className="w-[40px]" src={Logoimg} alt="" />
// //               <Link to="/" className="btn btn-ghost text-xl">HERO.IO</Link>
// //             </div>
// //           </div>

// //           <div className="navbar-center hidden lg:flex">
// //             <ul className="menu menu-horizontal px-1">
// //               <li><NavLink to="/">Home</NavLink></li>
// //               <li><NavLink to="/app">Apps</NavLink></li>
// //               <li><NavLink to="/installation">Installation</NavLink></li>
// //               <li><NavLink to="/about">About Us</NavLink></li>
// //               <li><NavLink to="/contact">Contact</NavLink></li>
// //               <li><NavLink to="/support">Support</NavLink></li>
// //             </ul>
// //           </div>

// //           <div className="navbar-end">
// //             <button
// //               onClick={() => window.open("https://github.com/sabbirtanvir13")}
// //               className="btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"
// //             >
// //               <FaGithub /> Contribute
// //             </button>
// //           </div>

// //         </div>
// //       </div>
// //     </div>

// //   );
// // };

// // export default Navbar;


// import React, { useContext, useEffect, useState } from "react";
// import { NavLink, Link } from "react-router";
// import { AuthContext } from "../contexts/AuthContext";
// import Swal from "sweetalert2";

// const Navbar = () => {
//   const { User, signOutUser } = useContext(AuthContext);

//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

//   const handleSignOut = () => {
//     signOutUser().then(() => {
//       Swal.fire({
//         icon: "success",
//         title: "Logged Out",
//         timer: 1500,
//         showConfirmButton: false,
//       });
//     });
//   };

//   const menu = (
//     <>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/app">Apps</NavLink></li>
//       <li><NavLink to="/installation">Installation</NavLink></li>
//       <li><NavLink to="/about">About</NavLink></li>
//       <li><NavLink to="/support">Support</NavLink></li>
//     </>
//   );

//   return (
//     <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/40 shadow-[0_3px_12px_rgba(0,0,0,0.05)]">
//       <div className="max-w-7xl mx-auto px-4">

//         <div className="navbar h-20">

//           {/* LEFT */}
//           <div className="navbar-start flex items-center gap-2">
//             {/* Mobile Menu */}
//             <div className="dropdown lg:hidden">
//               <button tabIndex={0} className="btn btn-ghost p-2">
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
//                      viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round"
//                         d="M4 6h16M4 12h16M4 18h16"/>
//                 </svg>
//               </button>

//               <ul
//                 tabIndex={0}
//                 className="dropdown-content menu bg-white p-4 rounded-2xl w-56 shadow-xl mt-3"
//               >
//                 {menu}
//               </ul>
//             </div>

//             {/* LOGO */}
//             <Link to="/" className="text-3xl font-extrabold">
//               HERO <span className="text-blue-600">.IO</span>
//             </Link>
//           </div>

//           {/* CENTER MENU */}
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal gap-6 text-[16px] font-medium">
//               {menu}
//             </ul>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="navbar-end flex items-center gap-4">

//             {/* THEME SWITCH */}
//             <label className="flex cursor-pointer items-center">
//               <input
//                 type="checkbox"
//                 onChange={(e) => handleTheme(e.target.checked)}
//                 checked={theme === "dark"}
//                 className="toggle toggle-md"
//               />
//             </label>

//             {/* USER SECTION */}
//             {User ? (
//               <div className="relative group">
//                 <img
//                   src={User.photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
//                   className="w-11 h-11 rounded-full border-2 border-blue-500 cursor-pointer"
//                 />

//                 {/* Dropdown */}
//                 <div className="absolute right-0 mt-3 bg-white rounded-xl shadow-xl p-4 w-48 
//                                 opacity-0 group-hover:opacity-100 transition-all duration-200">
//                   <p className="font-semibold text-center">{User.displayName}</p>

//                   <button
//                     className="btn btn-sm w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white 
//                                mt-3 rounded-xl"
//                     onClick={handleSignOut}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <NavLink
//                   to="/auth/login"
//                   className="px-6 py-2 font-semibold rounded-xl border hover:bg-gray-100 
//                              transition-all"
//                 >
//                   Login
//                 </NavLink>

//                 <NavLink
//                   to="/auth/register"
//                   className="px-6 py-2 font-semibold rounded-xl 
//                              bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
//                 >
//                   Sign Up
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom"; // ✅ react-router-dom
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { User, signOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser().then(() => {
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        timer: 1500,
        showConfirmButton: false,
      });
    });
  };

  const menu = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/app">Apps</NavLink></li>
      <li><NavLink to="/installation">Installation</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/support">Support</NavLink></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/40 shadow-[0_3px_12px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar h-20">

          {/* LEFT */}
          <div className="navbar-start flex items-center gap-2">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <button tabIndex={0} className="btn btn-ghost p-2">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white p-4 rounded-2xl w-56 shadow-xl mt-3"
              >
                {menu}
              </ul>
            </div>

            {/* LOGO */}
            <Link to="/" className="text-3xl font-extrabold">
              HERO <span className="text-blue-600">.IO</span>
            </Link>
          </div>

          {/* CENTER MENU */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6 text-[16px] font-medium">
              {menu}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="navbar-end flex items-center gap-4">

            {/* THEME SWITCH */}
            <label className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                onChange={(e) => handleTheme(e.target.checked)}
                checked={theme === "dark"}
                className="toggle toggle-md"
              />
            </label>

            {/* USER SECTION */}
            {User ? (
              <div className="relative group">
                <img
                  src={User.photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
                  className="w-11 h-11 rounded-full border-2 border-blue-500 cursor-pointer"
                  alt={User.displayName || "User"}
                />

                {/* Dropdown */}
                <div className="absolute right-0 mt-3 bg-white rounded-xl shadow-xl p-4 w-48 
                                opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <p className="font-semibold text-center">{User.displayName || "User"}</p>

                  <button
                    className="btn btn-sm w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                               mt-3 rounded-xl"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <NavLink
                  to="/auth/login"
                  className="px-6 py-2 font-semibold rounded-xl border hover:bg-gray-100 
                             transition-all"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/auth/register"
                  className="px-6 py-2 font-semibold rounded-xl 
                             bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
