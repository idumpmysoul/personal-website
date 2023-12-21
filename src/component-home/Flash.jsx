import React from 'react'
import { useNavigate } from 'react-router-dom'

function Flash() {
    const navigate = useNavigate ()
  return (
    <>
    <div className='container place-items-center min-h-full py-[10%] px-[10%] min-w-full'>
        <h1 className='text-white bg-none font-semibold drop-shadow-2xl text-6xl'>Works and Projects</h1>
        <button onClick={()=>navigate('/work')} className='mt-8 duration-500 hover:bg-teal-300 rounded-3xl text-2xl bg-none border-white border-[2px] w-[200px] h-[60px] text-white'>Check it out </button>
    </div>
    </>
  )
}

export default Flash