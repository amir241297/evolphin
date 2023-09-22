import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex mx-auto w-3/4 justify-between'>
      <div className='flex cursor-pointer w-25 space-x-2 '>
        <img className='w-20' src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <h1 className='grid place-content-center font-bold lg:text-2xl md:text-2xl sm:text-sm'>TECH</h1>
      </div>
      <div className='flex space-x-4 w-25'>
        <p className='grid place-content-center cursor-pointer font-semibold'>Solution</p>
        <p className='grid place-content-center cursor-pointer font-semibold'>Services</p>
        <p className='grid place-content-center cursor-pointer font-semibold'>About</p>
        <p className='grid place-content-center cursor-pointer font-semibold'>Culture</p>
      </div>
      <div className='flex space-x-2'>
        {/* <p className='grid place-content-center'>Contact</p> */}
        <button className='m-auto font-semibold h-9 w-20 rounded-3xl bg-gray-700'>Contact</button>
        <p className='grid place-content-center'>-*</p>
      </div>

    </div>
  )
}