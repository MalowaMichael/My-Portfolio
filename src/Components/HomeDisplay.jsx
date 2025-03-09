import React, { useState } from 'react'
import heroImg from '../assets/hero.jpg'
const HomeDisplay = () => {
  const [isHovered, setIsHovered] = useState(false)

  
  return (
    <div className='relative mt-[10%] m-auto w-[90%]'>
      {/**gradient
       *       <div className="absolute p-[1px] bg-gradient-to-tr from-[rgb(3, 112, 3)] from-[6%] to-[rgba(0,0,0,0)] to-[100%] w-full h-[200px] z-[9999]"></div>

       */}
      <div className="flex justify-between p-4 bg-gradient-from-tl bg-gradient-to-br from-[rgba(29,255,66,0.5)] from-[3%] to-[rgba(0,0,0,0)] to-[62.29%] w-full h-[350px]">
        <div className="block gap-[10px] leading-10">
          <div className='py-4'>
            <p className='text-white text-[30px] font-extrabold leading-10'>Hi there, it's Malowa</p>
            <p className='text-white text-[25px] font-bold leading-10'>I am a web developer...</p>
          </div>

          <p className='py-2 leading-8 line-clamp-1 w-sm text-normal text-white font-light transition-all duration-[1s] hover:line-clamp-none hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer'>A motivated and passionate developer flexible and adaptive to dynamic changes in the dev world.</p>
          
          <a href='resume.pdf' target='_blank' rel='noopener noreferrer'>
          <button className='relative my-8 p-[8px] border-[1.5px] border-[#1dff42] cursor-pointer rounded-sm text-white font-medium text-lg w-[50%] after:content-[""] 
          after:absolute after:w-[15px] after:h-[8px] after:top-[-5px] after:left-0 after:bg-[cyan] after:transform after:translate-x-0 before:absolute before:content[""] before:right-0 before:bottom-[-5px] before:bg-[#1dff42] before:w-[15px] before:h-[8px] before:transform before:translate-x-0 
          hover:before:-translate-x-40 hover:before:transition-all hover:before:duration-[1s] hover:before:ease-in-out hover:rounded-[0] hover:after:translate-x-40 hover:after:transition-all hover:after:duration-[1s] hover:after:ease-in-out hover:transition-all hover:duration-[0.7s] 
          hover:ease-in-out hover:text-antialiased hover:text-transition-all hover:text-accent-cyan-500 '>Read me
          </button>
          </a>
        
        </div>
        
        <div className="flex relative bg-transparent h-[0px] w-[80%] items-center justify-center translate-y-40 translate-x-30">
          <img className='h-[300px] absolute z-[30] rounded-tr-[75px] rounded-bl-[75px] origin-bottom-right hover:scale-105 hover:transition-all hover:duration-[1s] hover:ease-in-out  ' src={heroImg} alt="Hero Default" />
          <img onMouseOver={() => setIsHovered(!isHovered)} className= {`h-[300px] absolute ${isHovered? 'z-[10]':'z-[20]'}  ' rounded-tr-[75px] rounded-bl-[75px] origin-bottom-right hover:scale-105 hover:transition-all hover:duration-[1s] hover:ease-in-out  rotate-[15deg]`} src={heroImg} alt="Hero tilted-1" />

          <img onMouseOver={() => setIsHovered(!isHovered)} className={`h-[300px] absolute ${isHovered? 'z-[20]':'z-[10]'} rounded-tr-[75px] rounded-bl-[75px] origin-bottom-right hover:scale-105 hover:transition-all hover:duration-[1s] hover:ease-in-out  rotate-[30deg]`} src={heroImg} alt="Hero tilted-2" />
          
        </div>
      </div>
      {/**</div>*/}
    </div>
  )
}

export default HomeDisplay