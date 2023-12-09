import React from 'react'
import Projects from '../component-work/Projects'
import Navi from '../component-home/Navi'
import MobNavi from '../component-home/MobNavi'


function Work() {
  return (
    <>
    <div className='bg-slate-900 bg-[url("./assets/bg2.jpg")] bg-center bg-cover bg-no-repeat'>
      <div className='sticky w-full top-0 z-50'>
          <div className='relative sm:flex mobsm:hidden'>
              <Navi/>
          </div>
          <div className='relative mobsm:flex sm:hidden'>
              <MobNavi/>
          </div>
      </div>
      <div className='min-h-[300px] max-h-fit bg-[url("./assets/bg2.jpg")] bg-center bg-blend-darken bg-slate-900/70 bg-cover bg-no-repeat min-w-full'>
        <Projects/>
      </div> 
    </div>
    
    </>
  )
}

export default Work