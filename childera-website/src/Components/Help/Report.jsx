import React from 'react'
import Hero from './Hero'
import Button from './Button';
import Contact from './Conatct';
function Report() {
  const items =[
   { heading:"Comprehensive Reporting:   ",
      parah:"ChildEra Management Software generates comprehensive reports on various aspects of childcare center operations, including attendance, billing, child development progress, and staff performance. These detailed reports provide valuable insights for administrators to make informed decisions and optimize center efficiency."  
    },
   { heading:"Customizable Reports:",
      parah:"ChildEra allows childcare centers to customize reports according to their specific needs and requirements. Administrators can choose the data fields, formats, and parameters they want to include in the reports, ensuring that the information presented is relevant and actionable for their unique circumstances."  
    },
   { heading:"Data Analysis Tools:   ",
      parah:"ChildEra provides advanced data analysis tools to interpret and analyze the information contained in reports. Administrators can identify trends, patterns, and areas for improvement by analyzing attendance trends, financial performance, and child development outcomes, empowering them to make data-driven decisions for the center's success.      "  
    },
   { heading:"Parent-Facing Reports:   ",
      parah:"ChildEra offers parent-facing reports that provide families with insights into their child's activities, milestones, and progress at the childcare center. These reports enhance communication between parents and caregivers, fostering collaboration and engagement in the child's educational journey.      "  
    },
   { heading:"Real-Time Access:",
      parah:"CChildEra enables real-time access to reports for administrators, staff, and parents, ensuring timely access to critical information. Whether it's reviewing daily attendance records, monitoring billing statements, or tracking child development milestones, users can access up-to-date reports whenever and wherever they need them.      "  
    },
  ]
  return (
    <div>
      <Hero/>
      <div className='flex justify-center items-center flex-col gap-4 pt-20 pb-20 px-4 md:px-0'>
        <h1 className='font-fredoka text-[#3F6955] text-[32px] lg:text-[42px] text-center'>Report  <span className='text-[#F3CA5F]'>Details</span></h1>
        <p className='text-[#3F6955] md:w-[600px] text-center font-poppins'>Access detailed reports to understand childcare center operations, enabling decision-making and performance optimization.</p>
      </div>
      <div className='flex flex-col px-4 md:px-0 gap-10'>
     {items.map((item,i)=>{
      return(
      <div className='md:w-[600px] lg:w-[1100px] flex flex-col mx-auto gap-4 ' key={i}>
         
          <div className='flex justify-between w-full  items-center'>
            <h1 className='text-[#3F6955] font-fredoka text-lg md:text-xl'>{item.heading}</h1>
          </div>
          <p className='md:w-[600px] lg:w-[1000px] text-[#3F6955] text-sm lg:text-lg font-poppins'>{item.parah}</p>
      </div>
      )
     })}
      </div>
     <Button/>
     <Contact/>
    </div>
  )
}

export default Report  