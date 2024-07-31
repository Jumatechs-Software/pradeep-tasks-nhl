import React from 'react'
import img from "../../assets/childera-1.png"
import img2 from "../../assets/childera-2.png"
import img3 from "../../assets/childera-3.png"
import { Link } from 'react-router-dom'
export const Hero = () => {
  return (
    <div className='flex bg-white flex-col lg:flex-row justify-center items-center gap-10 pt-20 pb-20'>
        <div className=' flex flex-col gap-6 px-4'>
          <div className='md:w-[650px] relative'>
            <p className='font-poppins  text-center lg:text-start text-[#3F6955] '>Childcare</p>
          <h1 className='text-[#546E62] text-center lg:text-start text-[34px] lg:text-[46px] font-fredoka md:w-[650px]'>
            Effortlessly <span className='text-[#F3CA5F]'>Overseeing</span>  Children and Childcare Centers.
            </h1>
            <img className='absolute bottom-0 right-5 md:right-0 lg:left-[30%] size-[54px]' src={img3} alt="" />
          </div>
          <p className='text-[#3B3B3B] text-center lg:text-start text-sm md:text-base font-poppins md:w-[690px]'>ChildEra Leading child care management software, trusted by 37,000+ nationwide. Tailored solutions for all capacities.</p>
          <div className='md:flex gap-6 hidden justify-center lg:justify-normal'>
            <Link to="/resource/aboutus">
            <button className='px-8 py-4 rounded-xl bg-[#F3CA5F] font-semibold font-poppins text-[#6C5826]'>About Us</button></Link>
            <Link to="/solution/services">
            <button className='px-8 py-4 rounded-xl bg-[#FFE6A5] font-semibold font-poppins text-[#6C5826]'>Explore the service</button></Link>
          </div>
          <div className='md:hidden mx-auto'>
          <Link to="/solution/services">
          <button className='px-8 py-4 rounded-[30px] bg-[#F3CA5F] font-semibold font-poppins text-[#6C5826]'>Explore the service</button>
          </Link>
          </div>
        </div>
        <div className='relative '>
            <img className=' w-[300px] md:size-[450px]' src={img} alt="" />
            <img className='absolute  size-[80px] md:size-[144px] bottom-0 -left-7' src={img2} alt="" />
        </div>
    </div>
  )
}
