import React from 'react'
import bg from "../../assets/childcare-toodles.png";
import img from "../../assets/admin2.png"
function Attendance() {
  return (
    <div className='bg-[#F8FFFB] pt-10 pb-20 flex flex-col lg:flex-row  justify-between   bg-cover' style={{ backgroundImage: `url(${bg})` } }>
   <div className='flex '>
      <img src={img} className='w-[250px] md:w-[400px] lg:w-[450px]' alt="" />
    </div>
    <div  className='flex flex-col gap-4 md:ps-10 lg:pe-10 lg:mt-20'>
    <div className='flex flex-col gap-4 '>
      <h1 className='font-fredoka ps-2 md:ps-0 text-lg md:text-[24px] text-[#4CAF84]'>Attendance Tracking Enhancement:</h1>
      <ul className=" flex gap-4 flex-col px-4 md:px-0">
        <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
          <b className=''>&bull; Objective:</b> Enhancing attendance monitoring accuracy and ease with innovative features.
        </li>
        <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
          <b className=''>&bull; Features:</b> ChildEra implements digital attendance systems, QR code scanning, and real-time updates for providers and parents.
        </li>
      </ul>
    </div>
    <div className='flex flex-col gap-4 '>
      <h1 className='font-fredoka ps-2 md:ps-0 text-lg md:text-[24px] text-[#4CAF84]'>Documentation Streamlining:</h1>
      <ul className=" flex gap-4 flex-col px-4 md:px-0">
        <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
          <b className=''>&bull; Objective:</b>  Streamlining childcare documentation tasks for ease and efficiency.
        </li>
        <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
          <b className=''>&bull; Approaches:</b>Utilizing digital record systems, cloud-based storage, and standardized templates within the software.
        </li>
      </ul>
    </div>
    <div className='flex flex-col gap-4 '>
      <h1 className='font-fredoka ps-2 md:ps-0 text-lg md:text-[24px] text-[#4CAF84]'>Overall Operational Efficiency:</h1>
      <ul className=" flex gap-4 flex-col px-4 md:px-0">
        <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
          <b className=''>&bull; Impact:</b>  ChildEra management software tool aims to reduce administrative time, prioritizing childcare and educational activities.
        </li>
        <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
          <b className=''>&bull; Benefits:</b> With ChildEra, expect enhanced productivity, fewer errors, and improved organizational efficiency.
        </li>
      </ul>
    </div>
    </div>
  </div>
  )
}

export default Attendance