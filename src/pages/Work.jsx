import React from 'react'
import Projects from '../component-work/Projects'
import Navi from '../component-home/Navi'
import MobNavi from '../component-home/MobNavi'
function Work() {
  return (
    <>
    <div className='sticky w-full top-0 z-50'>
        <div className='relative sm:flex mobsm:hidden'>
            <Navi/>
        </div>
        <div className='relative mobsm:flex sm:hidden'>
            <MobNavi/>
        </div>
    </div>
    <Projects/>
    </>
  )
}

export default Work