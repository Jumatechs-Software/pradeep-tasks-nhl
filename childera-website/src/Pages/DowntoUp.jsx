import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"
function DowntoUp() {
    const[top,setTop]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setTop(true)
      }
      else{
        setTop(false)
      }
    })
  })
const scrollup=()=>{
window.scrollTo({
  top:0,
  behavior:"smooth"
})
}

  return (
    <>
     {top ? <div onClick={scrollup} className="bg-[#49A87F] md:p-3 md:text-xl rounded-full flex items-center justify-center fixed z-[99] bottom-10 right-10 cursor-pointer  p-2">
      <AiOutlineArrowUp className="text-[#EEFAF4] text-2xl"/>
      </div> :<div></div>}
    </>
  )
}

export default DowntoUp