import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import errorimg from '../assets/error-404.png'
const ErrorPage = () => {
     const error = useRouteError();
  return <>
   <Navbar></Navbar>
         
  <div className='max-w-6xl mx-auto lg	:ml-[290px] md:ml-[710px] mt-[110px]'>{error.message}
    <img src={errorimg} alt="" />
    <div className='ml-[100px]'>
      <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
      <p className='mt-2'>The page you are looking for is not available.</p>
      <button className='btn mt-2 ml-[110px]'>Go Back!</button>
    </div>
   </div>;
     <Footer></Footer>
  </>
  
  
};

export default ErrorPage;