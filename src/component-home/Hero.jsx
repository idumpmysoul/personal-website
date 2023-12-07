import React from 'react'
import self from '../assets/self.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
const Hero = () => {  
  return (
    <>
    <div className='grid place-items-center min-w-screen h-[800px] relative'>
      <div className='mobsm:-mt-[10%] sm:py-0 mobsm:py-[10%] sm:mt-[2%] overflow-hidden relative backdrop-blur-sm h-80 w-[80%] rounded-2xl border-zinc-50 border-[1px]'>
        <p className='text-white sm:text-left mobsm:text-center sm:text-xl mobsm:text-lg px-[5%] py-[5%]'>
          Greetings,
          <h1 className='hover:text-teal-300 duration-500 text-white font-bold sm:text-6xl mobsm:text-3xl mt-0 mb-2'>I'm, Abed.</h1>
          a realist - a commoner - barely average
          <br></br> 
          In process of learning to be a Human, a Student, and an Engineer.
        </p>
      </div>
      <div className='relative h-20 w-[80%] mobsm:ml-0 sm:ml-0 xl:ml-[3.5rem] sm:-mt-[20rem] mobsm:-mt-[23rem]'>
        <p className='text-white sm:text-left mobsm:text-center sm:text-xl mobsm:text-lg font-medium mobsm:ml-0 sm:mt-0 mobsm:-mt-8 sm:ml-9 xl:ml-12 py-1'>
          Let's Connect
        </p>
        <div className='flex mobsm:-mt-4 sm:place-content-start mobsm:place-content-center sm:mt-0 sm:flex-row mobsm:flex-row sm:ml-[2%] min-w-full'>
          <a href="https://www.linkedin.com/in/abednegozebua" target='_blank'>
          <div className='group sm:hover:scale-95 mobsm:hover:scale-110 sm:hover:bg-slate-50 duration-1000 overflow-hidden ease-in-out flex py-3 mt-2 sm:px-5 sm:ml-0 mobsm:ml-5 rounded-3xl'>
            <img src={linkedin} className='mt-1 mr-3 h-8 invert sm:group-hover:invert-0 duration-500'/>
            <p className='text-white text-xl mr-3 font-semibold sm:inline mobsm:hidden -mt-1 sm:group-hover:text-black duration-500'>
              LinkedIn <br></br>
            <h2 className='text-xs'>Abednego Zebua</h2>
            </p>
          </div>
          </a>
          <a href="https://github.com/idumpmysoul" target='_blank'>
            <div className='group sm:hover:scale-95 mobsm:hover:scale-110 sm:hover:bg-slate-50 duration-1000 overflow-hidden ease-in-out flex py-3 sm:px-5 mt-2 rounded-3xl'>
              <img src={github} className='mt-1 mr-3 h-8 sm:group-hover:invert duration-500'/>
              <p className='sm:group-hover:text-black duration-500 text-white text-xl font-semibold  -mt-1 sm:inline mobsm:hidden'>
                GitHub <br></br>
                <h2 className='text-xs'>idumpmysoul</h2>
              </p>
            </div>
          </a>
          <a href="https://instagram.com/idumpmysoul" target='_blank'>
          <div className='group sm:hover:scale-95 mobsm:hover:scale-110 sm:hover:bg-slate-50 duration-1000 ease-in-out overflow-hidden flex py-3 sm:px-5 mt-2 rounded-3xl'>
            <img src={instagram} className='mr-3 mt-1 h-8 invert sm:group-hover:invert-0 duration-500'/>
            <p className='sm:group-hover:text-black duration-500 text-white text-xl font-semibold -mt-1 sm:inline mobsm:hidden'>
              Instagram <br></br>
              <h2 className='text-xs'>idumpmysoul</h2>
            </p>
          </div>
          </a>
        </div>
      </div>
      <img src={self} className='hover:scale-105 shadow-md z-10 ease-in-out duration-500 blur-sm hover:blur-0 translate-x-[25%] right-0 absolute bottom-0 xl:w-1/3 sm:w-1/3 '/>
    </div>
  </>
  )
}

export default Hero