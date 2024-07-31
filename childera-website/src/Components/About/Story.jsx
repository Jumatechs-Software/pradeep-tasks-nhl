import React from 'react'
import img from "../../assets/story.png"
import { Link } from 'react-router-dom'
function Story() {
  return (
    <div className='grid lg:grid-cols-2 px-4 lg:px-0 gap-4 lg:gap-0 grid-cols-1 place-content-center place-items-center pt-10 pb-10'>
       <div className='mt-4 flex gap-6 flex-col '>
      <div>
      
      <p className=' font-poppins text-center lg:text-start text-[#6C5826]'>Our story</p>
   
        <h1 className='text-2xl text-center lg:text-start md:text-[36px] mt-1 text-[#546E62] font-fredoka'>Who we are</h1>
      </div>
        <p className='font-poppins w-[320px] md:w-[650px] text-[#5e5e5e] text-justify lg:w-[500px]'>At ChildEra, our team of developers, childcare specialists, and educators is dedicated to leveraging technology to enhance childcare experiences. With expertise in childcare, technology, and design, we strive to revolutionize the childcare landscape. Our mission is to create a user-friendly app that streamlines daily routines for families and enriches children's learning journeys. Through innovative design and a profound understanding of child development, we aim to cater to the needs of both parents and children. Join us in making a positive impact on families' lives with ChildEra.</p>
        <div className='flex justify-center lg:justify-start '>
        <Link to="/get-start">
            <button className='bg-[#F3CA5F] w-[170px] h-[50px] text-[#6C5826] rounded-lg md:rounded font-bold'>Join with us</button>
            </Link>
        </div>
       </div>
       <div>
        <img src={img} className='w-[487px]' alt="" />
       </div>
    </div>
  )
}

export default Story