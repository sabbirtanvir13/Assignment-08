import React from 'react';
import { IoIosStar } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
const AppCard = ({socialData}) => {
const {title,downloads ,ratingAvg, image,companyName,description}=socialData
    return (

    
        <div className="card bg-base-100 w-96 shadow-sm mt-6 mb-5  transform hover:scale-105 transition-transform duration-300">
            
            <figure className='bg-gray-300 mx-auto p-6'>
                <img className='w-4/12 '
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {title}
                    <div className="badge badge-secondary">{companyName}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <div className="badge text-[#00D390] "> <FaDownload /> {downloads}M</div>
                 
                    <div className="badge text-[#FF8811] bg-[#FFF0E1]"> <IoIosStar /> {ratingAvg}</div>

                </div>
             
            </div>
              
        </div>
         
    );
};

export default AppCard;