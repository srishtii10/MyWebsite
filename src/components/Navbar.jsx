


import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Close the menu after clicking a link
  const handleLinkClick = () => {
    setToggle(false);
  };

  // Prevent page scroll when the menu is open
  if (toggle) {
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  } else {
    document.body.style.overflow = "auto"; // Allow scrolling when menu is closed
  }

  return (
    <>
      <nav className='nav w-full h-16 p-3 flex items-center justify-center'>
        <div className='flex w-full justify-between gap-10 px-8'>
          <div className='h-10 w-10 inline-block'>
            <img className='w-full h-full object-cover' src="../../images/S-letter-pink.png" alt="logo" />
          </div>

          <div className="relative inline-block text-left">
            {toggle === false ? (
              <GiHamburgerMenu
                onClick={() => setToggle(true)}
                style={{ color: 'rgb(179, 40, 108)' }}
                className='sm:hidden text-3xl cursor-pointer text-bold'
              />
            ) : (
              <AiOutlineClose
                onClick={() => setToggle(false)}
                style={{ color: 'rgb(179, 40, 108)' }}
                className='sm:hidden text-3xl cursor-pointer text-bold'
              />
            )}

            {toggle && (
              <div className="absolute sm:hidden right-0 z-10 w-48 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {/* Close menu after clicking a link */}
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="active"
                    className="block px-4 py-2 text-md font-semibold text-black hover:bg-gray-100 hover:text-black cursor-pointer"
                    role="menuitem"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    About
                  </Link>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="active"
                    className="block px-4 py-2 text-md font-semibold text-black hover:bg-gray-100 hover:text-black cursor-pointer"
                    role="menuitem"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    Projects
                  </Link>
                  <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="active"
                    className="block px-4 py-2 text-md font-semibold text-black hover:bg-gray-100 hover:text-black cursor-pointer"
                    role="menuitem"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    Skills
                  </Link>
                  <Link
                    to="experiences"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="active"
                    className="block px-4 py-2 text-md font-semibold text-black hover:bg-gray-100 hover:text-black cursor-pointer"
                    role="menuitem"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    Experiences
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="active"
                    className="block px-4 py-2 text-md font-semibold text-black hover:bg-gray-100 hover:text-black cursor-pointer"
                    role="menuitem"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Normal links for larger screens */}
          <ul style={{ color: 'rgb(179, 40, 108)' }} className='hidden text-3xl font-bold sm:flex gap-9 justify-end w-1/2'>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass="active"
              className="hover:scale-110 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="experiences"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass="active"
              className="hover:scale-110 transition-all cursor-pointer"
            >
              Experiences
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass="active"
              className="hover:scale-110 transition-all cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass="active"
              className="hover:scale-110 transition-all cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass="active"
              className="hover:scale-110 transition-all cursor-pointer"
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
