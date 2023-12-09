import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import exercise from '../assets/exercise.png'
function DropDown() {
    const navigate = useNavigate ()
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div onClick={() => setIsOpen((prev) => !prev)}> 
            {!isOpen ?(
            <div className='overflow-hidden flex'>
                <div className='relative container overflow-hidden text-center h-8 mobsm:py-4 mobsm:w-12  mt-3 cursor-pointer rounded-lg duration-300 bg-opacity-100 bg-transparent'>
                    <div className='h-1 mr-[6px] ml-[12px] bg-white -mt-[10px] transition duration-500 '></div>
                    <div className='h-1 mr-[6px] ml-[12px] bg-white mt-[4px] transition duration-200'></div>
                    <div className='h-1 mr-[6px] ml-[12px] bg-white mt-[4px] transition duration-500'></div>
                </div>
                <div className='flex-1 flox-row fixed items-center self-center bg-none mobsm:right-0 mobsm:top-[10%] -z-50 h-fit w-screen duration-500'>
                    <div className='grid w-full place-items-center'>
                        <a href="https://exerciseftui.com" target='_blank'><img src={exercise} className='w-32 opacity-0 -mt-[100px] cursor-pointer hover:animate-pulse  duration-300'/></a>
                    </div>
                </div>
                <div className='flex-1 flox-row fixed backdrop-blur-md items-center self-center bg-slate-500 mobsm:right-0 mobsm:top-[100%] -z-50 -translate-y-[180px] w-screen duration-500'>
                    <ul className='mt-[2%] mb-[3%] flex-1 flex-row text-center duration-300'>
                        <li className='hover:scale-125 w-full duration-500 hover:shadow-xl list-none inline-block px-3'><a className='text-white text-xl sm:px-3 xl:px-10'>Home</a></li>
                        <li className='hover:scale-125 w-full duration-500 hover:shadow-xl list-none inline-block px-5'><a className='text-white text-xl sm:px-3 xl:px-10'>Work</a></li>
                        <li className='hover:scale-125 w-full duration-500 hover:shadow-xl list-none inline-block px-5'><a className='text-white text-xl sm:px-3 xl:px-10'>Others</a></li>
                    </ul>
                </div>
            </div>
            ):(
            <div className='overflow-hidden flex'>
                <div className='relative scale-75 container text-center h-8 mobsm:py-4 mobsm:w-12  mt-3 cursor-pointer rounded-lg  duration-300 bg-opacity-100 bg-transparent'>
                    <div className='h-1 mr-[6px] ml-[12px] bg-white -mt-[2px] rotate-[50deg] transition duration-500'></div>
                    <div className='h-1 mr-[6px] ml-[12px] opacity-0 bg-white mt-[4px] transition duration-200'></div>
                    <div className='h-1 mr-[6px] ml-[12px] bg-white -mt-[12px] -rotate-[50deg] transition duration-500'></div>
                </div>
                <div className='flex-1 flox-row fixed items-center self-center bg-none mobsm:right-0 mobsm:top-[10%] -z-50 h-fit w-screen  duration-500'>
                    <div className='grid w-full place-items-center'>
                        <a href="https://exerciseftui.com" target='_blank'><img src={exercise} className='w-32 opacity-100 -mt-[0px] z-50 cursor-pointer hover:animate-pulse ta duration-300'/></a>
                    </div>
                </div>
                <div className='flex-1 flox-row fixed backdrop-blur-md items-center self-center bg-slate-500 mobsm:right-0 mobsm:top-[100%] -z-50 h-fit w-screen duration-500'>
                    <ul className='mt-[2%] mb-[3%] flex-1 flex-row text-center duration-300'>
                        <li onClick={()=>navigate('/')}  className='hover:scale-125 cursor-pointer w-full duration-500 hover:shadow-xl list-none inline-block px-3'><a className='text-white text-xl sm:px-3 xl:px-10'>Home</a></li>
                        <li onClick={()=>navigate('/work')}  className='hover:scale-125 cursor-pointer w-full duration-500 hover:shadow-xl list-none inline-block px-5'><a className='text-white text-xl sm:px-3 xl:px-10'>Work</a></li>
                        <li onClick={()=>navigate('/others')}  className='hover:scale-125 cursor-pointer w-full duration-500 hover:shadow-xl list-none inline-block px-5'><a  className='text-white text-xl sm:px-3 xl:px-10'>Others</a></li>
                    </ul>
                </div>
            </div>
            )}
        </div>
        
    </div>
  )
}

export default DropDown