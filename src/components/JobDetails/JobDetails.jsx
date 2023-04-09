import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const [data ,id] = useLoaderData();
    console.log(data ,id);
    return (
        <div>
            <h2>This is job details page</h2>
        </div>
    );
};

export default JobDetails;