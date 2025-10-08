import React from 'react';
import phonebanner from '../assets/hero.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='ml-[350px] mt-8'>
            <div className='max-w-6/12 mx-auto gap-5'>
                <h1 className='text-5xl ml-10 font-bold  '>
                    We Build <br />
                     <span className='text-purple-700'>Productive </span>Apps
                </h1>
                <p className='mt-4'>AtHERO.IO, we craft innovative apps designed to make everyday life <br />simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='ml-[100px] mt-4'>   <button onClick={()=>window.open("https://play.google.com/store")} className='mr-4 btn'><FaGooglePlay />  Google Play</button>
                    <button onClick={()=>window.open("https://apps.apple.com/app/id")} className='btn'> <FaAppStoreIos /> App Store</button>
                </div>
            </div>

            <div className='max-w-6/12 mx-auto mt-4'>
                <img className='w-[442px] ' src={phonebanner} alt="" />
            </div>
        </div>
    );
};

export default Banner;