import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1.png'

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 bg-gray-200 items-center  p-2 py-2'>
            <div className='md:m-2'>
                <h2 className='text-6xl font-bold leading-tight	mb-5'>One Step <br /> Closer To Your <br /> <span className='text-blue-600'>Dream Job</span></h2>
                <p className='mb-5 text-[#757575]'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>
            <div>
                <img src={bannerImg} />
            </div>
        </div>
    );
};

export default Banner;