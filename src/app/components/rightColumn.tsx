import React from 'react'

const RightColumn = () => {
  return (
    <div className='w-3/12 border-l h-screen border-gray-300 '>
          <img src="images/banner.jpeg" alt="Banner Image"
           className="object-cover w-full 
           pt-2 px-2 pl-2 h-40 rounded-3xl relative
           "/>
           <div className='w-20 -mt-10 absolute flex  justify-center'>
           <img className='h-30  ml-5 justify-center ' src="/images/profile.png" alt="logo" />
           </div>


</div>
  )
}

export default RightColumn