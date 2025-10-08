import React from 'react';

const Reating = () => {
    return (
        <div className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] h-[310px] text-white'>
            <div className='flex content-center items-center text-3xl max-w-6/12 mx-auto py-10 ml-[670px] '>
                <h1>Trusted by Millions, Built for You</h1>

            </div>

            <div className='max-w-6/12 mx-auto grid grid-cols-3 mt-7 ml-[570px]'>
                <div >
                    <p>Total Downloads</p>
                    <h1 className='text-4xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div >
                    <p>Total Reviews</p>
                    <h1 className='text-4xl font-bold'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div >
                    <p>Active Apps</p>
                    <h1 className='text-4xl font-bold'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Reating;