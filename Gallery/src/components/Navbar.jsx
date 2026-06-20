import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-mist-800  h-15 w-full flex justify-center items-center px-8 py-1 sm:justify-between'>
 
        <h1 className='text-amber-400 font-semibold text-3xl'>Photo Gallery</h1>

        <ul className='gap-7 text-amber-300 text-balance font-sans text-xl hidden sm:flex'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Gallery</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>About</li>
        </ul>
      
    </div>
  )
}

export default Navbar
