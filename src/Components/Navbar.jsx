import React from 'react'
import {Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

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

          <div className='text-[20px] md:hidden'>
            &#9776;
          </div>
          {/* Right Side - Nav Links */}
          <div className='hidden md:block'>
            <ul className="flex items-end gap-[15%] text-[#1dff42] text-lg font-mono justify-[space-between] w-lg">
              {navItems.map((item, index) => (
                  <li
                  key={index}
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