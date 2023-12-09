import React from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'

function Content() {
  return (
    <>
    <div className='container max-h-fit min-w-full bg-white py-[50px] px-[10%]'>
        <h1 className='text-3xl mobsm:text-center mobsm:mb-[12%] sm:mb-[3%] sm:text-left font-bold xl:mb-[3%]'>A Little Bit About Me</h1>
        <div className='flex sm:flex-row mobsm:flex-col items-center mt-2'>
          <div className='group overflow-hidden flex flex-col duration-500 opacity-100 sm:mr-4 mb-[5%] min-w-[33%] h-[400px] sm:h-[500px] bg-slate-200 hover:shadow-xl scale-95 rounded-xl'>
            <div className='flex items-center overflow-hidden container group-hover:h-[220px] h-0 duration-1000 min-w-full bg-none'>
                <img src={cat1} className='w-[100%] sm:group-hover:scale-150 duration-500'></img>
            </div>
            <div className='flex-1 h-[100%] w-[100%] py-[10%]  sm:px-[8%] mobsm:px-[8%] text-black'>
              <h1 className='font-bold sm:text-left mobsm:text-center text-3xl mb-2'>Education</h1>
              <p className='sm:text-left break-words mobsm:text-center'>
                Currently a Computer Engineering Undergraduate Student at University of Indonesia. <br></br>
                Was the most outstanding student in HighSchool due to high number of standing outside the class
              </p>
            </div>
          </div>
          <div className='group overflow-hidden flex flex-col duration-500 opacity-100 sm:mr-4 mb-[5%] min-w-[33%] h-[400px] sm:h-[500px] bg-slate-200 hover:shadow-xl rounded-xl scale-95 '>
            <div className='flex items-center overflow-hidden container group-hover:h-[220px] h-0 duration-1000 min-w-full bg-none'>
                <img src={cat2} className='w-[100%]'></img>
            </div>
            <div className='flex-1 h-[100%] w-[100%] py-[10%] sm:px-[8%] mobsm:px-[8%] text-black'>
              <h1 className='font-bold sm:text-left mobsm:text-center text-3xl mb-2'>Experience</h1>
              <p className='h-[100%] sm:text-left break-words mobsm:text-center'>Honorable mention as a The Best Niksen-Practicioner specializing on staring at the void
              <br></br>Awarded as the most beyond expectations being, pursuing in the field of dissapointment.
              </p>
            </div>
          </div>
          <div className='group overflow-hidden flex flex-col duration-500 opacity-100 sm:mr-4 mb-[5%] min-w-[33%] h-[400px] sm:h-[500px] bg-slate-200 hover:shadow-xl rounded-xl scale-95 '>
            <div className='flex items-center overflow-hidden container group-hover:h-[220px] h-0 duration-1000 min-w-full bg-none'>
                <img src={cat3} className='w-[100%]'></img>
            </div>
            <div className='flex-1 w-[100%] py-[10%] sm:px-[8%] mobsm:px-[8%]  text-black'>
              <h1 className='font-bold sm:text-left mobsm:text-center text-3xl mb-2'>SkillSet</h1>
              <p className='sm:text-left break-words mobsm:text-center'>
                Adobe's Software - lvl.OnionCubs <br></br> MS Office - lvl.OnionCubs <br></br> C Programming - lvl.OnionCubs 
                 <br></br> Procrasinating - lvl.MAX <br></br> Bad Habit - lvl.MAX <br></br> English - i learnt it from internet so its not very polite
              </p>
            </div>
          </div>
        </div>
        <h1 className='xl:text-3xl sm:text-2xl mobsm:text-xl text-center text-slate-200 italic font-thin xl:-mt-11 -mb-5'>the great things are yet to come</h1>
    </div>
    </>
    
  )
}

export default Content