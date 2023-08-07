'use client'
import axios from 'axios'
import React from 'react'



const Navbar = () => {
    const [data,setData] = React.useState({
        id:"",
        username:"",
      })
    
      const handleClick = async ()=>{
        const response = await axios.get("/api/users/profile");
                console.log(response);
                console.log(response.data.user._id);
                
                setData({...data,id:response.data.user._id,username:response.data.user.username})
      }
      React.useEffect(()=>{
        handleClick()
      },[])
  return (
    <div className="h-14 bg-slate-900 justify-between items-center m-auto flex">
        <div className='flex-row flex justify-end items-center '>
            <div>
                <img className='h-10 ml-28' src="/images/logo.png" alt="logo" />
            </div>
            <div>
                <h1 className='ml-2 text-xl text-orange-300'>BLOGEE</h1>
            </div>
        </div>
        
        <div className='flex-row flex justify-end mx-28  items-center'>
            
            <div>
                <h1 className='uppercase'>{data.username}</h1>
            </div>
            <div>
            <img className='h-10 ml-5' src="/images/profile.png" alt="logo" />

            </div>
        </div>
    </div>
  )
}

export default Navbar