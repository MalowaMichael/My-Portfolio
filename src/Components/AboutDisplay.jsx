import React from 'react'
import myselfImg from '../assets/myself.jpg'
import educationImg from '../assets/education.jpg'

import pwayImg from '../assets/pway.jpg'
import productImg from '../assets/product-routing.jpg'
import sharingImg from '../assets/image_sharing_app.jpg'
import resumeImg from '../assets/resume_builder.jpg'
import jsprojectImg from '../assets/javascript_project.jpg'


//define the image mock data
const projImages = [
  {indx: 0, theImg: pwayImg, link: "https://malowamichael.github.io/P-Way-Express/"},
  {indx: 1, theImg: productImg},
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
const AboutDisplay = () => {
   
  return (
    <div className='relative w-[90%] m-auto'>

          {/**Education section */}
        <div id = "education" className='relatve m-auto w-full h-[400px] mt-[4%]'>
          <p className='text-[24px] antialiased text-white font-[calibri] font-semibold text-center my-4   '>Education</p>
        
          <div className='absolute p-4 flex justify-between h-[300px] w-full bg-gradient-from-tl bg-gradient-to-br from-[rgba(29,255,66,0.5)] from-[3%] to-[rgba(0,0,0,0)] to-[62.29%]   '>
          
          {/**Left section */}
          <div className="left">
            <p className=" text-white font-[Gill Sans, Gill Sans MT, Calibri, Trebuchet MS] text-[18px] pb-4   ">Currently a student at Kirinyaga University. Pursuing Bsc in Software Engineering.</p>

            <div className="block">
            <p className='text-[20px] text-white font-bold pb-2   '>Skills gained therein</p>
              <ul className='block font-light text-[18px] text-white leading-relaxed'>
                <li>Problem solving</li>
                <li>Teamwork</li>
                <li>Excellent communication skills</li>
              </ul>

              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
              <button className='relative my-4 p-[8px] border-[1.5px] border-[#1dff42] cursor-pointer rounded-sm text-white font-medium text-lg w-[50%] after:content-[""] after:absolute after:w-[15px] after:h-[8px] after:top-[-5px] after:left-0 after:bg-[cyan] after:transform after:translate-x-0 before:absolute before:content[""] before:right-0 before:bottom-[-5px] before:bg-[#1dff42] before:w-[15px] before:h-[8px] before:transform before:translate-x-0 
                hover:before:-translate-x-50 hover:before:transition-all hover:before:duration-[1s] hover:before:ease-in-out hover:rounded-[0] hover:after:translate-x-50 hover:after:transition-all hover:after:duration-[1s] hover:after:ease-in-out 
                hover:transition-all hover:duration-[0.7s] hover:ease-in-out hover:text-antialiased hover:text-transition-all hover:text-accent-cyan-500 '><span className='hover:text-[#1dff42] antialiased hover:transition-all hover:duration-[1s] hover:ease-in-out'>Read me in my</span> <span className='hover:text-[cyan] antialiased hover:transition-all hover-duration-[1s] hover:ease-in-out'>resume</span>
                </button>
              </a>
              
            </div>
          
          </div>

          {/**Right section */}
          <div className="flex relative bg-white h-[0px] w-[80%] items-center justify-center translate-x-30 translate-y-40 rotate-[7deg]">
              <img className='absolute mt-[0%] ml-[50%] h-[190px] w-[200px] rounded-tl-[75px] rounded-br-[100px] rotate-[-145deg] scale-y-[-1] z-[30] origin-bottom-left  ' src= {educationImg} alt="" />
              <img className='absolute mt-[0%] ml-[50%] h-[190px] w-[200px] rounded-tl-[75px] rounded-br-[100px] rotate-[-160deg] scale-y-[-1] z-[20] origin-bottom-left  ' src= {educationImg} alt="" />
              <img className='absolute mt-[0%] ml-[50%] h-[190px] w-[200px] rounded-tl-[75px] rounded-br-[100px] rotate-[-40deg] scale-y-[1] z-[10] origin-bottom-left  ' src= {educationImg} alt="" />
          </div>

        </div>
        </div>

        {/**Who I am section */}
        <div id="myself" className=' m-auto w-full h-[400px] mt-[auto]'>
          <p className='text-[24px] antialiased text-white font-[calibri] font-semibold text-center my-4   '>Who I am</p>
          <div className='relative p-4 flex justify-between h-[300px] w-full bg-gradient-from-tl bg-gradient-to-br from-[rgba(29,255,66,0.5)] from-[3%] to-[rgba(0,0,0,0)] to-[62.29%]   '>
            <div id="left" className='flex gap-5 w-[full bg-transparent justify-between'>
              
              <div className='bg-white border-[1.5px] border-[#4ef0ff] rounded-md w-[30%] p-4 bg-gradient-to-b from-white to-[#999] hover:shadow-lg hover:shadow-[#4ef0ff] hover:transition-all hover:duration-[0.7s] hover:ease-in-out'>
                <h4 className='font-medium text-center antialiased text-[18px] pb-6 relative before:content-[""] before:absolute before:bg-gradient-from-tr before:bg-gradient-to-br from-[#000000] to-[#4ef0ff] before:h-[50px] before:inset-0 before:w-full z-[10] '>Frontend Developer</h4>
                <p className='text-18px font-[calibri MT] text-center antialiased px-2 pb-6'>Enjoys developing applications in which user activity seamlessly blend with modern interactions.</p>
                <p className='text-center text-black antialiased text-[20px] '>Let's do it now!</p>
                
              </div>

              <div className='bg-white border-[1.5px] border-[#4ef0ff] rounded-md w-[30%] p-4 bg-gradient-to-b from-white to-[#999] hover:shadow-lg hover:shadow-[#4ef0ff] hover:transition-all hover:duration-[0.7s] hover:ease-in-out'>
                <h4 className='font-medium text-center antialiased text-[18px] pb-6 relative before:content-[""] before:absolute before:bg-gradient-from-tr before:bg-gradient-to-br from-[#000000] to-[#4ef0ff] before:h-[50px] before:inset-0 before:w-full z-[10] '>UI/UX Designer</h4>
                <p className='text-18px font-[calibri MT] text-center antialiased px-2 pb-6'>Designing is fun. Get my cutting-edge designs done with <strong><span className='text-[aqua]'>Figma</span></strong>.</p>
                <p className='text-center text-black antialiased text-[20px] '>Off we go!</p>
                
              </div>

              <div className='bg-white border-[1.5px] border-[#4ef0ff] rounded-md w-[30%] p-4 bg-gradient-to-b from-white to-[#999] hover:shadow-lg hover:shadow-[#4ef0ff] hover:transition-all hover:duration-[0.7s] hover:ease-in-out'>
                <h4 className='font-medium text-center antialiased text-[18px] pb-6 relative before:content-[""] before:absolute before:bg-gradient-from-tr before:bg-gradient-to-br from-[#000000] to-[#4ef0ff] before:h-[50px] before:inset-0 before:w-full z-[10] '>Backend Developer</h4>
                <p className='text-18px font-[calibri MT] text-center antialiased px-2 pb-6'>Junior developer. Sooner, get your web/application backend done.</p>
                <p className='text-center text-black antialiased text-[20px] '>Just yet to come!</p>
              </div>
            </div>
            
            {/**Right section */}
            <div id = "right" className='flex relative bg-transparent h-[200px] w-full items-center justify-center rotate-[7deg] translate-x-7'>
              <img className='absolute mt-[30%] ml-[75%] h-[190px] w-[200px] rounded-tl-[75px] rounded-br-[100px] rotate-[-145deg] scale-y-[-1] z-[30] origin-bottom-left  ' src= {myselfImg} alt="" />
              <img className='absolute mt-[30%] ml-[75%] h-[190px] w-[200px] rounded-tl-[75px] rounded-br-[100px] rotate-[-160deg] scale-y-[-1] z-[20] origin-bottom-left  ' src= {myselfImg} alt="" />
              <img className='absolute mt-[30%] ml-[75%] h-[190px] w-[200px] rounded-tl-[75px] rounded-br-[100px] rotate-[-40deg] scale-y-[1] z-[10] origin-bottom-left  ' src= {myselfImg} alt="" />
            </div>
          </div>

        </div>

        {/**My projects section */}
        <div id="my-projects" className=' m-auto w-full h-[400px] mt-[auto]'>          
          <p className='text-[24px] antialiased text-white font-[calibri] font-semibold text-center my-4   '>My Projects</p>

            <div className='flex p-4 justify-between h-[300px] w-full bg-gradient-from-tl bg-gradient-to-br from-[rgba(29,255,66,0.5)] from-[3%] to-[rgba(0,0,0,0)] to-[62.29%]  '>
              
              {projImages.map((image) =>{
                //find the corresponding image name
                const projectName = projNames.find((proj) => proj.id === image.indx)

                return (
                    <div className='block cursor-pointer hover:shadow-lg hover:shadow-[#4ef0ff] hover:transition-all hover:ease-in-out hover:duration[0.7s]'>
                      <a href={image.link} target='_blank' rel='noopener noreferrer'>

                          <img src = {image.theImg} alt = {`Image-${image.indx}`} 
                          className='h-[150px] w-[200px] mb-4 hover:transition-all hover:duration:[1s] hover:ease-in-out '
                          />
                          <p className='relative w-max-content text-center text-white hover:text-[#1dff42] hover:transition-all hover:duration-[1s] hover:ease-in-out'>{projectName.name}</p>
                    </a>

                  </div>
                )
              })}
            </div>
        </div>
      
    </div>
  )
}

export default AboutDisplay