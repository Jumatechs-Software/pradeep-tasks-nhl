import React from 'react'
import img from "../../assets/service-hero.png"
function Hero() {
  return (
    <div>
        <div className='pt-20 pb-10 flex justify-end pe-5'>
            <img className='size-[85px]' src={img} alt="" />
        </div>
        <div className='lg:ps-20 px-4 md:px-0'>
            <h1 className='font-fredoka text-[36px] lg:text-start text-center text-[#5B7B6D] lg:text-[42px]'>Service</h1>
            <p className='md:w-[550px] mx-auto lg:mx-0 text-[#5e5e5e] font-poppins text-center lg:text-start mt-4'>Welcome to our ChildEra Management Software Tool where we've crafted services to enhance your childcare journey. Discover our range of offerings of our management tool that is carefully designed for your child's development and your peace of mind.</p>
        </div>
    </div>
  )
}

export default Hero