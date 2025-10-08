import React from 'react';
import useApps from '../hooks/useApps';
import { useParams } from 'react-router';
import downloadsimg from '../assets/downloads.png'
import starimg from '../assets/star.png'
import likeimg from '../assets/like.png'
const AppDetails = () => {
    const { id } = useParams();
    const { apps } = useApps()

    const singleapp = apps?.find(app => app.id === Number(id));

    const { image, reviews, size, downloads, ratingAvg, companyName, description } = singleapp || {};

    // const handleAddinstallation = () => {
    //     const existingList = JSON.parse(localStorage.getItem('innnnnnn'))
    //     let updatedList=[]
    //     if (existingList) {
    //         updatedList=[...existingList,singleapp]
    //     }
    //     else{
    //         updatedList.push(singleapp)
    //     }
    //      localStorage.setItem('installation', JSON.stringify(updatedList))
    // }

    const handleAddinstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('installation') || '[]');

    //  check for duplicates
    const isAlreadyInstalled = existingList.some(app => app.id === singleapp.id);
    if (isAlreadyInstalled) {
        alert("App already installed!");
        return;
    }
    const updatedList = [...existingList, singleapp];
    localStorage.setItem('installation', JSON.stringify(updatedList));

    alert(`${singleapp.description} installed successfully!`);
}


    return (
        <div className=''>
            <div className='flex gap-10 content-center items-center  p-6'>
                <img className='w-[300px]' src={image} alt="" />
                <div>
                    <h1 className='font-bold text-3xl'>{description}</h1>
                    <p className='mt-2'>Developed by : {companyName}</p>
                    <div>
                        {/* downloads */}
                        <div className='grid grid-cols-3 mt-4'>
                            <div>
                                <img src={downloadsimg} alt="" />
                                <p>Downloads</p>
                                <h1 className='font-bold text-[25px]'> {downloads} M</h1>
                            </div>
                            <div>
                                <img src={starimg} alt="" />
                                <p>Average Ratings</p>
                                <h1 className='font-bold text-[25px]'> {ratingAvg} </h1>
                            </div>
                            <div>
                                <img src={likeimg} alt="" />
                                <p>Total Reviews</p>
                                <h1 className='font-bold text-[25px]'> {reviews} K</h1>
                            </div>
                        </div>
                        <button onClick={handleAddinstallation} className='btn rounded mt-4 bg-[#00D390] text-white'>
                            Install Now ({size})
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;