import React from 'react'
import Hero from './Hero'
import { TbMathGreater } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Button from './Button';
import Contact from './Conatct';
function Personal() {
  const items =[
   { heading:"Child's Details:",
      parah:"In the Child's Details section, we gather important information about your little ones, like their name, birthdate, and gender. We also like to know their favorite things, hobbies, and any special preferences they have. This helps us provide personalized care that your child will love."  
    },
   { heading:"Parent/Guardian Information:",
      parah:"In this section, we ask for your contact details so we can stay in touch easily. We'll need your full names, address, phone numbers, and email addresses. It's also helpful to have emergency contact information in case we need to reach someone quickly. We ensure smooth communication and emergency preparedness for you."  
    },
   { heading:"Medical History:",
      parah:"Here, we'll ask about your child's health history, like allergies, medications they take, and any medical conditions they have. This helps us keep them safe and provide the right care if they ever need it. Your child's well-being is our top priority. We ensure optimal safety and tailored care for your child."  
    },
   { heading:"Permissions and Preferences:",
      parah:"We want to make sure we respect your wishes when it comes to your child's care. In this section, you can let us know if it's okay to take them on outings, share photos of them, or give them certain treatments if needed. Your preferences matter to us.So, don't worry about it at all. We got your back."  
    },
   { heading:"Emergency Procedures:",
      parah:"Safety is our number one concern, so we have plans in place for emergencies. This section outlines what to do in case of different situations, like accidents or natural disasters. We'll also ask for emergency contact information so we can reach you quickly if needed. Your child's safety is our top priority."  
    },
  ]
  return (
    <div>
      <Hero/>
      <div className='flex justify-center items-center flex-col gap-4 pt-20 pb-20 px-4 md:px-0'>
        <h1 className='font-fredoka text-[#3F6955] text-[32px] lg:text-[42px] text-center'>Personal <span className='text-[#F3CA5F]'>Information</span></h1>
        <p className='text-[#3F6955] md:w-[600px] text-center font-poppins'>Capture essential details like contact information and medical history to provide personalized care and ensure child safety and well-being.</p>
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

export default Personal