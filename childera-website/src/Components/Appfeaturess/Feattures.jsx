import React from 'react'
import bg from "../../assets/app-bg.png"
import img from "../../assets/app1.png"
import img2 from "../../assets/app2.png"
import img3 from "../../assets/app3.png"
import img4 from "../../assets/app4.png"
import img5 from "../../assets/app5.png"
function Feattures() {
    const list=[
        {
            image:img,
            label:"State paperwork automation",
            parah:"Embrace State Paperwork Automation to streamline tasks, saving significant time with efficient, technology-drive processes. "
        },
        {
            image:img2,
            label:"Staff clock-in/Clock-out",
            parah:"Enhance efficiency with Staff Clock-in/Clock-out, ensuring accountability and productivity through seamless time tracking."
        },
        {
            image:img3,
            label:"Child clock-in/clock-out",
            parah:"Optimize childcare management with Child Clock-in/Clock-out, ensuring attendance tracking and operational efficiency."
        },
        {
            image:img4,
            label:"Child paperwork",
            parah:"Simplify childcare paperwork with Child Paperwork, managing documents effortlessly, saving time, ensuring smooth operations."
        },
        {
            image:img5,
            label:"Parent billing system",
            parah:"Simplify payments for parents with our Parent Billing System, managing invoices effortlessly, simplifying transactions."
        },
    ]
  return (
    <div
    className="pt-20 pb-20  bg-contain bg-[#FBF7E6]  w-full"
    
  >
<div className='flex flex-wrap justify-center gap-20 items-center '>
    {list.map((items,index)=>{
            return(  <div key={index} className='h-[370px] flex flex-col items-center bg-[#F5FBF8] justify-center gap-4  w-[310px] lg:w-[345px]  rounded-[30px] '>
              <img src={items.image} className='size-[100px]' alt="" />
              <div className='flex flex-col gap-4'>
                  <h1 className=' text-center font-fredoka text-lg lg:w-[251px] text-[#4CAF84]'>{items.label}</h1>
                  <p className='text-center font-poppins text-[#5E5E5E] text-[14px] mx-auto w-[264px]'> {items.parah}
              </p>
              </div>
              </div>
    )})}
</div>
  </div>
  )
}

export default Feattures