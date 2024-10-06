import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div style={{ backgroundColor:"rgb(150, 60, 108)"}} className='h-40 w-full'>
        <div className='sm:w-2/5 w-2/3 h-28 m-auto p-5 flex flex-wrap justify-center sm:gap-4 gap-2'>
         <span  className='mt-2 text-white  text-3xl'><a href="https://www.linkedin.com/in/srishti-khurana-673293239/" target='_blank'><BsLinkedin /></a></span>
         <span  className='mt-2 text-white text-3xl'>
         <a href="mailto:srishtikhurana11@gmail.com" target='_blank'><IoMail /></a></span>
         <span  className='mt-2 text-white text-3xl'><a href="https://github.com/srishtii10" target='_blank'><FaGithub /></a></span>
        </div>

        <div className='sm:w-2/5 w-2/3 mx-auto p-1 mb-7 h-6 text-center text-white font-semibold' ><i>Made by Srishti Khurana.</i></div>
    </div>
    </>
  )
}

export default Footer