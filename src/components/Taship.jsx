import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const Taship = () => {
  return (
    <>
    <div className='w-full'>
    <div className='w-3/4 flex mx-auto  m-4'>
    <div style={{ color: 'rgb(186, 40, 118)' }} className='h-full text-right p-1 py-4 sm:p-4 font-semibold sm:w-[30%] w-[20%] '>
        <h1 className='sm:text-lg text-md '><i>Remote</i></h1>
        <h1 className='sm:text-xl text-lg'><i>Jan 2024 - April 2024</i></h1>
    </div>
    <div style={{ color: 'rgb(186, 40, 118)' }} className='h-full sm:w-[65%] w-[80%] py-4 sm:px-7 px-4 '>
        <h1 className=' font-bold text-2xl'>Teaching Assistant - Coding Ninjas</h1>
        <p className='mt-4 text-md font-semibold'> Mentored over 280+ students, enhancing their understanding of Java programming and Data  Structures
        & Algorithms. Assisted them in identifying and fixing bugs in their code, fostering their problem-solving
        skills and coding proficiency.This improved my communication skills by effectively explaining complex concepts to students,
        tailoring my approach to diverse learning styles and levels of understanding.</p>
       <div className='flex flex-wrap gap-x-6'>
       <div className='text-xl mt-4 flex flex-wrap'>
            <div className='flex mr-1 pt-1  '><FaCircleCheck /> </div>
            <div className='text-xl font-semibold '> <h1 ><i>Java</i></h1></div>
        </div>

        <div className='text-xl mt-4 flex flex-wrap'>
            <div className='flex mr-1 pt-1  '><FaCircleCheck /> </div>
            <div className='text-xl font-semibold '> <h1 ><i>DSA</i></h1></div>
        </div>

        <div className='text-xl mt-4 flex flex-wrap'>
            <div className='flex mr-1 pt-1  '><FaCircleCheck /> </div>
            <div className='text-xl font-semibold'> <h1 ><i>Mentorship</i></h1></div>
        </div>

        <div className='text-xl mt-4 flex flex-wrap'>
            <div className='flex mr-1 pt-1  '><FaCircleCheck /> </div>
            <div className='text-xl font-semibold'> <h1 ><i>Communication</i></h1></div>
        </div>
       </div>
    </div>

    
    </div>
    
    </div>
    
    </>
    
  )
}

export default Taship