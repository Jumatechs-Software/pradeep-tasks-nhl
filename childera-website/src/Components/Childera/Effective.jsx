import React from 'react'
import bg from "../../assets/childcare-bg.png"
import img from "../../assets/chilcare-service.png"
import img2 from "../../assets/chilcare-service-2.png"
import img3 from "../../assets/chilcare-service-3.png"
import img4 from "../../assets/chilcare-service-4.png"
import img5 from "../../assets/chilcare-service-5.png"
import img6 from "../../assets/chilcare-service-6.png"

export const Individuals = () => {
  return (
    <div className='bg-cover relative -top-10  pt-10 pb-10' style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='text-[22px] pt-10 md:text-[28px] lg:text-[42px]  font-fredoka   text-[#546E62] text-center'>Why Individuals Option for <br /> Childcare Services.</h1> 
                <div className='flex flex-col lg:flex-row items-center mt-20 justify-center gap-8  lg:gap-14'>
                <div className=' flex flex-col gap-8'>
                    <div className='w-[325px] h-[300px] md:h-[160px]  md:w-[510px] flex flex-col  md:flex-row px-2 items-center justify-around bg-[#F8FFFB] rounded-3xl'>
                        <div>
                            <img src={img} className='size-[96px] object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-4 md:gap-2'>
                            <h2 className='md:text-[22px] lg:text-[24px]  text-lg text-center md:text-start font-fredoka text-[#4CAF84]'>Professional Care:</h2>
                            <p className='md:text-justify text-sm lg:text-base font-poppins md:w-[364px] w-[310px] text-center text-[#5E5E5E]'>Deliver expert care with qualified caregivers, ensuring personalized attention for each child's needs.</p>
                        </div>
                    </div>
                    <div className='w-[325px] h-[300px] md:h-[160px]  md:w-[510px] flex flex-col  md:flex-row px-2 items-center justify-around bg-[#F8FFFB] rounded-3xl'>
                        <div>
                            <img src={img2} className='size-[96px] object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-4 md:gap-2'>
                            <h2 className='md:text-[22px] lg:text-[24px]  text-lg text-center md:text-start font-fredoka text-[#4CAF84]'>Educational Enrichment:</h2>
                            <p className='md:text-justify text-sm lg:text-base font-poppins md:w-[364px] w-[310px] text-center text-[#5E5E5E]'>Foster learning through interactive activities and tailored resources to support child development.</p>
                        </div>
                    </div>
                    <div className='w-[325px] h-[300px] md:h-[160px]  md:w-[510px] flex flex-col  md:flex-row px-2 items-center justify-around bg-[#F8FFFB] rounded-3xl'>
                        <div>
                            <img src={img3} className='size-[96px] object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-4 md:gap-2'>
                            <h2 className='md:text-[22px] lg:text-[24px]  text-lg text-center md:text-start font-fredoka text-[#4CAF84]'>Support for Working Parents:</h2>
                            <p className='md:text-justify text-sm lg:text-base font-poppins md:w-[364px] w-[310px] text-center text-[#5E5E5E]'>Offer transparent communication, real-time updates, and convenient access to childcare information.</p>
                        </div>
                    </div>
                  
                </div>
                <div className=' flex flex-col gap-8'>
                    <div className='w-[325px] h-[300px] md:h-[160px]  md:w-[510px] flex flex-col  md:flex-row px-2 items-center justify-around bg-[#F8FFFB] rounded-3xl'>
                        <div>
                            <img src={img4} className='size-[96px] object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-4 md:gap-2'>
                            <h2 className='md:text-[22px] lg:text-[24px]  text-lg text-center md:text-start font-fredoka text-[#4CAF84]'>Work Commitments:</h2>
                            <p className='md:text-justify text-sm lg:text-base font-poppins md:w-[364px] w-[310px] text-center text-[#5E5E5E]'>Simplify administrative tasks with automated processes, freeing up time for quality childcare interactions.</p>
                        </div>
                    </div>
                    <div className='w-[325px] h-[300px] md:h-[160px]  md:w-[510px] flex flex-col  md:flex-row px-2 items-center justify-around bg-[#F8FFFB] rounded-3xl'>
                        <div>
                            <img src={img5} className='size-[96px] object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-4 md:gap-2'>
                            <h2 className='md:text-[22px] lg:text-[24px]  text-lg text-center md:text-start font-fredoka text-[#4CAF84]'>Structured Routine:</h2>
                            <p className='md:text-justify text-sm lg:text-base font-poppins md:w-[364px] w-[310px] text-center text-[#5E5E5E]'>Establish and maintain routines with scheduling tools, optimizing daily experiences for children.</p>
                        </div>
                    </div>
                    <div className='w-[325px] h-[300px] md:h-[160px]  md:w-[510px] flex flex-col  md:flex-row px-2 items-center justify-around bg-[#F8FFFB] rounded-3xl'>
                        <div>
                            <img src={img6} className='size-[96px] object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-4 md:gap-2'>
                            <h2 className='md:text-[22px] lg:text-[24px]  text-lg text-center md:text-start font-fredoka text-[#4CAF84]'>Early Childhood Development:</h2>
                            <p className='md:text-justify text-sm lg:text-base font-poppins md:w-[364px] w-[310px] text-center text-[#5E5E5E]'>Prioritize developmental milestones with assessments, educational materials, and tailored activities.</p>
                        </div>
                    </div>
                  
                </div>
                </div>
    </div>
  )
}
