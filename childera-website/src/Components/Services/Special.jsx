import React from 'react'
import img from "../../assets/childerafeature-01.png"
import img2 from "../../assets/childerafeature-02.png"
import img3 from "../../assets/childerafeature-03.png"
import img4 from "../../assets/special4.png"
import img5 from "../../assets/special5.png"
import img6 from "../../assets/special6.png"
function Special() {
    const items =[
        {
            image:img,
            label:"Interactive Daily Reports",
            parah:"ChildEra offers interactive daily reports, allowing caregivers to provide detailed insights into children's activities and progress, fostering transparency and communication with parents."
        },
        {
            image:img2,
            label:"Smart Scheduling",
            parah:"With ChildEra's smart scheduling feature, childcare centers can efficiently manage staff schedules and allocate resources, optimizing productivity and ensuring smooth operations. This is fun and amazing."
        },
        {
            image:img3,
            label:"Parent-Caregiver Collaboration",
            parah:"Our management tool, ChildEra helps parents and caregivers work together easily through its platform, allowing them to talk instantly, share updates, and make decisions together to help children grow."
        },
        {
            image:img4,
            label:"AI-Powered Learning Recommendations",
            parah:"Using AI technology, this Advanced Tool, ChildEra provides personalized learning recommendations tailored to each child's unique learning style and developmental needs, enhancing their educational experience."
        },
        {
            image:img5,
            label:"Emergency Alerts & Notifications",
            parah:"ChildEra ensures child safety with its emergency alerts and notifications a, enabling instant communication and coordination during critical situations, providing peace of mind for parents and caregivers."
        },
        {
            image:img6,
            label:"Family Engagement Events",
            parah:"Our tool promotes family engagement through various events and activities organized within the platform, fostering a sense of community and strengthening relationships between families and childcare providers."
        },
    ]
  return (
    <div className='pt-32 pb-32'>
        <div className='flex flex-col justify-center items-center pt-10 pb-10'>
            <p className='text-[22px] font-poppins text-[#705E30] lg:pe-72'>Our</p>
            <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='font-fredoka text-[36px] lg:text-start text-center text-[#5B7B6D] lg:text-[42px]'>Special Features</h1>
            <div className='flex flex-col lg:ps-36  justify-end items-center  lg:items-end gap-1'>
                <p className='w-[173px] bg-[#F3CA5F] h-[5px] rounded-lg'></p>
                <p className='w-[122px] bg-[#F37463] h-[5px] rounded-lg'></p>
            </div>
                </div>
        </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center place-content-center gap-10'>
    {items.map((items,index)=>{
            return(  <div key={index} className='h-[390px] flex flex-col items-center bg-[#F1F6F2] justify-center gap-4  w-[310px] lg:w-[345px]  rounded-[30px] '>
              <img src={items.image} className='size-[100px]' alt="" />
              <div className='flex flex-col gap-4'>
                  <h1 className=' text-center font-fredoka text-[22px] lg:w-[300px] text-[#5E5E5E]'>{items.label}</h1>
                  <p className='text-center font-poppins text-[#5E5E5E] text-[14px] mx-auto w-[264px]'> {items.parah}
              </p>
              </div>
              </div>
    )})}
</div>
    </div>
  )
}

export default Special