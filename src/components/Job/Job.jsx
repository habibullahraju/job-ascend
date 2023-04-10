import React from 'react';
import {CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Job = ({job}) => {
    const {company_logo,job_title,company_name,remote_or_onsite,locations,fulltime_or_parttime,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information ,phone,email }= job;
    console.log(job);
    return (
        <div className='flex justify-between items-center mt-5 border rounded-md p-3 border-gray-200'>
            <div className='inline-flex gap-8 justify-center items-center'>
                <div className='w-60 h-60 relative bg-center bg-cover'>
                    <img className='mt-16 rounded-md  ' src={company_logo} alt="" />
                    <div className='bg-gray-200 w-60 h-60 opacity-50 absolute top-0 rounded-md'></div>
                </div>
                <div>
                    <p className='font-bold text-2xl mb-2'>{job_title}</p>
                    <p className='text-[#757575] text-2xl font-semibold mt-4'>{company_name}</p>
                <div className='my-6 font-bold text-blue-600'>
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
            </div>
            <button className='btn btn-primary mr-7'>View Details</button>
        </div>
    );
};

export default Job;