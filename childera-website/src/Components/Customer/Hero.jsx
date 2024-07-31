import React from 'react'
import img from "../../assets/feedback.png"
function Hero() {
  return (
    <div className='grid grid-cols-1 pt-10 pb-10  gap-4 lg:gap-0  lg:grid-cols-2 place-items-center place-content-center '>
          <div className='lg:ps-20 px-4 md:px-0'>
            <p className='text-[#3F6955] text-center lg:text-start'>Customer feedback</p>
            <h1 className='font-fredoka text-3xl md:text-[36px] lg:w-[600px] lg:text-start text-center leading-snug text-[#546E62] lg:text-[42px]'><span className='text-[#F3CA5F] '>ChildEra Platform </span>is Adored by <span className='text-[#FE7D3B]'> Millions</span> of Educators and Families. </h1>
            <p className='md:w-[576px] lg:w-[600px]  mx-auto lg:mx-0 text-[#5e5e5e] font-poppins text-center lg:text-start mt-4'>Elevate your ChildEra experience with our integrated curriculum, offering digital lessons and hands-on learning materials directly through the app.</p>
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