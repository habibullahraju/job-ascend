import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bannerLogo from '../../assets/All Images/Vector.png'

const JobDetails = () => {
    const [job,setJob]= useState({})
    const data = useLoaderData();
    const {id} = useParams();
    useEffect(()=>{

        if (data && id) {
            const findData = data.find(dt=> dt.id== id);
            setJob(findData)
        }
        
    },[])
    console.log(job);
    const {company_logo,job_title,company_name,remote_or_onsite,locations,fulltime_or_parttime,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}= job;
    
   
    
    return (
        <div>
            <div  className='bg-gray-200 h-64 relative'>
            <div className='text-center text-3xl font-bold  pt-20'><h2>job details </h2></div>
            <div className='absolute bottom-0'>
            <img className='w-full' src={bannerLogo} alt="" />
            </div>
            </div>


            <div>
                <div>
                    <h2>Job Description: {job_description}</h2>
                    <h2>Job Responsibility: {job_responsibility}</h2>
                    <h3>Educational Requirements:</h3>
                    <p>{educational_requirements}</p>
                    <h3>Experiences:</h3>
                    <p>{experiences}</p>

                </div>
                <div className='bg-gray-200'>
                    <h3></h3>
                    <hr />
                    <p>{salary}</p>
                    <p>{job_title}</p>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;