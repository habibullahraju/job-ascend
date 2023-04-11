import React, { useEffect, useState } from 'react';
import JobCart from '../JobCart/JobCart';

const FeaturedJobs = ({fourJob}) => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('/jobsData.json')
        .then(res =>res.json())
        .then(data => setJobs(data.slice(0,4)))
      
    },[])
    const handleSeeAllJobs =()=>{
            setJobs(fourJob)
    }
    return (
        <div>
            <h2 className='text-5xl text-center font-bold my-4'>Featured Jobs</h2>
            <p className='text-[#757575] text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-6 p-2'>
                {
                    jobs.map(job=> <JobCart
                    key={job.id}
                    job={job}
                    ></JobCart>)
                }
            </div>
            <div className='text-center mb-28'>
            <button onClick={handleSeeAllJobs} className='btn btn-primary mt-10 '>See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;