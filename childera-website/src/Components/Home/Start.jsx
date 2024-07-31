import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div className='flex-col flex justify-center items-center  pt-10 pb-10 gap-5'>
       
            <h1 className='font-fredoka text-[#546E62] text-2xl  md:text-3xl lg:text-[42px] '>Start your Journey </h1>
            <p className='text-[#5E5E5E] font-poppins px-4  md:px-0 text-center md:w-[650px] lg:w-[820px]'>Embark on your childcare management journey with ChildEra, empowering centers with intuitive tools and streamlined processes for enhanced efficiency and exceptional care.
            </p>
            <div>
              <Link to="/get-start">
            <button className='text-[#6C5826] font-bold bg-[#F3C95F] rounded-[30px] px-10 py-4 md:rounded-2xl '>Join now </button>   
            </Link>
                     </div>
           </div>
  )
}

export default Start