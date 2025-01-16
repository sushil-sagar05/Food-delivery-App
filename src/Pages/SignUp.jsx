import React,{useContext, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FcRating } from "react-icons/fc";
import { BiCameraMovie } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { SiWelcometothejungle } from "react-icons/si";


function Signup() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')

    const navigate = useNavigate()

const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser ={
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
        email:email,
        password:password
    }
    //console.log(userData)
    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')

}

  return (
    <div className='h-screen w-full flex  justify-center items-center  bg-gray-200'>
    <div>
    <div className=' flex ml-20 mt-7 w-48 rounded-lg  gap-2 bg-white '>
        <Link to='/login'> <button className='bg-white w-24 h-10  rounded-lg shadow-lg border font-semibold  '>Login</button></Link>
      <button className='bg-green-500 w-24 h-10 rounded-lg shadow-lg border font-semibold  '>Sign In</button>
    </div>
        <div className='bg-white py-1 mt-7 shadow-md rounded-lg h-96 w-80 ml-7 '>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <h3 className='text-xl ml-2 font-semibold '>What's Your name</h3>
           <div className='flex gap-2 mb-5'>
            <input type={firstname}
            onChange={(e)=>{
                setfirstname(e.target.value)
            }}
            className='rounded-md ml-2 border bg-[#f8f9fe] px-2 w-1/2 h-10 text-lg placeholder:text-base'            required-type='text'
            placeholder='First Name'
            />
              <input type={lastname}
              onChange={(e)=>{
                setlastname(e.target.value)
              }}
            className='rounded-md border mr-5 ml-2 bg-[#f8f9fe] px-2 w-1/2 h-10 text-lg placeholder:text-base'            required-type='text'
            placeholder='Last Name'
            />
           </div>
           <h3 className='text-xl ml-2 font-semibold '>What's Your Email</h3>
           <input type={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
            className='rounded-md border ml-2 bg-[#f8f9fe] px-2 w-72 h-10 text-lg placeholder:text-base'            required-type='text'
            placeholder='your@your.com'
            />
             <h3 className='text-xl ml-2 font-semibold '>Enter Password</h3>
           <input type={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
        className='rounded-md border ml-2 bg-[#f8f9fe] px-2 w-72 h-10 text-lg placeholder:text-base'            
            placeholder='******'
            />
            <span className='flex h-5 ml-5 mt-3 gap-2'>
            <input type="checkbox" className=''
             />
            <p className='text-sm'>I accept the terms of use & privacy policy</p>
            </span>
            
            <button className='w-72 h-8 rounded-lg mt-3 ml-4 hover:bg-green-500 bg-green-500  text-white '>Register </button>
            <h2 className='mt-2 text-center'>Aleary have a Accout?<Link to='/login'><span className='ml-1 text-blue-500'>Login</span></Link></h2>
        </form>
        </div>
    </div>
        
    </div>
  )
}

export default Signup