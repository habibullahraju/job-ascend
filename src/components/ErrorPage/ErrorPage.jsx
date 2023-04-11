import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[1400%] font-extrabold text-[#B1B0DA]'>404</h2>
            <h4 className='text-6xl font-bold uppercase text-gray-400'>Opps! page not found</h4>
            <p className='text-2xl my-4'>Sorry,The page you're looking for doesn't exist.</p>
            <Link to="/" className='btn bg-blue-400 rounded-3xl'>Return home</Link>
        </div>
    );
};

export default ErrorPage;