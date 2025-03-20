import React, { useState } from 'react'
import { motion } from "motion/react"

import educationImg from '../../assets/education.jpg'
import nodeImg from '../../assets/node_logo.png'
import jsImg from '../../assets/javascript_logo.png'
import cssImg from '../../assets/css_logo.png'
import tailwindImg from '../../assets/tailwind_logo.png'
import reactImg from '../../assets/react_logo.png'
import mysqlImg from '../../assets/mysql_logo.png'
import phpImg from '../../assets/php_logo.png'
import jqueryImg from '../../assets/jquery_logo.png'
import htmlImg from '../../assets/html_logo.png'


const languages = [
  {id: 0, image: htmlImg, type: "front-end", color: "orange"},
  {id: 1, image: cssImg, type: "front-end", color: "skyblue"},
  {id: 2, image: tailwindImg, type: "front-end", color: "purple"},
  {id: 3, image: jsImg, type: "front-end", color: "yellow"},
  {id: 4, image: jqueryImg, type: "front-end", color: "blue"},
  {id: 5, image: reactImg, type: "front-end", color: "cyan"},
  {id: 6, image: mysqlImg, type: "back-end", color: "orangered"},
  {id: 7, image: phpImg, type: "back-end", color: "violet"},
  {id: 8, image: nodeImg, type: "back-end", color: "lime"},

]

const frontLangs = languages.filter((flang) => flang.type === "front-end")
const backLangs = languages.filter((blang) => blang.type === "back-end")

const About = () => {
   const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <section id="about" className=' relative border-none md:min-h-screen w-[96%] md:w-[90%] m-auto mb-[15%] md:h-[850px]'>

          <motion.div
          initial={{opacity:0, y:150}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.8, easings:"easeout"}}
          className='border-none relatve flex flex-col m-auto w-full  border-[none]'
          >
        
        <h5 className='text-2xl md:text-4xl antialiased font-[calibri] font-semibold text-center mb-2 md:my-4 bg-gradient-to-r from-[#1dff42] to-cyan-500 bg-clip-text text-transparent '>About me</h5>
        
        <div id="education" className='border-none border-green-500  p-2 md:p-4 sm:flex sm:justify-between sm:gap-[1%] md:h-[300px] w-full bg-transparent mt-[10%] md:mt-[0%]  '>
          
          {/**Left section */}
          <div id="left" className="bg-white/1 border px-4 w-full md:w-[60%] border-white/10 py-4 rounded-md hover:transition-all hover:ease-in-out">
            <p className='text-left md:text-2xl font-bold'>Education</p>
            <p className=" text-white font-[popins] text-sm md:text-md pb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right  ">Currently a student at Kirinyaga University. Pursuing Bsc in Software Engineering.</p>

            <div className="block">
            <p className='text-white pb-2   '><span className='md:text-lg font-[poppins] font-medium'>Relevant Coursework Captured: </span> <span className='text-sm font-[poppins] md:text-md'>SDLC, Data Structures, Web development...</span></p>
              

              <a href='https://drive.google.com/file/d/1caMsnJ6_G-DxAtyLP2PlAvU4-Jl0CEQY/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <button className='relative mt-[5%] md:mt-8 p-[8px] border border-[#1dff42] cursor-pointer rounded-xs md:rounded-sm text-white font-medium md:text-lg w-full md:w-[40%] after:content-[""] after:absolute after:w-[12px] after:h-[5px] after:top-[-3px] after:left-0 after:bg-[cyan] after:transform after:translate-x-0 before:absolute before:content[""] before:right-0 before:bottom-[-3px] before:bg-[#1dff42] before:w-[12px] before:h-[5px] before:transform before:translate-x-0 
                hover:before:-translate-x-40 hover:before:transition-all hover:before:duration-[1s] hover:before:ease-in-out hover:rounded-[0] hover:after:translate-x-40 hover:after:transition-all hover:after:duration-[1s] hover:after:ease-in-out 
                hover:transition-all hover:duration-[0.7s] hover:ease-in-out hover:text-antialiased hover:text-transition-all hover:text-accent-cyan-500 '><span className='hover:text-[#1dff42] antialiased hover:transition-all hover:duration-[1s] hover:ease-in-out'>Read</span> <span className='hover:text-[cyan] antialiased hover:transition-all hover-duration-[1s] hover:ease-in-out'>resume</span>
                </button>
              </a>
              
            </div>
          
          </div>

          {/**Right section */}
          <div id="right" className=" border-none mt-[8%] w-[90%] m-auto md:h-[200px] md:w-[40%] sm:m-0 sm:mt-0 bg-trans ">
              <img className='m-auto mt-[0%] h-[200px] md:w-[300px] rounded-sm  ' src= {educationImg} alt="" />
              
          </div>

        </div>

        {/**Who I am section */}
        <div className='border-none border-cyan-500 lg:flex lg:justify-between lg:gap-2 lg:items-end md:p-1 mt-[10%] md:mt-[5%]'>
                  
            
            <div className='border-none lg:w-[80%]'>
            <div className='text-2xl font-medium py-1 text-center'>Front-end</div>

            <div id="front-end" className='flex items-center justify-center rounded-md gap-2 flex-wrap bg-white/1 border border-white/10  p-1 '>
                
                {[...Array(20)].map((_, index) =>(
                  <div key={index} 
                  //onMouseOver={() =>setHoveredIndex(index)}
                  //onMouseOut={() =>setHoveredIndex(null)}
                  //style={{border: hoveredIndex === index?"none":"", boxShadow: hoveredIndex === index ? `0px 2px 5px ${frontLangs[index]?.color} `:"none"}} 
                  style={{boxShadow: `0px 2px 5px ${frontLangs[index]?.color}`}} 

                  
                  className='border rounded-md border-white/10 p-5 h-[80px] w-[80px] hover:border-[#1dff42]'>
                    {frontLangs[index] ? (
                        <img src={frontLangs[index]?.image} alt={frontLangs[index]?.index} className=''/>
                    ) : null }
                  </div>
                ))}
              </div>
            </div>

            
            {/**Right section */}
            <div className='mt-[5%] md:mt-[5%] border-none lg:w-[70%]'>
            <div className='text-2xl font-medium py-1 text-center'>Back-end</div>

            <div id="backend" className='flex items-center justify-center rounded-md gap-2 flex-wrap bg-white/1 border border-white/10 p-2 '>
            {[...Array(16)].map((_, indx) => (
              <div key={indx} 
              //onMouseOver={()=>setHoveredIndex(indx)}
              //onMouseOut={()=>setHoveredIndex(null)}
              style={{boxShadow: `0px 2px 5px ${backLangs[indx]?.color}`}} 
              className=' border rounded-md p-5 border-white/10 h-[80px] w-[80px] hover:border-cyan-500'>
                 {backLangs[indx]? (
                    <img src={backLangs[indx].image} alt={backLangs[indx].id} className=''/>
                 ) : null} 
              </div>
            ))}

            </div>
            </div>

        

        </div>
        <div id="all languages and tools" className='flex items-center justify-between border-none p-2 mt-2'>
</div>
          </motion.div>
          
    </section>
  )
}

export default About
{/**
<img className='absolute mt-[0%] ml-[50%] h-[100px] w-[180px] rounded-tl-[75px] rounded-br-[100px] rotate-[-160deg] scale-y-[-1] z-[20] origin-bottom-left  ' src= {educationImg} alt="" />
              <img className='absolute mt-[0%] ml-[50%] h-[100px] w-[180px] rounded-tl-[75px] rounded-br-[100px] rotate-[-40deg] scale-y-[1] z-[10] origin-bottom-left  ' src= {educationImg} alt="" />
           */}