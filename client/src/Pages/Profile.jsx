import React from 'react'
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <div>
        <div className="navbar flex justify-between bg-blue-800 text-white">
      <div className='flex px-6 py-4'>
        <h1 className='text-2xl font-bold'>Our Logo</h1>
       </div>
      <div className='flex gap-10 px-6 pt-4 text-2xl font-semibold mr-10 max-sm:hidden'>
        <Link to='/profile'>Home</Link>
        <Link to="/profile">About Me</Link>
        <button className='btn btn-warning text-white font-bold'> <Link to="/profile">My Activity</Link></button>
        <button className='btn btn-secondary text-white font-bold'> <Link to="/home">Logout</Link></button>
      </div>
     </div>
        </div>
    </div>
  )
}

export default Profile