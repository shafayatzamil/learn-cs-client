import React from 'react'

//Modal show for course plan

const Modal = ({ message }) => {
   return (
      <div className='fixed bottom-8 right-8 p-8 bg-white text-primary font-medium text-lg shadow-lg'>
         {message}
      </div>
   )
}

export default Modal