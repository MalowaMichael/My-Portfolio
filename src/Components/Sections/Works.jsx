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
  {indx: 2, theImg: sharingImg},
  {indx: 3, theImg: resumeImg},
  {indx: 4, theImg: jsprojectImg}
]

const projNames = [
  {id:0, name:"P`Way E-commerce"},
  {id:1, name:"Product Routing"  },
  {id:2, name:"Image Sharing App"  },
  {id:3, name:"React Resume Builder"  },
  {id:4, name:"JavaScript Projects"}
]

const Works = () => {
  return (
    <section id="works"
    className='min-h-screen w-[90%] m-auto my-[5%]'
    >
      <motion.div
      initial={{opacity:0, y:150}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      className=' m-auto w-full h-[400px]'
      >
          {/**My projects section */}
          <p className='md:text-4xl antialiased font-[calibri] font-semibold text-center my-4 bg-gradient-to-r from-[#1dff42] to-cyan-500 bg-clip-text text-transparent '>My Projects</p>

            <div className='flex p-4 justify-between h-[300px] w-full bg-  '>
              
              {projImages.map((image, index) =>{
                //find the corresponding image name
                const projectName = projNames.find((name) => name.id === image.indx)

                return (
                    <div key={index} className='block cursor-pointer hover:shadow-md hover:shadow-[#4ef0ff] hover:transition-all hover:ease-in-out hover:duration[0.7s]'>
                      <a href={image.link} target='_blank' rel='noopener noreferrer'>

                          <img src = {image.theImg} alt = {`Image-${image.indx}`} 
                          className='h-[150px] w-[200px] mb-4 hover:transition-all hover:duration:[1s] hover:ease-in-out '
                          onClick={() => alert("You are just about to leave this site!")}
                          
                          />
                          <p className='relative w-max-content text-center bg-gradient-to-r from-[#1dff42] to-cyan-500 bg-clip-text text-transparent hover:text-[#1dff42] 
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