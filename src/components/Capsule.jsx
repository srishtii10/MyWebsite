import React from 'react'

const Capsule = ({skill}) => {
  return (
    <>
    <div  className=' capsule text-white w-48 h-8 bg-red-600 m-5 rounded-full overflow-hidden py-[4px] px-1 text-center text-md font-bold'>{skill}</div>
    </>
  )
}

export default Capsule