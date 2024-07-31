import React from 'react'

function BillingForm() {
  return (
    <div className='pt-20 pb-20 px-4 md:px-0'>
              <h1 className=' text-[22px] mx-auto  md:text-[28px] md:w-[600px] lg:text-[42px]  font-fredoka  lg:w-[700px]  text-[#546E62] text-center'>Ready to streamline billing for <span className='text-[#F3CA5F]'>faster payments?</span> </h1> 
        <p className='font-poppins text-[#5e5e5e] text-center mt-4'>Complete the form for a free Child Era billing demo, discovering easy setup and quick start.</p>
    <form className='flex flex-col lg:flex-row  justify-center pt-10 gap-10 lg:gap-20 items-center' action="">
       <div className='flex flex-col gap-4'>
       <div className='flex flex-col gap-4'>
            <label className='text-[#3F6955] font-medium font-poppins  text-sm' htmlFor="">Name</label>
            <input type="text" placeholder="Your full name" className='ps-2 placeholder:text-[#3f6955] w-[325px]  md:w-[512px]  h-[40px] outline-none border border-gray-500 rounded' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className='text-[#3F6955] font-medium font-poppins text-sm' htmlFor="">Phone number</label>
            <input type="number" placeholder="+1 (555) 000-0000" className='ps-2 placeholder:text-[#3f6955] w-[325px]  md:w-[512px]  h-[40px] outline-none border border-gray-500 rounded' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className='text-[#3F6955] font-medium font-poppins text-sm' htmlFor="">Email</label>
            <input type="email" placeholder="your email ID" className='ps-2 placeholder:text-[#3f6955] w-[325px]  md:w-[512px]  h-[40px] outline-none border border-gray-500 rounded' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className='text-[#3F6955] font-medium font-poppins text-sm' htmlFor="">Center</label>
            <input type="text"  className='ps-2 placeholder:text-[#3f6955] w-[325px]  md:w-[512px]  h-[40px] outline-none border border-gray-500 rounded' />
        </div>
       </div>
       <div className='ps-4 md:ps-0' >
        <div >
            <p className='text-lg text-[#3F6955] font-medium'>Enrollment</p>
            <div className='flex  gap-20 '>
                <div className='flex flex-col gap-2 mt-2 '>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> 1-10</span>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> 21-99</span>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> Other</span>
                </div>
                <div className='flex flex-col gap-2 mt-2 '>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> 11-20</span>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> 100+</span>
                   
                </div>
            </div>
        </div>
        <div className='mt-4'>
        <p className='text-lg text-[#3F6955] font-medium'>Share information about who you are.</p>

        <div className='flex flex-col gap-2 mt-2 '>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> I'd like to acquire Child Era for my center</span>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> Our center is already utilizing Child Era</span>
                    <span className='font-poppins flex items-center gap-3 text-[#3F6955]'><input type="checkbox" name="" id="" /> I'm a parent or guardian.</span>
                </div>
        </div>
       </div>
    </form>
    <div className='flex justify-center mt-10'>
            <button className='text-[#6C5826] bg-[#F3CA5F] rounded-lg md:rounded font-semibold font-poppins text-lg w-[314px] mx-auto  h-[54px]'>Sumbit</button>
        </div>
    </div>
  )
}

export default BillingForm