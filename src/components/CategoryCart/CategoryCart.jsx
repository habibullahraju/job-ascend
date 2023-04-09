import React from 'react';

const CategoryCart = ({jobCate}) => {
    const {category_name,description,logo_url } = jobCate;
    return (
        <div className='bg-[#FAF8FF] p-10 rounded-md mt-6 md:mt-2 flex gap-4 items-center md:flex-col'>
            <div className='w-20 text-center'>
                <img className='w-full ' src={logo_url} alt="job category logo" />
            </div>
            <div>
            <h2 className='font-bold text-20'>{category_name}</h2>
            <p>{description}</p>
            </div>

        </div>
    );
};

export default CategoryCart;