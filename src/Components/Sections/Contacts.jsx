import React from 'react'
import { motion } from "motion/react"


import whatsappImg from '../../assets/whatsapp_logo.png'
import mailImg from '../../assets/mail_logo.png'


const reachMe = [
  {indx:0, account: mailImg, type:"socialize", link: "mailto:plmalowa27@outlook.com"},
  {indx:1, account: whatsappImg, type:"socialize", link: "https://wa.me/254784192800?text=Hey%Paul!"}
]



const Contacts = () => {
  //const letSocialize = socialMedia.filter(media => media.type==='socialize')
  //const letConnect = socialMedia.filter(media => media.type==='connect')
  
  return (
    <section id="contacts" className='border-none p-1 min-h-screen md:w-[90%] m-auto mb-[5%] mt-[50%] sm:mt-[60%] lg:mt-[10%]'>
      
      <motion.div
        initial={{opacity:0, y:150}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8, easings:"easeout"}}
        className='w-full border-none'
      >
        <p className='text-2xl md:text-5xl antialiased font-[calibri] font-semibold text-center my-4 bg-gradient-to-r from-[#1dff42] to-black bg-clip-text text-transparent '>Let's Talk</p>
        <p className='text-center bg-gradient-from-tl bg-gradient-to-br from-[#1dff42] to-cyan-700 bg-clip-text text-transparent'>I understand your purpose for visiting my portfolio. Let's get in touch.<br/>
        Together,  we build something bigger.</p>

      <div id="contacts-container" className='sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[50%] 2xl:w-[60%] border border-white/10 m-auto mt-[10%] md:mt-[2%] bg-transparent border border-white/10 rounded-md  '>
        
        <div id='quick-contacts' className='block border-none'>
           <p className='text-[cyan] text-center font-medium text-[18px] '>Quick Connections</p>

          <div id="images" className='flex items-center justify-center gap-5 mt-[5%]'>
            <svg className="absolute w-40 h-40" viewBox="0 0 200 200">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"/>
                  </defs>
                  <text fill="#1dff42" fontSize="14" fontWeight="bold">
                    <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle">
                    </textPath>
                  </text>
              </svg>

              {reachMe.map((contact)=>(
                <a key={contact.indx} href={contact.link}>
                <img className='relative h-8 w-8 rounded-full hover:shadow-[0px_0px_5px_5px_#1dff42] hover:transition-all hover:ease-in-out ' src= {contact.account} alt={`Mail/whatsapp${contact.indx}`} />
                
              </a>
              ))}          
          
          </div>

        
        </div>
        <hr className='bg-white/5 my-4 w-[94%] m-auto'/>

        {/**Contact Form */}
        <div className='border-none p-2'>
          <form className='flex flex-col items-center gap-5 '>
            <input className='text-md focus:border-cyan-700 focus:bg-aqua/5 border border-white/15 rounded-sm md:rounded-md outline-none w-[96%] md:w-[90%] m-auto p-2 md:p-3 ' type = "text" name = "name" placeholder='your name'/>
            <input className='text-md focus:border-cyan-700 focus:bg-aqua/5 border border-white/15 rounded-sm md:rounded-md outline-none w-[96%] md:w-[90%] m-auto p-2 md:p-3 ' type = "email" name = "email" placeholder='example@gmail.com'/>

            <textarea className='focus:border-cyan-700 focus:bg-aqua/5 w-[96%] md:w-[90%] m-auto border border-white/10 rounded-md outline-none px-2' rows="5" cols="30" placeholder='your comments...'></textarea>
          
              <input className='text-white bg-[aqua]/25 sm:text-lg text-center p-2 w-[80%] sm:w-[70%] m-auto md:mb-[2%] rounded-md hover:rounded-none cursor-pointer  ' type="submit" onClick={() => alert("Please use the quick connections for now.")} value="Send"/>
          </form>
        </div>

                    
        </div>

      
      </motion.div>     
      
    </section>
  )
}

export default Contacts