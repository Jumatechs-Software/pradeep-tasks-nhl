import React from 'react'
import rocket from "../../assets/misson.png"
import img from "../../assets/misssion-1.png"
import img2 from "../../assets/misssion-2.png"
import img3 from "../../assets/misssion-3.png"
import img4 from "../../assets/misssion-4.png"
import img5 from "../../assets/misssion-5.png"
import img6 from "../../assets/misssion-6.png"
function Mission() {
    const items =[
        {
            image:img,
            label:"Enriching Educational Journeys",
            parah:"Our mission at ChildEra is to enrich educational journeys through our management software tool, providing innovative solutions that enhance learning experiences for every child."
        },
        {
            image:img2,
            label:"Prioritizing Safety For Every Child",
            parah:"We prioritize safety for every child by integrating robust features into our software tool, ensuring secure environments in childcare settings."
        },
        {
            image:img3,
            label:"Empowering Parents with Insights",
            parah:"ChildEra empowers parents with insights through our management software tool, offering real-time updates and communication channels that foster transparency and trust."
        },
        {
            image:img4,
            label:"Empowering Parents with Insights",
            parah:"ChildEra empowers parents with insights through our management software tool, offering real-time updates and communication channels that foster transparency and trust."
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
    <div className='pt-20 pb-20'>
        <div className='relative'>
        <h1 className='text-center font-fredoka  text-[#546E62] text-[36px]'>Our mission</h1>
        <img src={rocket} className='absolute size-[50px] lg:size-[137px] top-0 md:-top-5 md:size-[90px] left-[10%] md:left-[25%] lg:-top-12 lg:left-[35%]' alt="" />
        </div>
        <div className='flex flex-wrap mt-20 place-items-center place-content-center gap-20'>
    {items.map((items,index)=>{
            return(  <div key={index} className='h-[360px] flex flex-col items-center border-2 border-[#BDCAC1] justify-center gap-4  w-[310px] lg:w-[345px]  rounded-[30px] '>
              <img src={items.image} className='size-[75px]' alt="" />
              <div className='flex flex-col gap-4'>
                  <h1 className=' text-center font-fredoka text-[22px] lg:w-[300px] text-[#546E62]'>{items.label}</h1>
                  <p className='text-center font-poppins text-[#5E5E5E] text-[14px] mx-auto w-[264px]'> {items.parah}
              </p>
              </div>
              </div>
    )})}
</div>
    </div>
  )
}

export default Mission