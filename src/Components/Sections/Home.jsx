import React, { useState } from 'react'
//import heroImg from '../../assets/hero.jpg'
import { motion } from 'framer-motion'

import linkedinImg from '../../assets/linkedin_logo.png'
import githubImg from '../../assets/github_logo.png'
import { easeIn } from 'motion'



const socialMedia = [
  {indx:0, account: linkedinImg, type:"connect", link: "https://www.linkedin.com/in/malowa-michael-8253422a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {indx:1, account: githubImg, type:"connect", link: "https://github.com/MalowaMichael"},
]

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)

  
  return (
        <section 
        id="home"
        className='min-h-screen relative border-none mt-[10%] m-auto w-[90%] '
        >
      <div            
            className="mb-[10%] py-2 border-[none] p-4 accent-[#1dff42] bg-gradient-from-tl bg-transparent w-full h-[350px]"
      >
        <div className="block gap-[10px] leading-10 border-[none] text-center w-[70%] m-auto">
          <div className='py-4'>
            <p className='text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1dff42] to-cyan-400 bg-clip-text text-transparent'>Hi there, it's Malowa</p>
            <p className='text-white text-[25px] font-bold leading-10'>I am a front-end developer...</p>
          </div>

          <p className='py-2 leading-8 line-clamp-2 text-normal text-white text-center font-light '>I'm motivated and passionate about crafting solution based applications that offer exceptional performance and seamless user interactivity.</p>
          
          <a href='#works' >
              <button className='relative mx-2 my-4 p-[8px] border-[1px] border-[#1dff42] cursor-pointer rounded-sm text-white font-medium text-lg w-[40%] after:content-[""] after:absolute after:w-[12px] after:h-[5px] after:top-[-2px] after:left-0 after:bg-[cyan] after:transform after:translate-x-35 before:absolute before:right-0 before:bottom-[-2px] before:bg-[#1dff42] before:w-[12px] before:h-[5px] before:transform before:-translate-x-35 
                hover:before:-translate-x-0 hover:before:transition-all hover:before:duration-[1s] hover:before:ease-in-out hover:rounded-[0] hover:after:-translate-x-0 hover:after:transition-all hover:after:duration-[1s] hover:after:ease-in-out 
                hover:transition-all hover:duration-[0.7s] hover:ease-in-out hover:text-antialiased hover:text-transition-all hover:text-accent-cyan-500 '><span className='hover:text-[#1dff42] antialiased hover:transition-all hover:duration-[1s] hover:ease-in-out'>See </span> <span className='hover:text-[cyan] antialiased hover:transition-all hover-duration-[1s] hover:ease-in-out'>projects</span>
                </button>
              </a>

              <a href='#contacts'>
              <button className='relative mx-2 my-4 p-[8px] border-[1px] border-[#1dff42] cursor-pointer rounded-sm text-white font-medium text-lg w-[40%] after:absolute after:w-[12px] after:h-[5px] after:top-[-3px] after:left-0 after:bg-[cyan] after:transform after:translate-x-0 before:absolute before:content[""] before:right-0 before:bottom-[-2px] before:bg-[#1dff42] before:w-[12px] before:h-[5px] before:transform before:translate-x-0 
                hover:before:-translate-x-35 hover:before:transition-all hover:before:duration-[1s] hover:before:ease-in-out hover:rounded-[0] hover:after:translate-x-35 hover:after:transition-all hover:after:duration-[1s] hover:after:ease-in-out 
                hover:transition-all hover:duration-[0.7s] hover:ease-in-out hover:text-antialiased hover:text-transition-all hover:text-accent-cyan-500 '><span className='hover:text-[#1dff42] antialiased hover:transition-all hover:duration-[1s] hover:ease-in-out'>Reach</span> <span className='hover:text-[cyan] antialiased hover:transition-all hover-duration-[1s] hover:ease-in-out'>me</span>
                </button>
              </a>
        
        </div> 

        {/**Connections */}
        <div className='block border-none w-[50%] m-auto mt-[4%] text-center p-1'>
          <p className='text-2xl font-medium leading-10 bg-gradient-to-r from-[#1dff42] to-cyan-400 bg-clip-text text-transparent'>Get connected...</p>
          <div className='flex items-center justify-center gap-6 my-2'>
            {socialMedia.map((media) =>(
              <a key={media.indx} href={media.link} rel='noopener noreferrer' target='_blank'>
                  
                  <img  src={media.account} alt={`Connection media ${media.indx}`} className='w-8 h-8 rounded-full hover:shadow-[0px_0px_5px_5px_#1dff42] hover:transition-all hover:ease-in-out '/>

              </a>
            ))}
          </div>
          </div>       
        
        

      </div>

      {/**</div>*/}
    </section>
  )
}

export default Home

{/** 
         * <div className="flex relative bg-transparent border h-[0px] w-[60%] items-center justify-center translate-y-40 translate-x-30">
          <img className='h-[300px] cursor-default absolute z-[30] rounded-tr-[75px] rounded-bl-[75px] origin-bottom-right hover:scale-105 hover:transition-all hover:duration-[1s] hover:ease-in-out  ' src={heroImg} alt="Hero Default" />
          <img onMouseOver={() => setIsHovered(!isHovered)} className= {`h-[300px] absolute ${isHovered? 'z-[10]':'z-[20]'}  ' rounded-tr-[75px] rounded-bl-[75px] origin-bottom-right hover:scale-105 hover:transition-all hover:duration-[1s] hover:ease-in-out  rotate-[15deg]`} src={heroImg} alt="Hero tilted-1" />

          <img onMouseOver={() => setIsHovered(!isHovered)} className={`h-[300px] absolute ${isHovered? 'z-[20]':'z-[10]'} rounded-tr-[75px] rounded-bl-[75px] origin-bottom-right hover:scale-105 hover:transition-all hover:duration-[1s] hover:ease-in-out  rotate-[30deg]`} src={heroImg} alt="Hero tilted-2" />
          
        </div>
        */}