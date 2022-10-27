import React from 'react';
import ErrorPage from '../assets/Error page.png'

//Error page  set up
const Error = () => {
   return (
      <div className='h-screen flex items-center justify-center'>
         <div><h1 className='text-red-500 text-center text-4xl font-bold tracking-wider'>404 | page not found</h1>
         <img src={ErrorPage} alt="" srcset="" /></div>
      </div>
   )
}

export default Error