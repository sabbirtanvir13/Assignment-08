import React from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import { CiSearch } from "react-icons/ci";
const App = () => {
    const { apps } = useApps()
    return (
      <div>
          <div className='text-center mt-6 '>
            <h1 className='text-5xl font-bold'>Our All Applications</h1>
            <p className='mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
           </div>
           <div className='flex justify-between p-5'>
            <h1>({apps.length}) Apps Found</h1>
           <CiSearch /> <input className='w-[330px] h-[44px] p-3 border-1' type="search" name="" id="" placeholder='Search Apps' />
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-6'>
                {
                    apps.map(socialData => (
                       <AppCard key={socialData.id} socialData={socialData}></AppCard>
                    ))
                }
               
            </div>
      </div>
    );
};

export default App;