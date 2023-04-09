import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const jobData = useLoaderData();
    const fourJobs = jobData.filter(jd => jd.id !==  6);
    const fourJob = fourJobs.filter(jd => jd.id !==  5);
    
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <FeaturedJobs fourJob={fourJob}></FeaturedJobs>
        </div>
    );
};

export default Home;