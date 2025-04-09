import React from 'react'
import { motion } from "motion/react"

import pwayImg from '../../assets/pway.jpg'
import productImg from '../../assets/product-routing.jpg'
import sharingImg from '../../assets/image_sharing_app.jpg'
import resumeImg from '../../assets/resume_builder.jpg'
import jsprojectImg from '../../assets/javascript_project.jpg'


//define the image mock data
const projImages = [
  {indx: 0, theImg: pwayImg, link: "https://malowamichael.github.io/P-Way-Express/"},
  {indx: 1, theImg: productImg, link: "https://malowamichael.github.io/Dynamic-Product-Routing-with-React/"},
  {indx: 2, theImg: sharingImg, link: "https://stock-market-app-lake.vercel.app/"},
  {indx: 3, theImg: resumeImg},
  {indx: 4, theImg: jsprojectImg},

]

const projNames = [
  {id:0, name:"P`Way E-commerce"},
  {id:1, name:"Product Routing"  },
  {id:2, name:"Stock Market App"  },
  {id:3, name:"React Resume Builder"  },
  {id:4, name:"JavaScript Projects"}
]

const Works = () => {
  return (
    <section id="works"
    className='border-none p-1 min-h-screen h-full w-[90%] m-auto my-[5%]'
    >
      <motion.div
      initial={{opacity:0, y:150}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      className=' m-auto w-full h-screen border-none border-blue-500 md:mt-[10%]'
      >
          {/**My projects section */}
          <p className='text-2xl md:text-4xl antialiased font-[calibri] font-semibold text-center my-4 bg-gradient-to-r from-[#1dff42] to-cyan-500 bg-clip-text text-transparent '>My Projects</p>

            <div className='border-none border-yellow-700 flex flex-wrap gap-[1%] sm:flex sm:flex-wrap sm:gap-[1%] p-1 justify-between lg:items-start  lg:gap-x-[0.5%] h-full md:h-[600px] w-full  '>
              
              {projImages.map((image, index) =>{
                //find the corresponding image name
                const projectName = projNames.find((name) => name.id === image.indx)

                return (
                    <div key={index} className='border border-white/10 w-[45%] h-[30%] sm:w-[40%] md:w-[30%] md:h-[auto] lg:w-[20%] lg:mt-[0] lg:ml-[0]  m-auto rounded-sm sm:rounded-xs mb-4 cursor-pointer hover:shadow-md hover:shadow-[#4ef0ff] hover:transition-all hover:ease-in-out hover:duration[0.7s]'>
                      <a href={image.link} target='_blank' rel='noopener noreferrer'>

                          <img src = {image.theImg} alt = {`Image-${image.indx}`} 
                          className='object-cover w-full h-[110px] md:h-[150px] md:w-full md:m-auto mb-4 hover:transition-all hover:duration:[1s] hover:ease-in-out '
                          onClick={() => alert("You are just about to leave this site!")}
                          
                          />
                          <p onClick={() => alert("You are just about to leave this site!")} className='relative mt-[20%] md:pb-2 lg:mt-[30%] lg:font-medium sm:mt-0 w-max-content text-center text-sm font-normal md:font-normal bg-gradient-to-r from-[#1dff42] to-cyan-500 bg-clip-text text-transparent hover:text-[#1dff42] 
                          hover:transition-all hover:duration-[1s] hover:ease-in-out'>{projectName.name}</p>
                    </a>

                  </div>
                )
              })}
            </div>
      
      </motion.div>
    </section>
  )
}

export default Works