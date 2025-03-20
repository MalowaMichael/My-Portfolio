import React from 'react'
import {Link as ScrollLink } from 'react-scroll'

const NotFound = () => {
  
    return (
    <div className='flex flex-col gap-2 rounded-sm items-center border border-white/10 bg-white/1 w-[50%] m-auto p-4'>
      <div className='text-[80px] text-gray-600 font-mono '>404</div>
      <div className='text-[40px] text-gray-400 font-mono  '>PAGE NOT FOUND</div>

        <p>You must have gotten lost!</p>
        <ScrollLink to = {"home"}>
          <div className='text-lg text-cyan-500 font-mono font-medium rounded-sm p-2 cursor-pointer hover:border hover:border-cyan-700 '>Go back home</div>
        </ScrollLink>
    </div>
  )
}

export default NotFound