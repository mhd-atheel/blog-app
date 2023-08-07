'use client'
import React from 'react'
import axios from 'axios'

const Profie = () => {
  const [data,setData] = React.useState({
    id:""
  })

  const handleClick = async ()=>{
    const response = await axios.get("/api/users/profile");
            console.log(response);
            console.log(response.data.user._id);
            
            setData({id:response.data.user._id})
  }
  
  return (
    <div>
      <h1 className='text-black'>Profile Page</h1>
      <h1 className='text-black'>{data.id}</h1>
      <button onClick={handleClick} className='text-white bg-black p-2 rounded-lg m-5'>Fetch</button>
      </div>
  )
}

export default Profie