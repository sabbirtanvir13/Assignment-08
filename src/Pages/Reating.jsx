// import React from 'react';

// const Reating = () => {
//     return (
//         <div className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] h-[310px] text-white'>
//             <div className='flex content-center items-center text-3xl max-w-6/12 mx-auto py-10 ml-[670px] '>
//                 <h1>Trusted by Millions, Built for You</h1>

//             </div>

//             <div className='max-w-6/12 mx-auto grid grid-cols-3 mt-7 ml-[570px]'>
//                 <div >
//                     <p>Total Downloads</p>
//                     <h1 className='text-4xl font-bold'>29.6M</h1>
//                     <p>21% more than last month</p>
//                 </div>
//                 <div >
//                     <p>Total Reviews</p>
//                     <h1 className='text-4xl font-bold'>906K</h1>
//                     <p>46% more than last month</p>
//                 </div>
//                 <div >
//                     <p>Active Apps</p>
//                     <h1 className='text-4xl font-bold'>132+</h1>
//                     <p>31 more will Launch</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Reating;



import React from 'react';

const Reating = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16 px-4 mt-[-47px]">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Trusted by Millions, Built for You
        </h1>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/10 rounded-lg p-6">
          <p className="text-lg opacity-90">Total Downloads</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">29.6M</h1>
          <p className="text-sm opacity-80 mt-1">21% more than last month</p>
        </div>

        <div className="bg-white/10 rounded-lg p-6">
          <p className="text-lg opacity-90">Total Reviews</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">906K</h1>
          <p className="text-sm opacity-80 mt-1">46% more than last month</p>
        </div>

        <div className="bg-white/10 rounded-lg p-6">
          <p className="text-lg opacity-90">Active Apps</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">132+</h1>
          <p className="text-sm opacity-80 mt-1">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Reating;
