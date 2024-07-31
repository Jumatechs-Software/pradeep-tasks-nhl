import React from 'react'
import img from "../../assets/number.png"
import img2 from "../../assets/number2.png"
import img3 from "../../assets/number3.png"
import img4 from "../../assets/number4.png"
export const Number = () => {
  return (
    <div className='bg-[#F8FFFB] pt-32 pb-32 flex flex-wrap gap-10 md:flex-row justify-around items-center'>

 
            <div className='w-[287px] h-[320px] flex items-center justify-center flex-col gap-3 rounded-[30px] bg-[#FFFFFF]'>
                <img  className='w-[57px] h-[82px]' src={img} alt="" />
                <h1 className='text-[#4CAF84] font-fredoka  text-[48px]'>1000+</h1>
                <p className='text-2xl font-poppins text-[#5E5E5E] uppercase'>Happy parents</p>
            </div>
            <div className='w-[287px] h-[320px] flex items-center justify-center flex-col gap-3 rounded-[30px] bg-[#FFFFFF]'>
                <img  className='w-[95px] h-[89px]' src={img2} alt="" />
                <h1 className='text-[#4CAF84] font-fredoka  text-[48px]'>5000+</h1>
                <p className='text-2xl font-poppins text-[#5E5E5E] uppercase'>Childrens</p>
            </div>
            <div className='w-[287px] h-[320px] flex items-center justify-center flex-col gap-3 rounded-[30px] bg-[#FFFFFF]'>
                <img  className='w-[86px] h-[89px]' src={img3} alt="" />
                <h1 className='text-[#4CAF84] font-fredoka text-[48px]'>100+</h1>
                <p className='text-2xl font-poppins text-[#5E5E5E] uppercase'> Branches </p>
            </div>
            <div className='w-[287px] h-[320px] flex items-center justify-center flex-col gap-3 rounded-[30px] bg-[#FFFFFF]'>
                <img  className='w-[86px] ' src={img4} alt="" />
                <h1 className='text-[#4CAF84] font-fredoka  text-[48px]'>1M+</h1>
                <p className='text-2xl font-poppins uppercase text-[#5E5E5E]'> Childcare Centre</p>
            </div>
        </div>
 
  )
}
