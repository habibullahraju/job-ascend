import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJob from './components/AppliedJob/AppliedJob';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ReChart from './components/ReChart/ReChart';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/jobsData.json'),
      },
      {
        path:'job/:id',
        element:<JobDetails></JobDetails>,
        loader:  ({params})=> fetch('/jobsData.json'),
      },
      {
        path:'/applied',
        element: <AppliedJob></AppliedJob>,
        loader: ()=> fetch('/jobsData.json'),
        
      },
      {
        path:'/chart',
        element: <ReChart></ReChart>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
