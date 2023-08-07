'use client'
import axios from 'axios';
import React from 'react'

const RightColumn = () => {
  const [data,setData] = React.useState({
    email:"",
    username:"",
    bio:"",
    lives:"",
    work:"",
  })

  const handleClick = async ()=>{
    const response = await axios.get("/api/users/profile");
            console.log(response);
            console.log(response.data.user._id);
            
            setData(
              {...data,
                email:response.data.user.email,
                username:response.data.user.username,
                bio:response.data.user.bio,
                lives:response.data.user.lives,
                work:response.data.user.work,
              })
  }
  React.useEffect(()=>{
    handleClick()
  },[])
  return (
    <div className='w-3/12 border-l h-screen border-gray-300 items-center flex flex-col'>
          <img src="images/banner.jpeg" alt="Banner Image"
           className="object-cover w-full 
           pt-2 px-2 pl-2 h-40 rounded-3xl 
           "/>
           <div className='w-20 -mt-10  flex content-center  justify-center'>
           <img className=' ml-5 justify-center' src="/images/profile.png" alt="logo" />
           </div>
           <h1 className='text-black text-2xl mt-5 uppercase text-center'>{data.username}</h1>
           <h1 className='text-black text-md mt-0  text-center'>{data.email}</h1>
           <h1 className='text-black text-md mt-0 p-4 text-justify'>{data.bio}</h1>
          <h1 className='text-black text-md mt-0 relative  pl-4 pb-1 first-letter:uppercase font-semibold '>Lives in : <span className='font-normal'>{data.lives}</span> </h1>
          <h1 className='text-black text-md mt-0  pl-4 pb-1 first-letter:uppercase font-semibold '>Work at : <span className='font-normal'>{data.work}</span> </h1>

          <button className='text-white flex justify-center mt-4  m-2 bg-slate-900 text-sm w-11/12   p-2  first-letter:uppercase font-semibold '>Edit</button>





</div>
  )
}

export default RightColumn