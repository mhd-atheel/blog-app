'use client'
import React from 'react'



const Navbar = () => {
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
                <h1 className='uppercase'>Rathanvel pandiyan  </h1>
            </div>
            <div>
            <img className='h-10 ml-5' src="/images/profile.png" alt="logo" />

            </div>
        </div>
    </div>
  )
}

export default Navbar