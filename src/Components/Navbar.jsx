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
        <div className=" left-0 w-screen bg-[#454545] flex items-center justify-between p-4 shadow-md z-50">
          
          {/* Left Side */}
          <div className=" border-none flex items-center space-x-4 md:w-[40%]">
            <img className="rounded-full h-5 w-5 md:w-10 md:h-10" src="" alt="" />
            <div className="md:text-lg italic text-[#1dff42] md:font-semibold font-mono">Dev Melah</div>
          </div>

          <div className='text-[20px] border-none p-2 w-[8%] md:hidden' >
            <span onClick={handleBurger} className={`${harmburgerOpen ? "block":"hidden"} cursor-pointer hover:text-[#1dff42]`}>&#9776;</span> <span className={`${closeBtn ? "block":"hidden"} cursor-pointer w-[10%] hover:text-[#1dff42] text-[30px] md:hidden`} onClick={handleClose}>&times;</span>
          </div>
          
          {/* Right Side - Nav Links */}
          <div className={`${menuOpen ? "block":"hidden"} border-none absolute w-[96%] m-auto z-[1000] bg-white/35 left-0 right-0 top-[100%] h-screen md:left-[45%] md:w-[55%] md:block md:z-[50] md:bg-transparent md:h-[70px] md:top-0 `}>
            <ul className=" leading-20 text-center bg-white/95 md:bg-[#454545] border-none md:top-[50%] text-black text-2xl font-mono md:leading-0 md:text-[#1dff42] md:w-[100%] md:p-8 md:flex md:items-start md:justify-between md:gap-[5%] md:text-lg">
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