
import React from "react";
import phonebanner from "../assets/hero.png";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 py-12">
      <div className="max-w-6xl mx-auto text-center md:text-center">
       
        <div className="flex flex-col md:flex-col lg:block items-center">
       
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Build <br />
              <span className="text-purple-700">Productive</span> Apps
            </h1>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              At <span className="font-semibold">HERO.IO</span>, we craft innovative apps 
              designed to make everyday life simpler, smarter, and more exciting.
              <br />
              Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => window.open("https://play.google.com/store")}
                className="btn bg-black text-white hover:bg-gray-800"
              >
                <FaGooglePlay className="mr-2" /> Google Play
              </button>
              <button
                onClick={() => window.open("https://apps.apple.com/app/id")}
                className="btn bg-black text-white hover:bg-gray-800"
              >
                <FaAppStoreIos className="mr-2" /> App Store
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-10 flex justify-center">
            <img
              className="w-72 md:w-96 lg:w-[440px] drop-shadow-lg"
              src={phonebanner}
              alt="App banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
