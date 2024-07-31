import React from 'react'
import img from "../../assets/benifits.png"
import { Link } from 'react-router-dom'
function Benifits() {
  return (
    <div className='pt-10 flex flex-col px-4 md:px-0 lg:flex-row justify-center items-center gap-8 pb-10'>
        <div>
            <img src={img} className='object-cover md:w-[600px]' alt="" />
        </div>
        <div className='flex gap-4  flex-col'>
            <h1 className='font-fredoka text-[#546E62]  text-[28px] lg:text-[34px] '>Benefits for Child Care Centers</h1>
            <p className='text-[#969191] font-poppins md:w-[600px]'>Our ChildCare App simplifies operations with easy scheduling, attendance tracking, and parent communication. Secure cloud storage keeps records accessible, providing peace of mind for providers and parents. With streamlined functions and seamless communication, it creates a safer, more organized environment for children to thrive.
            </p>
            <ul className='text-[#969191]  font-poppins list-disc pl-4'>
                <li>Simplified scheduling and attendance tracking</li>
                <li>Easy communication with parents</li>
                <li>Secure cloud storage for important records</li>
                <li>Enhanced organization and efficiency</li>
                <li>Peace of mind for providers and parents</li>
            </ul>
            <div>
            <Link to="/get-start">
                <button className='bg-[#3F6955] font-bold px-[40px] py-[20px] md:rounded-2xl  rounded-[50px] text-white'>Get Started</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Benifits