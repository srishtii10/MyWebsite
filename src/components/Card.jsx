import React from 'react'

export const Card = ({image,text,link,heading}) => {
  return (
    <>
     <div className='m-5  flex flex-wrap shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 w-72  rounded-lg  mb-3 p-3  overflow-hidden'>
        <div className='bg-white h-36 w-64 mb-3 mx-auto rounded-lg overflow-hidden'>
            <img className='h-full w-full object-cover' src={image} alt="none" />
        </div>
        <div style={{ color:"rgb(179, 40, 108)" }} className=' h-64 w-64 mx-auto rounded-lg block p-3'>
            <h1 className='font-bold text-xl mb-2 text-center'>{heading}</h1>
            <p className='text-center mb-2'>{text}</p>
           
            
        </div>
        <div className='w-full text-center  '>
            <a className=' p-1 bg-zinc-200 px-3 text-pink-700 rounded-lg translate-x-[140%] ' href={link} target='_blank'>Demo</a>
           
            </div>
     </div>
    </>
   
  )
}
