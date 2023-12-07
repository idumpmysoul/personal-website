import React from 'react'
import Things from '../component-others/Things'
import Navi from '../component-home/Navi'
import MobNavi from '../component-home/MobNavi'

function Others() {
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
    <Things/>
    </>
  )
}

export default Others