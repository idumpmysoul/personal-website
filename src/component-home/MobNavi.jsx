import React from 'react'
import DropDown from './DropDown'
import SelfLogo from './SelfLogo'
const MobNavi = () => {  
  return (
    <>
    <div className='top-0 w-screen sticky bg-gradient-to-l from-slate-950 via-transparent to-slate-950'>
      <div className = "flex py-1.5 justify-between mobsm:px-[4%] sm:px-[10%] xl:px-40 bg-gradient-to-l from-transparent via-black to-transparent shadow-xl backdrop-blur-sm">
            <SelfLogo/>
            <div>
            <DropDown/>
            </div>
      </div>
    </div>
    </>
  )
}

export default MobNavi