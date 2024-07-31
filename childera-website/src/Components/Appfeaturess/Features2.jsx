import React from 'react'
import img from "../../assets/app2-1.png"
import img2 from "../../assets/app2-2.png"
import img3 from "../../assets/app2-3.png"
import img4 from "../../assets/app2-4.png"
import img5 from "../../assets/app2-5.png"
import img6 from "../../assets/app2-6.png"
function Features2() {
    const list=[
        {
            image:img,
            label:"Payroll integration with our timesheets",
            parah:"Childcare apps streamline payroll, ensuring accurate payment based on recorded hours, minimizing errors, enhancing efficiency."
        },
        {
            image:img2,
            label:"Mobile app for parents , staff and admin",
            parah:"Childcare apps keep parents informed, receive announcements, engage in child education. Staff enjoy seamless communication."
        },
        {
            image:img3,
            label:"Classroom management",
            parah:"Our childcare apps prioritize clear rules, strong teacher-student bonds, fair discipline, and fun teaching methods. Great!"
        },
        {
            image:img4,
            label:"⁠Lesson plans",
            parah:"Our childcare apps offer lesson plans as teacher roadmaps, detailing teaching strategies and student progress tracking."
        },
        {
            image:img5,
            label:"Daily activity",
            parah:"Our innovative childcare apps provide tailored routines, engaging experiences, ensuring children's growth, learning, and enjoyment."
        },
        {
            image:img6,
            label:"Mobile app for parents , staff and admin",
            parah:"Organize staff schedules efficiently for smooth operations and optimal staffing in childcare facilities, maximizing productivity. "
        },
    ]
  return (
    <div
    className="pt-20 pb-20  bg-contain bg-[#E9F6EF]  w-full"
    
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

export default Features2