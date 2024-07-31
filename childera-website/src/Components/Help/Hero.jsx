import React from 'react'
import img from "../../assets/help-hero.png"
import { FaGlobe } from "react-icons/fa";
function Hero() {
  return (
    <div className='grid grid-cols-1 pt-10 pb-10   gap-4 lg:gap-0  lg:grid-cols-2 place-items-center place-content-center '>
          <div className='lg:ps-20 px-4 md:px-0'>
            <p className='text-[#3F6955] text-center lg:text-start'>Help Center</p>
            <h1 className='font-fredoka text-[36px] lg:text-start text-center text-[#546E62] lg:text-[42px]'>Your Guide to Assistance </h1>
            <p className='md:w-[576px] mx-auto lg:mx-0 text-[#5e5e5e] font-poppins text-center lg:text-start mt-4'>Personal information is the cornerstone of our understanding and communication with you. It helps us tailor our services to your needs and ensure the best possible care for your child.</p>
        </div>
        <div>
            <img src={img} className='w-[470px]' alt="" />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Hero