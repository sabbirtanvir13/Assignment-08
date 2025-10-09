import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgbg from '../assets/appnotbg.png'
import cartoonbg from '../assets/cartoon.png'
import notfoundbg from '../assets/notfound.png'
const ErrorApp = () => {
  const location = useLocation();
  const message = location.state?.message || "Something went wrong!";
    return (
       
       <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      
          <img src={imgbg} alt="" />
        <img className='mt-[-310px]' src={cartoonbg} alt="" />
        <img src={notfoundbg} alt="" />
    
      <h1 className="text-6xl font-bold text-red-500 mb-4">OPPS!! APP NOT FOUND😢</h1>
      <p className="text-lg text-gray-600 mb-6"> {message}The App you are requesting is not found on our system.  please try another apps</p>
      <Link
        to="/"
        className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white hover:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default ErrorApp;