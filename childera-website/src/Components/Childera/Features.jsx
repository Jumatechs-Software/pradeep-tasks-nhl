import React from 'react'
import img1 from "../../assets/childerafeature-01.png"
import img2 from "../../assets/childerafeature-02.png"
import img3 from "../../assets/childerafeature-03.png"
import bg from "../../assets/Featuresbg.png"
import { FaLongArrowAltRight } from "react-icons/fa";
export const Features = () => {
  return (
    <div className='pt-20 pb-20 bg-[#F8FFFB]'>
       <div className='flex flex-col  flex-wrap md:flex-row items-center justify-center gap-20 '>
       <div className='h-[390px] flex flex-col items-center justify-center gap-4  w-[310px] lg:w-[345px] bg-[#DE6767] rounded-[30px] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
<img src={img1} className='size-[100px]' alt="" />
<div className='flex flex-col gap-4'>
    <h1 className='font-poppins text-center font-semibold text-[22px] text-white'>Interactive Daily <br /> Reports</h1>
    <p className='text-center font-poppins text-white text-[14px] mx-auto w-[242px]'>Get personalized daily updates on your child's day, including activities, meals, and learning milestones. Stay connected with caregivers and build trust through open 
</p>
</div>
</div>
       <div className='h-[390px] flex flex-col items-center justify-center gap-4  w-[310px] lg:w-[345px] bg-[#F3CA5F] rounded-[30px] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
<img src={img2} className='size-[100px]' alt="" />
<div className='flex flex-col gap-4'>
    <h1 className='font-poppins text-center font-semibold text-[22px] text-white'>Smart Scheduling</h1>
    <p className='text-center font-poppins text-white text-[14px]  mx-auto w-[242px]'>Easily handle schedules with our smart scheduling system, making communication and coordination between parents and caregivers seamless and stress-free. We keep everyone 

</p>
</div>
</div>
       <div className='h-[390px] flex flex-col items-center justify-center gap-4  w-[310px] lg:w-[345px] bg-[#4CAF84] rounded-[30px] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
<img src={img3} className='size-[100px]' alt="" />
<div className='flex flex-col gap-4'>
    <h1 className='font-poppins text-center font-semibold text-[22px] text-white'>Parent-Caregiver <br /> Collaboration</h1>
    <p className='text-center font-poppins text-white text-[14px]  mx-auto w-[245px]'>Strengthen collaboration between parents and caregivers with shared tools, fun activities, and open communication. It's all about your child's growth and happiness. We prioritize your child's 

</p>
</div>
</div>
    
      </div>

    </div>
  )
}
