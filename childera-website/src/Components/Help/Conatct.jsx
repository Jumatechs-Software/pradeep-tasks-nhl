import React from 'react';
import bg from "../../assets/childcare-form.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaRegClock,FaFacebook ,FaInstagram,FaTwitter } from "react-icons/fa";

function Contact() {    
  return (
    <div className='bg-[#3F6955] pt-20 flex flex-col gap-5 lg:flex-row items-center justify-center lg:justify-around   pb-20 bg-contain' style={{ backgroundImage: `url(${bg})` }}>
      <div className=" flex flex-col items-center gap-10 justify-center px-4 md:px-0">
       <div>
       <h1 className='text-3xl lg:text-4xl font-bold font-fredoka text-white mb-5 lg:text-start text-center'>Contact Us</h1>
        <p className='font-poppins text-white lg:w-[500px] text-center lg:text-start mb-8'>We're here to help! Reach out via email, phone, or our online form for prompt support and information.</p>
       </div>
        <div className='w-[325px] md:w-[578px] h-[350px] md:h-[180px] rounded-[20px] flex flex-col md:flex-row justify-center gap-4 md:justify-around items-center  bg-[#749082] bg-opacity-70'>
         <div className=''>
         <div className='flex  mb-4 ps'>
            <FaLocationDot className='text-white text-xl mr-2' />
            <p className='text-white font-poppins w-[200px]'>123 Main StreetCitytown, Stateville 56789 Fictionalland</p>
          </div>
          <div className='flex '>
            <FaPhone className='text-white text-xl mr-2' />
            <ul className='text-white font-poppins'>
              <li>+102-365-547</li>
              <li className='mt-2'>+102-365-547</li>
            </ul>
          </div>
         </div>
        
         <p className='w-[4px] h-[150px] rounded-lg hidden md:block bg-[#3F6955]' ></p>
<div>

<div className='flex pe-12 md:pe-0'>
            <FaRegClock className='text-white text-xl mr-2' />
            <ul className='text-white font-poppins'>
              <li>Monday-Friday</li>
              <li className='mt-2'>9:00am to 7:00pm</li>
            </ul>
          </div>
          <div className='flex justify-around  md:items-center md:justify-center gap-4 mt-8  '>
          <FaFacebook className='text-white text-xl ' />
          <FaInstagram className='text-white text-xl ' />
          <FaTwitter className='text-white text-xl ' />
          </div>
</div>
         
        </div> 
      </div>
      <div className='px-5 bg-[#749082] pt-2 rounded-lg pb-10 bg-opacity-70 '>
<form action="" className='flex items-center justify-center flex-col gap-4'>
<div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>First Name</label>
                <input type="text" placeholder='Your Name' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Last Name</label>
                <input type="text" placeholder='Your Last Name' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Email</label>
                <input type="email" placeholder='Your Email ID' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Phone Number</label>
                <input type="number" placeholder='Your mobile number' className='lg:w-[400px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg h-[48px]' name="" id="" />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-lg text-[#ffffff] font-poppins'>Write your message</label>
                <textarea type="text" placeholder='Write your message' className='lg:w-[400px] pt-2 h-[94px] ps-4 placeholder:text-[#5E5E5E] w-[325px] bg-white outline-none border-none rounded-lg ' name="" id="" />
            </div>
            <div className='flex justify-center  '>
            <button className='text-[#6C5826] rounded-lg bg-[#F3CA5F] font-semibold font-poppins  w-[250px] mx-auto  h-[54px]'>Send message</button>
        </div>
</form>
      </div>
    </div>
  );
}

export default Contact;
