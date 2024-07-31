import React from 'react'
import img from "../../assets/app.png"
import { FaDownload } from "react-icons/fa6"
function Hero() {
  return (
    <div className='grid grid-cols-1 pt-5 lg:pt-0  gap-4 lg:gap-0  lg:grid-cols-2 place-items-center place-content-center '>
          <div className='lg:ps-20 px-4 md:px-0'>
            <p className='text-[#3F6955] text-center lg:text-start'>App features</p>
            <h1 className='font-fredoka text-[36px] lg:text-start text-center text-[#546E62] lg:text-[42px]'>Application Features </h1>
            <p className='md:w-[576px] mx-auto lg:mx-0 text-[#5e5e5e] font-poppins text-center lg:text-start mt-4'>Effortlessly stay connected and engaged in your child's journey through user-friendly features designed to enhance your childcare experience.</p>
        </div>
        <div>
            <img src={img} className='w-[368px]' alt="" />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Hero