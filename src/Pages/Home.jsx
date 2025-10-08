import React from 'react';
import Banner from '../Banner/Banner';
import Reating from './Reating';
import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';

const Home = () => {
    const socialappData = useLoaderData()
    console.log(socialappData)
    return (
        <div>

            <Banner></Banner>
            <Reating></Reating>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    socialappData.map(socialData => (
                       <AppCard key={socialData.id} socialData={socialData}></AppCard>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;