import React from 'react';

const Blog = () => {
    return (
        <div className='m-7'>
            <h2 className='text-center text-4xl font-bold text-gray-500'>I have answered some beatiful questions below</h2>
            <div className='grid md:grid-cols-2 gap-7 m-10'>
                <div>
                    <h4  className='text-xl font-bold mb-2 text-gray-700'>When should you use context API?</h4>
                    <p className='text-gray-600'>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    When some data needs to be accessible by many components at different nesting levels.</p>
                </div>
                <div>
                <h4  className='text-xl font-bold mb-2 text-gray-700'>What is a custom hook?</h4>
                    <p className='text-gray-600'>Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use".like useState() useEffects().use`your hook name`().Every hook name first word "use" than your custom hook name.and a custom hook is a special function in JavaScript whose name start "use".custom hook reuseable for you.cause we are use own functionality on this hooks.</p>
                </div>
                <div>
                <h4  className='text-xl font-bold mb-2 text-gray-700'>What is useRef?</h4>
                    <p className='text-gray-600'>useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
                <div>
                <h4  className='text-xl font-bold mb-2 text-gray-700'>What is useMemo?</h4>
                    <p className='text-gray-600'>The useMemo hook is used in the functional component of React to return a memoized value.memoization is a concept used in general when we can save re-compilation time by returning the cached result. In the functional component of React, useMemo hooks provide memory-mapped values.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;