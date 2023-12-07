import React from 'react'
import { useNavigate } from 'react-router-dom'
function Notfound() {
    const navigate = useNavigate ()
  return (
    <>
    <div>
        URL Not Found go back to  /home
        or press this button
        
    </div>
    <button className='w-[100px] bg-slate-700 border-[2px] text-white border-spacing-3 rounded-xl' onClick={()=>navigate('/home')}>Home</button>
    </>
    
  )
}

export default Notfound