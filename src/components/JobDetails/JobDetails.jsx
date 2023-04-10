import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import bannerLogo from '../../assets/All Images/Vector.png'
import { CurrencyDollarIcon, TicketIcon ,PhoneIcon, EnvelopeIcon,MapPinIcon} from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';


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
    const {company_logo,job_title,company_name,remote_or_onsite,locations,fulltime_or_parttime,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information ,phone,email }= job;
    const handleSetDataLocalStorage = (id) =>{
        console.log(id);
        addToDb(id);
    }
    
    return (
        <div>
            <div  className='bg-gray-200 h-64 relative'>
            <div className='text-center text-3xl font-bold  pt-20'><h2>job details </h2></div>
            <div className='absolute bottom-0'>
            <img className='w-full' src={bannerLogo} alt="" />
            </div>
            </div>


            <div className='grid gridThreeByOne px-10 gap-6 m-20'>
                <div>
                 <span className='font-bold'>Job Description: </span><span className='text-[#757575]'>{job_description}</span> <br /> <br />
                    <span className='font-bold'>Job Responsibility: </span> <span className='text-[#757575]'>{job_responsibility}</span>
                    <br /><br />
                    <h3 className='font-bold'>Educational Requirements:</h3>
                    <p className='text-[#757575]'>{educational_requirements}</p>
                    <br />
                    <h3 className='font-bold'>Experiences:</h3>
                    <p className='text-[#757575]'>{experiences}</p>

                </div>
                <div className='bg-gray-200 p-6 rounded-md'>
                    <h3 className='font-bold text-xl border-b-2 border-gray-500'>Job Details</h3>
                    
                    <p className='mt-2 flex gap-1 items-center'> <CurrencyDollarIcon className="h-5 w-5 text-blue-500" /><span className='font-bold'>  Salary:</span> {salary}</p>
                    <p className='mt-2 flex gap-1 items-center'> <TicketIcon className="h-5 w-5 text-blue-500" /><span className='font-bold'>Job Title:</span> {job_title}</p>
                    <h3 className='font-bold border-b-2 mt-3 border-gray-500'>Contact Information</h3>
                    <p className='mt-2 items-center flex gap-1'> <PhoneIcon className="h-5 w-5 text-blue-500" /><span className='font-bold'>  Phone:</span> {phone}</p>
                    <p className='mt-2 flex items-center gap-1'> <EnvelopeIcon className="h-5 w-5 text-blue-500" /><span className='font-bold'>  Email:</span> {email}</p>
                    <p className='mt-2 flex gap-1 items-center'> <MapPinIcon className="h-5 w-5 text-blue-500" /><span className='font-bold'>  Address:</span> {locations}</p>
                    

                </div>
                <div className='flex justify-end'>
                </div>
                <div className='flex justify-end'>
                <Link onClick={()=> handleSetDataLocalStorage(id)} to="/applied" className='btn btn-primary w-full'>Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;