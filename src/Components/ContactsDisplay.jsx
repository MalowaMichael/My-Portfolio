import React from 'react'

import whatsappImg from '../assets/whatsapp.jpg'
import mailImg from '../assets/mail.jpg'
import facebookImg from '../assets/facebook.jpg'
import instagramImg from '../assets/instagram.jpg'
import linkedinImg from '../assets/linkedin.jpg'
import githubImg from '../assets/github.jpg'


const socialMedia = [
  {indx:1, account: githubImg, type:"connect", link: "https://github.com/MalowaMichael"},
  {indx:2, account: facebookImg, type:"socialize", link: "https://www.facebook.com/profile.php?id=100093170086208"},
  {indx:0, account: linkedinImg, type:"connect", link: "https://www.linkedin.com/in/malowa-michael-8253422a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {indx:3, account: instagramImg, type:"socialize", link: "https://www.instagram.com/fatli_mema?igsh=YzljYTk1ODg3Zg=="}
]



const Contact = () => {
  const letSocialize = socialMedia.filter(media => media.type==='socialize')
  const letConnect = socialMedia.filter(media => media.type==='connect')
  return (
    <div className='w-[90%] m-auto mt-[5%]'>
      <div id= "screen-saver" className='w-[60%] m-auto text-white p-4 text-center font-[Gill Sans, Gill Sans MT, Calibri, Trebuchet MS]'>
          <p className='text-[22px] antialiased font-semibold text-[#1dff42] text-center  '>Let's <span className='text-[#119928]'>Talk</span></p>
          <p>I understand your purpose for visiting my portfolio. Hesitate not to reach me for more excluded details. As well, feel free to rate 
            my work or report issue.
          </p>
          <p>Together,  we build something bigger </p>
      </div>

      <div id="contacts-container" className='p-2 w-[50%] m-auto mt-[2%] bg-gradient-from-tl bg-gradient-to-br from-[#454545] to-[#119928]  '>
        <p className='text-[cyan] text-center font-medium text-[18px] '>Feel Free to Reach Me</p>
        <hr className='h-[1px] text-white mt-4 w-[90%] m-auto'/>
        
        <div id='quick-contacts' className='flex justify-around'>
        <div id='mail-me' className='mt-[5%]'>
          <p className='text-white font-semibold'>Mail me</p>
          <a href='mailto:plmalowa27@outlook.com'>
            <img className='h-10 w-10 rounded-full m-auto mt-[5%]' src= {mailImg} alt="" />

          </a>
        </div>

        <div id="whatsapp-me" className='mt-[5%]'>
          <p className='text-white font-semibold'>Chat on WhatsApp</p>
          <a href='https://wa.me/254784192800?text=Hey%Paul!' className='' target='_blank' rel='noopener noreferrer'>
            <img className='h-10 w-10 rounded-full m-auto mt-[5%]' src= {whatsappImg} alt="" />

          </a>
        </div>
        </div>

        <hr className='h-[1px] text-white mt-[5%] mb-[0] w-[70%] m-auto'/>

        <div id='socio-connect' className='flex justify-around my-4'>
          {/**Follow me accounts */}
          <div className=' bg-transparent'>
            <p className='text-white text-left text-[20px] pb-4 pr-4 font-semibold'>Follow me</p>

            {letSocialize.map((image) =>{
              return (
                <div className='flex flex-wrap m-auto pr-4 pl-0 w-l bg-transparent float-left'>
                    <img key = {image.id} src={image.account} 
                    alt={`Media account-${image.id}`}
                      className='h-10 w-10 rounded-full'
                    />
                  </div>
              )
                  
              })}
          
          </div>          

          <div className='bg-transparent'>
              <p className='text-white text-right text-[20px] pb-4 pr-4 font-semibold'>Connect</p>
                {letConnect.map((acc) => {
                    return (
                      <div className='flex flex-wrap m-auto pl-4 pr-0 w-l bg-transparent float-right'>
                        <a href={acc.link} target='_blank' rel='noopener noreferrer'>
                        <img key ={acc.indx} src = {acc.account}
                        alt = {`Media account-${acc.indx}`}
                        className='h-10 w-10 rounded-full'
                        />
                        </a>
                      </div>
                    )
                  })}
            
            </div>
          
        </div>
        <hr className='h-[1px] text-white mt-[5%] mb-[0] w-[90%] m-auto'/>

      
      </div>
      
    </div>
  )
}

export default Contact