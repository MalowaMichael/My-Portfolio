import React, { useEffect, useState } from 'react'
import {Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [harmburgerOpen, setharmBurgerOpen] = useState(true)
  const [closeBtn, setCloseBtn] = useState(false)
  
  
  const handleBurger = () =>{
    setharmBurgerOpen(false)
    setMenuOpen(true)
    setCloseBtn(true)
  }

  const handleClose = () =>{
    setharmBurgerOpen(true)
    setMenuOpen(false)
    setCloseBtn(false)
  }
  
  const handleLinkClick = (event, sectionID) =>{
    event.preventDefault();
    //const section = document.querySelector(sectionID)
    handleClose();
  }
  const navItems = ["Home", "About", "Works", "Contacts"];
  const navSections = ["home", "about", "works", "contacts"]
  
  return (
    <div className="relative sticky top-0 z-[10] w-[100%]">
      {/* Gradient Background */}
      <div className="pb-[1px] bg-gradient-to-r from-[#1dff42] to-[rgb(69, 69, 69)] w-full">
      
        {/* Navbar Container */}
        <div className=" left-0 w-full bg-[#454545] flex items-center justify-between p-4 shadow-md z-50">
          
          {/* Left Side */}
          <div className="flex items-center space-x-4">
            <img className="rounded-full h-5 w-5 md:w-10 md:h-10" src="" alt="" />
            <div className="md:text-lg italic text-[#1dff42] md:font-semibold font-mono">Dev Melah</div>
          </div>

          <div className='text-[20px] border-none p-2 w-[8%] md:hidden' >
            <span onClick={handleBurger} className={`${harmburgerOpen ? "block":"hidden"} cursor-pointer hover:text-[#1dff42]`}>&#9776;</span> <span className={`${closeBtn ? "block":"hidden"} cursor-pointer w-[10%] hover:text-[#1dff42] text-[30px] md:hidden`} onClick={handleClose}>&times;</span>
          </div>
          
          {/* Right Side - Nav Links */}
          <div className={`${menuOpen ? "block":"hidden"} absolute md:block z-[1000] bg-white/35 left-0 right-0 top-[100%] h-screen w-[100%] m-auto`}>
            <ul className=" leading-20 text-center bg-white/95 text-black text-2xl md:flex md:items-end md:gap-[15%] text-[#1dff42] md:text-lg font-mono md:justify-between md:w-lg">
              {navItems.map((item, index) => (
                  <li
                  key={index}
                  onClick={handleLinkClick}
                >
                  <ScrollLink
                  to={navSections[index]} 
                  smooth={true} 
                  duration={500} 
                  offset={-50} // Adjusts scrolling position
                  className="relative cursor-pointer after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-[cyan] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:text-[cyan]"

                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Navbar