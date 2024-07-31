import React from 'react'
import bg from "../../assets/childcare-form.png"
export const Form = () => {
  return (
    <div className='bg-[#3F6955] pt-20 pb-20  bg-contain' style={{ backgroundImage: `url(${bg})`}}>
        <div className='flex flex-col items-center px-2 lg:px-0 justify-center gap-4 pt-10'>
        <h1 className='font-fredoka text-[34px] lg:text-[42px] lg:w-[750px] text-center text-[#FFFFFF]'>
        Stay updated on childcare trends with Child Era
        </h1>
        <p className='font-poppins text-[#F4EBEB] text-sm lg:text-base lg:w-[750px] text-center'>Subscribe now to receive the most recent news, trends, and best practices in the childcare industry directly to your email inbox.</p>
        </div>
        <form className='flex flex-col md:flex-row items-center lg:items-start justify-center gap-4 md:gap-20 mt-10'>
           <div className='flex flex-col gap-4'>
           <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>First Name</label>
                <input type="text" placeholder='Your Name' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Email</label>
                <input type="email" placeholder='Your Email ID' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Center Name</label>
                <input type="text" placeholder='Name of the Center' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
           </div>
           <div className='flex flex-col gap-4'>
         
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Last Name</label>
                <input type="text" placeholder='Your Last Name' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Phone Number</label>
                <input type="number" placeholder='Your mobile number' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
           </div>
        </form>
        <div className='flex justify-center mt-10'>
            <button className='text-[#6C5826] bg-[#F3CA5F] font-semibold font-poppins text-lg w-[314px] mx-auto  h-[54px]'>Sumbit</button>
        </div>
    </div>
  )
}
