
import React, { useState, useEffect } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [search, setSearch] = useState('');
  
  const { apps,loading } = useApps();
  const navigate = useNavigate(); 

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter(app => app.title.toLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (term && searchedApps.length === 0) {
      navigate('/error', { state: { message: `No results found for "${search}"` } });
    }
  }, [term, searchedApps, navigate, search,loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-[#00D390] border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-xl font-semibold text-gray-600">Loading apps...</p>
      </div>
    );
  }

 
  return (
    <div>
      <div className='text-center mt-6 '>
        <h1 className='text-5xl font-bold'>Our All Applications</h1>
        <p className='mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <label className='flex justify-between p-5'>
        <h1 className='font-bold text-2xl'>({searchedApps.length}) Apps Found</h1>
        <div className='relative'>
          <CiSearch className='absolute left-3 top-3 text-gray-500 text-xl' />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-[330px] h-[44px] pl-10 pr-3 border rounded-md outline-none'
            type="search"
            placeholder='Search Apps'
          />
        </div>
      </label>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-6'>
        {
          searchedApps.map(socialData => (
            <AppCard key={socialData.id} socialData={socialData}></AppCard>
          ))
        }
      </div>
    </div>
  );
};

export default App;
