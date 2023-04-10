import React, { useEffect, useState } from 'react';
import bannerLogo from '../../assets/All Images/Vector.png'
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import Job from '../Job/Job';

const AppliedJob = () => {
    const [jobs,setJobs] = useState([]);
    const jobsData = useLoaderData();
   
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
            
            <div>
                <h2>hello</h2>
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