import React from 'react'
//import heroImg from '../../assets/hero.jpg'

import linkedinImg from '../../assets/linkedin_logo.png'
import githubImg from '../../assets/github_logo.png'



const socialMedia = [
  {indx:0, account: linkedinImg, type:"connect", link: "https://www.linkedin.com/in/malowa-michael-8253422a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {indx:1, account: githubImg, type:"connect", link: "https://github.com/MalowaMichael"},
]

const Home = () => {

  
  return (
        <section 
        id="home"
        className='h-[90vh] md:h-[100vh] relative border-none mt-[10%] m-auto w-[96%] md:min-h-screen md:w-[90%] '
        >
      <div            
            className="mb-[10%] py-2 border-[none] p-4 accent-[#1dff42] bg-gradient-from-tl bg-transparent w-full h-[350px]"
      >
        <div className="block gap-[10px] leading-10 border-[none] text-center w-[70%] m-auto">
          <div className='py-4'>
            <p className='text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1dff42] to-cyan-400 bg-clip-text text-transparent'>Hi there, it's Malowa</p>
            <p className='text-white leading-7 md:text-[25px] font-bold md:leading-10'>I am a front-end developer...</p>
          </div>

          <p className='leading-5 md:py-2 md:leading-8 line-clamp-4 text-normal text-white text-center font-light '>I'm motivated and passionate about crafting solution based applications that offer exceptional performance and seamless user interactivity.</p>
          
        <div id="buttons" className='border-none flex justify-center space-x-4 mt-4'>
          <a href='#works' 
             className=' py-2 w-[50%] md:max-w-[30%] border border-[#1dff42] cursor-pointer rounded-xs md:rounded-sm text-white md:font-medium text-md md:text-lg w-full md:w-[40%] hover:text-[#1dff42]
                '>
                  See projects
              </a>

              <a href='#contacts'
               className='py-2 w-[50%] md:max-w-[30%] md:p-[8px] border border-[#1dff42] cursor-pointer rounded-xs md:rounded-sm text-white md:font-medium text-md md:text-lg w-full md:w-[40%] hover:text-[#1dff42] 
                '>
                  Reach me
                
              </a>
          </div>
        
        </div> 

        {/**Connections */}
        <div className='block border-none md:w-[50%] m-auto mt-[8%] md:mt-[4%] text-center p-1'>
          <p className='text-2xl w-full md:text-3xl font-bold md:font-medium md:leading-10 bg-gradient-to-r from-[#1dff42] to-cyan-400 bg-clip-text text-transparent'>Get connected...</p>
          <div className='flex items-center justify-center gap-8 md:gap-6 mt-5'>
            {socialMedia.map((media) =>(
              <a key={media.indx} href={media.link} rel='noopener noreferrer' target='_blank'>
                  
                  <img  src={media.account} alt={`Connection media ${media.indx}`} className='w-10 h-10 md:w-8 md:h-8 rounded-full hover:shadow-[0px_0px_5px_5px_#1dff42] hover:transition-all hover:ease-in-out '/>

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