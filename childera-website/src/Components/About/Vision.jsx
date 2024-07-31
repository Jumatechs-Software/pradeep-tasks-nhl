import React from 'react'
import  img from "../../assets/vision.png"
function Vision() {
  return (
    <div className='grid lg:grid-cols-2 px-4 lg:px-0 gap-4 lg:gap-0 grid-cols-1 place-content-center place-items-center pt-10 pb-10'>
   <div>
     <img src={img} className='w-[487px]' alt="" />
    </div>
    <div className='mt-4 flex gap-6 flex-col '>
   <div>
     <h1 className='text-2xl text-center lg:text-start md:text-[36px]  text-[#546E62] font-fredoka'>Our vision</h1>
   <p className=' font-poppins text-center lg:text-start text-xl font-semibold md:text-2xl mt-3  text-[#546E62]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

</p>
   </div>
   <ul className=" flex gap-4 flex-col px-4 md:px-0">
          <li className='md:w-[650px] text-[#5e5e5e] font-poppins text-justify'>
            <b className='font-fredoka '>&bull; Innovation:</b> We strive to innovate relentlessly, pushing boundaries to create solutions that transform [industry or field].
          </li>
          <li className='md:w-[650px] text-[#5e5e5e] font-poppins text-justify'>
            <b className='font-fredoka '>&bull; Sustainability:</b>  Environmental and social responsibility are at the heart of our operations, ensuring a sustainable and ethical impact.
          </li>
          <li className='md:w-[650px] text-[#5e5e5e] font-poppins text-justify'>
            <b className='font-fredoka '>&bull; Empowerment:</b>  We empower individuals and communities, fostering growth, equality, and opportunities for all.
            </li>
          <li className='md:w-[650px] text-[#5e5e5e] font-poppins text-justify'>
            <b className='font-fredoka '>&bull; Excellence:</b>  Commitment to excellence is non-negotiable. We continuously challenge ourselves to deliver the highest quality [products/services] to our stakeholders.
          </li>
         
        </ul>
   
    </div>
    
 </div>
  )
}

export default Vision