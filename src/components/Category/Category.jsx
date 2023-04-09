import React, { useEffect, useState } from 'react';
import CategoryCart from '../CategoryCart/CategoryCart';

const Category = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='my-20'>
            <h2 className='text-5xl font-bold  text-center'>Job Category List</h2>
            <p className='text-center text-[#757575] my-4 '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex justify-around text-center  mx-auto'>
                {
                    category.map((jobCate, inx) => <CategoryCart
                    key={inx}
                    jobCate={jobCate}
                    ></CategoryCart>)
                }
            </div>
        </div>
    );
};

export default Category;