import React from 'react';
import bg from "../../assets/childcare-toodles.png";
import img from "../../assets/admin.png"
function Administrative() {
  return (
    <div className='bg-[#FBF7E6] pt-20 pb-20 flex flex-col lg:flex-row  justify-between   bg-cover' style={{ backgroundImage: `url(${bg})` } }>
      <div  className='flex flex-col gap-4 md:ps-10 lg:ps-32'>
      <div className='flex flex-col gap-4 '>
        <h1 className='font-fredoka ps-2 md:ps-0 text-lg md:text-[24px] text-[#4CAF84]'>Efficient Administration:</h1>
        <ul className=" flex gap-4 flex-col px-4 md:px-0">
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Objective:</b> ChildEra Tool streamlines childcare management tasks like enrollment, attendance tracking, and documentation, improving efficiency.
          </li>
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Focus Areas:</b> The ChildEra Software management app covers enrollment, attendance, and documentation processes, crucial for childcare operations.
          </li>
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Purpose:</b> ChildEra aims to boost childcare efficiency by offering a user-friendly platform that simplifies administrative tasks, saving time and resources.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <h1 className='font-fredoka ps-2 md:ps-0 text-lg md:text-[24px] text-[#4CAF84]'>Streamlining Administrative Tasks:</h1>
        <ul className=" flex gap-4 flex-col px-4 md:px-0">
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Definition:</b>   ChildEra management software tool simplifies childcare administrative tasks, making them straightforward, organized, and time-effective.
          </li>
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Examples:</b> This tool streamlines enrollment procedures, creates efficient attendance tracking systems, and optimizes documentation processes for childcare centers.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-4 '>
        <h1 className='font-fredoka ps-2 md:ps-0 text-lg md:text-[24px] text-[#4CAF84]'>Enrollment Optimization:</h1>
        <ul className=" flex gap-4 flex-col px-4 md:px-0">
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Objective:</b>   The ChildEra software tool aims to enhance enrollment efficiency for parents and providers
          </li>
          <li className='md:w-[650px] lg:w-[879px] font-poppins text-justify'>
            <b className=''>&bull; Features:</b> Our Management tool offers intuitive online forms, automated submissions, and clear instructions, streamlining the enrollment process.
          </li>
        </ul>
      </div>
      </div>
      <div className='flex justify-end'>
        <img src={img} className='w-[250px] md:w-[400px] lg:w-[450px]' alt="" />
      </div>
    </div>
  );
}

export default Administrative;
