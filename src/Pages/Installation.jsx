import React, { useEffect, useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const Installation = () => {
    const [installation, setInstallation] = useState([])
    useEffect(() => {
        const saveedList = JSON.parse(localStorage.getItem('installation') || '[]');
        if (saveedList) setInstallation(saveedList)
    }, [])

    const [sortoder, setsortoder] = useState('none')

    const sortItem =( () => {
        if (sortoder === 'mb-asc') {
            return [...installation].sort((a, b) => a.size - b.size)
        }else if(sortoder === 'mb-desc'){
             return [...installation].sort((a, b) => b.size - a.size)
        }else{
           return installation
        }
    }) ()


const handleRemove = (id) => {
  
  const existingList = JSON.parse(localStorage.getItem('installation') || '[]');
  const updatedList = existingList.filter(p => p.id !== id);


  localStorage.setItem('installation', JSON.stringify(updatedList));
  setInstallation(prev=>prev.filter(p => p.id !== id))
 if (updatedList) {
    toast.info(`${updatedList.title || updatedList.name || updatedList.description || 'App'} uninstalled successfully!😞`);
  }

 
};


    
    return (
        <div>

            <div className='bg-white rounded'>
                <div className='text-center mt-6 '>
                    <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
                    <p className='mt-4'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <label className='flex justify-between p-10'>

                    <h1 className='font-bold text-2xl'>({installation.length}) Apps Found</h1>
                    <select className='select select-bordered' value={sortoder} onChange={e => setsortoder(e.target.value)}>
                        <option value="none">Sort By Size</option>
                        <option value="mb-asc">Low-&gt; High</option>
                        <option value="mb-desc">High-&gt; Low</option>
                    </select>
                </label>

            </div>

            <div className="space-y-3">
                {sortItem.map(p => (
                    <div
                        key={p.id}
                        className="card card-side bg-base-100 shadow-xl max-w-6xl mx-auto border h-[100px] flex items-center justify-between p-4"
                    >
                        <div className="flex items-center gap-4">
                            {/* Image */}
                            <img className="w-[80px] h-[80px] rounded bg-white object-cover" src={p.image} alt="" />

                            {/* App Info */}
                            <div>
                                <h1 className="font-semibold text-lg">{p.description}</h1>
                                <div className="flex items-center gap-6 mt-1 text-sm">
                                    <p className="font-bold text-[#00D390]">{p.downloads}M</p>
                                    <p className="font-bold text-[#FF8811]">{p.ratingAvg}</p>
                                    <p>{p.size}MB</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side: button */}
                        <button onClick={()=>handleRemove(p.id)} className="btn bg-[#00D390] text-white hover:bg-[#00D390]">Uninstall
                          
                        </button>
                    </div>
                ))}
            </div>
  <ToastContainer></ToastContainer>
        </div>
    );
};

export default Installation;