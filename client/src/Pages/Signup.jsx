import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios' 

const Signup = () => {
  function handleinput(e)
  {
    e.preventDefault();
    const form=e.target;
    const username=form.name.value;
    const email=form.email.value
    const password=form.password.value
    const contact=form.phone.value
    console.log(username,email,password,contact);
    let mydata={username,email,password,contact};
    console.log(mydata);
    axios
      .post('http://localhost:8080/register', mydata)
      .then((response) => {
        console.log('Data inserted successfully:', response.data);
      })
      .catch((error) => {
        console.error('There was an error inserting the data:', error);
      });
 
  }
  function googleauth()
  {
    alert("working");
    axios
    .post('http://localhost:8080/register/oauth2/code/google')
    .then((response) => {
      console.log('Data inserted successfully:', response.data);
    })
  }
    
  
  return ( 
    <>
    <Navbar/>
    <div className='flex justify-center' id='login'>
       <div className=' my-10 max-sm:w-[100%]'>
         <div className='text-2xl font-semibold text-center'>Create an Account</div>
         <form onSubmit={handleinput} className=' mx-10' name='form'>
          <div className=''>
          <div className="my-4 flex-col">
          <label  className="text-black font-semibold">Enter Your Name:</label><br></br>     
          <input className='w-[400px] border-2 border-solid border-slate-800 bg-transparent  outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]'placeholder='Enter your Name' type="text" name="name" required />     
            </div> 
            <div className="my-4 flex-col items-center justify-center space-y-2">
            <label  className="text-black font-semibold">Enter your Email:</label><br></br>
            <input className='w-[400px] border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]'placeholder='Enter your Email' type="text"  name="email" required />
            </div>
            <div className="my-4 flex-col space-y-2">
            <label className="text-black font-semibold">Enter your Contact:</label><br></br>
            <input className='w-[400px]   border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]' placeholder='Enter your contact No' type="text" name="phone" required />
            </div>
            <div className="my-4 flex-col space-y-2">
            <label className="text-black font-semibold">Enter a Password:</label><br></br>
            <input className='w-[400px] text-white  border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]' placeholder='Enter your password' type="password"  name="password" required />
            </div>
            <div className='text-center'>
            <button value='submit'type='submit' className=' border-2 border-solid rounded-md btn btn-primary text-white font-bold'><Link to='/profile'>Create Account</Link></button>
            </div>
           

          </div>
           
         </form>
         <div className='w-[100%] text-center'><h2>Already have an Account?<Link to='/login'><span className='text-green-900 font-bold'> Login Here</span></Link></h2></div>
         <div className='w-[100%] text-center mb-10'><h2>OR<br></br><button className='text-black font-bold' onClick={googleauth}>
          Continue With Google</button></h2></div>
        
       </div>
       <div className='fixed bottom-0 left-0 right-0 w-[100%]'>
     <Footer/>
     </div>
    </div>
    </>
    
  )
}

export default Signup
