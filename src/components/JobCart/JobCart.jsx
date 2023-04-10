import React from 'react';
import {CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const JobCart = ({job}) => {
    const {id,job_title,company_logo,company_name,remote_or_onsite,locations,fulltime_or_parttime,salary}= job;



    return (
        <div className='border p-7 rounded-md inline-flex flex-col'>
            
            <div className='w-36 h-10 mb-5'>
                <img className='w-full' src={company_logo} alt="" />
            </div>
            <div>
                <h3 className='text-lg font-bold'>{job_title}</h3>
                <p className='text-[#757575] my-1'>{company_name}</p>
                <div className='my-4 font-bold text-blue-600'>
                    <span className='border p-2 border-1 rounded-sm  border-blue-600 mr-4'>{remote_or_onsite}</span>
                    <span className='border p-2 border-1 rounded-sm  border-blue-600'>{fulltime_or_parttime}</span>
                </div>
                <div className='flex gap-4 items-center my-4 text-[#757575]'>
                    
                    <span className='flex items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>{locations}</span>
                    <span className='flex items-center gap-2'> <CurrencyDollarIcon className="h-5 w-5 text-white bg-gray-500 rounded-3xl" />Salary: {salary}</span>
                </div>
            </div>
            <Link  to={`/job/${id}`} className='btn btn-primary mt-auto w-32'>View Details</Link>
        </div>
    );
};

export default JobCart;

