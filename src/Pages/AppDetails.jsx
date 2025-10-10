
import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useApps';
import { useParams } from 'react-router';
import downloadsimg from '../assets/downloads.png';
import starimg from '../assets/star.png';
import likeimg from '../assets/like.png';
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, ComposedChart, CartesianGrid, Legend, Area } from 'recharts';
import {
    ComposedChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Bar, Line
} from 'recharts';
import { toast, ToastContainer } from 'react-toastify';


const AppDetails = () => {
    const { id } = useParams();
    const { apps } = useApps();

    const [disabled, setDisabled] = useState(false);
    const singleapp = apps?.find(app => app.id === Number(id));
    // loafding

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installation') || '[]');
        const isAlreadyInstalled = existingList.some(app => app.id === Number(id));
        if (isAlreadyInstalled) setDisabled(true);
    }, [id]);



    const { image, reviews, size, downloads, ratingAvg, articles, title, companyName, description, ratings } = singleapp || {};

    const handleAddinstallation = () => {

        const existingList = JSON.parse(localStorage.getItem('installation') || '[]');
        const isAlreadyInstalled = existingList.some(app => app.id === singleapp.id);




        if (isAlreadyInstalled) {
            toast(`${singleapp.title} installed successfully!😊`,)

            setDisabled(true);
            return <Navigate to="/error" replace />;
        }

        const updatedList = [...existingList, singleapp];
        localStorage.setItem('installation', JSON.stringify(updatedList));
        toast(`${singleapp.title} installed successfully!😊`,)
        setDisabled(true);





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
                    <h1 className="font-bold text-2xl md:text-3xl text-gray-800">{title}</h1>
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


                        className={`mt-6 font-semibold px-6 py-2 rounded-lg transition duration-300 ${disabled
                            ? 'bg-[#00D390] cursor-not-allowed text-white'
                            : 'bg-[#00D390] hover:bg-[#00b67a] text-white'
                            }`}
                    >
                        {disabled ? 'Installed' : `Install Now (${size} MB)`}
                        <ToastContainer></ToastContainer>
                    </button>

                </div>
            </div>




            <div className="bg-white mt-10 p-6 rounded-2xl shadow-md">
                <h1 className="text-[22px] font-bold text-gray-800 mb-4 text-center md:text-left">
                    Ratings
                </h1>

                {ratings && (
                    <div className="w-full  overflow-x-auto">
                        <div className="min-w-[320px]  sm:min-w-[400px] md:min-w-[500px]">



                            <ResponsiveContainer width="100%" height={400}>
                                <ComposedChart
                                    layout="vertical"
                                    data={ratings}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 40,
                                    }}
                                >
                                    <CartesianGrid />
                                    <XAxis type="number" />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        tick={{ fontSize: 20 }}
                                    />
                                    <Tooltip />
                                    <Legend />

                                    <Bar dataKey="count" barSize={20} fill="#FF8811" />

                                </ComposedChart>
                            </ResponsiveContainer>




                        </div>
                    </div>
                )}
            </div>



            <div className='mt-3'>
                <h1 className='space-y-4 text-3xl'>Description</h1>
                <p>
                    {articles}
                </p>
            </div>

        </div>
    );
};

export default AppDetails;
