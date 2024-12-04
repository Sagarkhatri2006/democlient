import React from 'react'

const Footer = () => {
  return (
    <div className='flex-col justify-center bg-slate-600 p-4'>
       <div className='text-center text-gray-500 text-sm'>
        <h2 className='text-white'>
        Logos and Brand of your teams
        </h2>
       </div>
       <div className='text-center text-gray-500 text-sm'>
        <h2>
          <p className='text-yellow-300 font-bold'>{new Date().getFullYear()}@copyright2024 durpatbhuan@gmail.com</p>
        </h2>
   </div>
    </div>
  )
}

export default Footer