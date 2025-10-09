import React from 'react';
import Banner from '../Banner/Banner';
import Reating from './Reating';
import { Link,  } from 'react-router';
import AppCard from '../components/AppCard';
import useApps from '../hooks/useApps';

const Home = () => {
  
    const {apps,}=useApps()
   
     const fuateredApp=apps.slice(0,8)
    return (
        <div>

            <Banner></Banner>
            <Reating></Reating>
           <div className='text-center mt-6 '>
            <h1 className='text-5xl font-bold'>Trending Apps</h1>
            <p className='mt-4'>Explore All Trending Apps on the Market developed by us</p>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-6'>
                {
                    fuateredApp.map(socialData => (
                       <AppCard key={socialData.id} socialData={socialData}></AppCard>
                    ))
                }
               
            </div>
              <div className='max-w-6xl mx-auto flex justify-center mt-6'>
                  <Link to='/app'><button className='btn btn-primary bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] '>Show All</button></Link> 
              </div>
        </div>
    );
};

export default Home;