// import React from 'react';
// import useApps from '../hooks/useApps';
// import { useParams } from 'react-router';
// import downloadsimg from '../assets/downloads.png'
// import starimg from '../assets/star.png'
// import likeimg from '../assets/like.png'
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
// const AppDetails = () => {
//     const { id } = useParams();
//     const { apps } = useApps()

//     const singleapp = apps?.find(app => app.id === Number(id));

//     const { image, reviews, size, downloads, ratingAvg, companyName, description, ratings } = singleapp || {};


//     const handleAddinstallation = () => {
//         const existingList = JSON.parse(localStorage.getItem('installation') || '[]');

//         //  check for duplicates
//         const isAlreadyInstalled = existingList.some(app => app.id === singleapp.id);
//         if (isAlreadyInstalled) {
//             alert("App already installed!");
//             return;
//         }
//         const updatedList = [...existingList, singleapp];
//         localStorage.setItem('installation', JSON.stringify(updatedList));

//         alert(`${singleapp.description} installed successfully!`);
//     }


//     return (
//         <div className=''>
//             <div className='flex gap-10 content-center items-center  p-6'>
//                 <img className='w-[300px]' src={image} alt="" />
//                 <div>
//                     <h1 className='font-bold text-3xl'>{description}</h1>
//                     <p className='mt-2'>Developed by : {companyName}</p>
//                     <div>
//                         {/* downloads */}
//                         <div className='grid grid-cols-3 mt-4'>
//                             <div>
//                                 <img src={downloadsimg} alt="" />
//                                 <p>Downloads</p>
//                                 <h1 className='font-bold text-[25px]'> {downloads} M</h1>
//                             </div>
//                             <div>
//                                 <img src={starimg} alt="" />
//                                 <p>Average Ratings</p>
//                                 <h1 className='font-bold text-[25px]'> {ratingAvg} </h1>
//                             </div>
//                             <div>
//                                 <img src={likeimg} alt="" />
//                                 <p>Total Reviews</p>
//                                 <h1 className='font-bold text-[25px]'> {reviews} K</h1>
//                             </div>
//                         </div>
//                         <button onClick={handleAddinstallation} className='btn rounded mt-4 bg-[#00D390] text-white'>
//                             Install Now ({size})
//                         </button>
//                     </div>
//                 </div>

//             </div>

//             {/* chats */}
//             {/* <div className='space-y-3 p-3'>
//                 <h1 className='text-[24px] font-bold'>Ratings</h1>
//                 <div className=''>
//                     {singleapp?.ratings?.map((rate, index) => (
//                         <div key={index}>
//                            <BarChart width={500} height={400}>
//                             <XAxis dataKey='count'></XAxis>
//                             <YAxis></YAxis>
//                             <Bar dataKey='name' fill='bg-[#FF8811]'></Bar>
//                            </BarChart>
//                         </div>
//                     ))} */}

//             {/* Ratings Chart */}
//             <div className="space-y-3 p-3">
//                 <h1 className="text-[24px] font-bold">Ratings</h1>

//                 {singleapp?.ratings && (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <BarChart data={singleapp.ratings}>
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Bar dataKey="count" fill="#FF8811" />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 )}
//             </div>






//         </div>
//             </div >
//         </div >
//     );
// };

// export default AppDetails;


import React from 'react';
import useApps from '../hooks/useApps';
import { useParams } from 'react-router';
import downloadsimg from '../assets/downloads.png';
import starimg from '../assets/star.png';
import likeimg from '../assets/like.png';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
    const { apps } = useApps();

    const singleapp = apps?.find(app => app.id === Number(id));
    const { image, reviews, size, downloads, ratingAvg, companyName, description, ratings } = singleapp || {};

    const handleAddinstallation = () => {
        const existingList = JSON.parse(localStorage.getItem('installation') || '[]');
        const isAlreadyInstalled = existingList.some(app => app.id === singleapp.id);

        if (isAlreadyInstalled) {
            alert('App already installed!');
            return;
        }

        const updatedList = [...existingList, singleapp];
        localStorage.setItem('installation', JSON.stringify(updatedList));
    alert(`${singleapp.description} installed successfully!`);
    };

    return (
        <div className="p-4 md:p-8">
    
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-md p-6">
                <img
                    className="w-[250px] md:w-[300px] rounded-xl object-contain"
                    src={image}
                    alt={description}
                />

                <div className="flex-1">
                    <h1 className="font-bold text-2xl md:text-3xl text-gray-800">{description}</h1>
                    <p className="mt-2 text-gray-500">Developed by: <span className="font-medium">{companyName}</span></p>
                    <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <img src={downloadsimg} alt="downloads" className="mx-auto w-10 mb-2" />
                            <p className="text-gray-600 text-sm">Downloads</p>
                            <h1 className="font-bold text-xl">{downloads} M</h1>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <img src={starimg} alt="ratings" className="mx-auto w-10 mb-2" />
                            <p className="text-gray-600 text-sm">Average Rating</p>
                            <h1 className="font-bold text-xl">{ratingAvg}</h1>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <img src={likeimg} alt="reviews" className="mx-auto w-10 mb-2" />
                            <p className="text-gray-600 text-sm">Total Reviews</p>
                            <h1 className="font-bold text-xl">{reviews} K</h1>
                        </div>
                    </div>
                    <button
                        onClick={handleAddinstallation}
                        className="mt-6 bg-[#00D390] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#00b67a] transition duration-300"
                    >
                        Install Now ({size} MB)
                    </button>
                </div>
            </div>




            <div className="bg-white mt-10 p-6 rounded-2xl shadow-md">
                <h1 className="text-[22px] font-bold text-gray-800 mb-4 text-center md:text-left">
                    Ratings
                </h1>

                {ratings && (
                    <div className="w-full  overflow-x-auto">
                        <div className="min-w-[320px] sm:min-w-[400px] md:min-w-[500px]">
                            <BarChart width={500} height={400} data={ratings}>
                                <XAxis dataKey="name" tick={{ fill: '#555', fontSize: 12 }} />
                                <YAxis tick={{ fill: '#555', fontSize: 12 }} />
                                <Tooltip />
                                <Bar dataKey="count" fill="#FF8811" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default AppDetails;
