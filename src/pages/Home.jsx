import React from 'react'
import Navi from '../component-home/Navi.jsx'
import Hero from '../component-home/Hero.jsx'
import Content from '../component-home/Content.jsx'
import MobNavi from '../component-home/MobNavi.jsx'
import Flash from '../component-home/Flash.jsx'
import Footer from '../component-home/Footer.jsx'
function Home() {
  return (
    <>
    <div className='bg-slate-900 bg-[url("./assets/bg1.jpg")] bg-center bg-cover bg-no-repeat'>
        <div className='sticky w-full top-0 z-50'>
            <div className='relative sm:flex mobsm:hidden'>
            <Navi/>
            </div>
            <div className='relative mobsm:flex sm:hidden'>
            <MobNavi/>
            </div>
        </div>
        <div className='container min-h-fit min-w-full'>
            <div className='flex justify-center items-start'>
                <div className='w-full overflow-hidden'>
                    <Hero/>
                </div>
            </div>
            <Content/>
        </div>
        <div className='min-h-[400px] bg-slate-950/30 max-h-fit min-w-full'>
            <Flash/>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Home