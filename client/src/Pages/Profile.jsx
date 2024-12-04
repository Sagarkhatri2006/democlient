import React from 'react'
import {Link} from 'react-router-dom'
import List from '../img.json'
import Footer from '../components/Footer'
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
     {/*after navabr */}
     <div className="bg-teal-50 bg-[url('https://steamuserimages-a.akamaihd.net/ugc/792007521116448905/F7A121A3F7A929FFB4DBC3AE241B3B4B6EAAED1D/')">
          <h2>Hey User Welcome to your profile</h2>
          
        </div>
     <div className='flex  justify-center items-center flex-wrap gap-12 p-10'>
     {
      List.map((item,index)=><div key={index}>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
      </div>
      )
     }
     </div>
     
        </div>
        <Footer/>
    </div>
  )
}

export default Profile