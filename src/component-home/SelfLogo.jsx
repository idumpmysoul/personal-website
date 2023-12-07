import React from 'react'
import mylogo from '../assets/mylogo.png'

function SelfLogo() {
  return (
    <div className='flex group justify-center'>
            <h1 className='text-white italic ml-7 font-black group-hover:opacity-100 duration-700 delay-700 text-2xl absolute bottom-[19px] opacity-0'>ABED</h1>
            <div className='group-hover:scale-[42%] duration-300 mobsm:scale-75 group-hover:translate-y-[1px] sm:scale-[90%]'>
              <img src={mylogo} className='relative overflow-hidden delay-300  group-hover:translate-x-[148px] group-hover:italic duration-1000 w-10 my-2 cursor-pointer'/>
            </div>
    </div>
  )
}

export default SelfLogo