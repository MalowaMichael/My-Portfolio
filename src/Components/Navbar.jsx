import React from 'react'
import {Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

  const navItems = ["Home", "About", "Works", "Contacts"];
  const navSections = ["home", "about", "works", "contacts"]
  return (
    <div className="relative sticky top-0 z-[10]">
      {/* Gradient Background */}
      <div className="pb-[1px] bg-gradient-to-r from-[#1dff42] to-[rgb(69, 69, 69)] w-full">
      
        {/* Navbar Container */}
        <div className=" left-0 w-full bg-[#454545] flex items-center justify-between p-4 shadow-md z-50">
          
          {/* Left Side */}
          <div className="flex items-center space-x-4">
            <img className="rounded-full w-10 h-10" src="" alt="" />
            <div className="text-lg italic text-[#1dff42] font-semibold font-mono">Dev Melah</div>
          </div>

          {/* Right Side - Nav Links */}
          <div>
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