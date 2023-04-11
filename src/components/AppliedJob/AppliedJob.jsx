import React, { useEffect, useState } from 'react';
import bannerLogo from '../../assets/All Images/Vector.png'
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import Job from '../Job/Job';
import {ArrowDownIcon } from '@heroicons/react/24/solid'

const AppliedJob = () => {
    const [jobs,setJobs] = useState([]);
    const jobsData = useLoaderData();

    const handleRemoteJob = ()=>{
        const newJob = [];
            const storedCart = getShoppingCart();
            for(const id in storedCart){
                const saveJob = jobsData.find(job=> job.id==id);
                newJob.push(saveJob)

            }
            const onsiteJobs = newJob.filter(jb=> jb.remote_or_onsite === 'Remote')
            setJobs(onsiteJobs)
    }

    const handleOnsiteJobs = () =>{
        const newJob = [];
            const storedCart = getShoppingCart();
            for(const id in storedCart){
                const saveJob = jobsData.find(job=> job.id==id);
                newJob.push(saveJob)

            }
            const onsiteJobs = newJob.filter(jb=> jb.remote_or_onsite === 'Onsite')
            setJobs(onsiteJobs)
    }
   
    useEffect(()=>{
      
        const storedJob = getShoppingCart();
        const newJob = [];
        for(const id in storedJob){
            const saveJob = jobsData.find(job => job.id==id)
            newJob.push(saveJob)
            
            
        }
        setJobs(newJob)
        

    },[])
    
    return (
        <div>
             <div  className='bg-gray-200 h-64 relative'>
            <div className='text-center text-3xl font-bold  pt-20'><h2>Applied Jobs </h2></div>
            <div className='absolute bottom-0'>
            <img className='w-full' src={bannerLogo} alt="" />
            </div>
            </div>


            <div className='flex justify-end'>
               <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1 bg-gray-200 text-black hover:bg-blue-600 ">Filter By <ArrowDownIcon className='h-5 w-5'></ArrowDownIcon> </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
                    <li onClick={handleRemoteJob}><a>Remote</a></li>
                    <li onClick={handleOnsiteJobs}><a>Onsite</a></li>
                </ul>
            </div>
            </div>
                

            <div className='p-28'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;