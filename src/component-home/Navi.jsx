import { useNavigate } from 'react-router-dom'
import React from 'react'
import exercise from '../assets/exercise.png'
import SelfLogo from './SelfLogo'
const Navi = () => {  
  const navigate = useNavigate ()
  return (
    <>
    <div className='top-0 z-50 w-full sticky bg-gradient-to-l from-slate-950 via-transparent to-slate-950'>
      <div className = "flex items-center py-1.5 mobsm:px-[4%] sm:px-[10%] xl:px-40 bg-gradient-to-l from-transparent via-black to-transparent bg-opacity-75 shadow-xl  backdrop-blur-sm">
            <SelfLogo/>
            <ul className='flex-1 text-center sm:translate-x-10'>
                <button onClick={()=>navigate('/home')} className='hover:scale-125 duration-500 hover:shadow-xl list-none inline-block px-3'><h1 className='text-white text-xl sm:px-3 xl:px-10'>Home</h1></button>
                <button onClick={()=>navigate('/work')} className='hover:scale-125 duration-500 hover:shadow-xl list-none inline-block px-5'><h1 className='text-white text-xl sm:px-3 xl:px-10'>Work</h1></button>
                <button onClick={()=>navigate('/others')} className='hover:scale-125 duration-500 hover:shadow-xl list-none inline-block px-5'><h1 className='text-white text-xl sm:px-3 xl:px-10'>Others</h1></button>
            </ul>
            <a href="https://exerciseftui.com" target='_blank'><img src={exercise} className='translate-x-12 w-32 mobsm:hidden sm:inline xl:h-10 cursor-pointer hover:animate-pulse'/></a>
      </div>
    </div>
    </>
  )
}

export default Navi