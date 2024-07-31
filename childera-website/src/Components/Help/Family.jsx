import React from 'react'
import Hero from './Hero'
import Button from './Button';
import Contact from './Conatct';
function Family() {
  const items =[
   { heading:"Transparent Communication:",
      parah:"ChildEra Management Software facilitates transparent communication between childcare providers and families through messaging features and real-time updates. This ensures parents are kept informed about their child's activities, events, and developmental milestones, fostering trust and engagement with the childcare center."  
    },
   { heading:"Real-Time Updates:",
      parah:"With ChildEra, families receive real-time updates on their child's activities, meals, naps, and overall well-being throughout the day. These timely updates provide peace of mind to parents, allowing them to stay connected and informed about their child's daycare experience, even while away."  
    },
   { heading:"Convenient Access to Information:",
      parah:"ChildEra offers families convenient access to essential information about their child's care and development through the software platform. Parents can easily view schedules, attendance records, and communication logs, empowering them to stay involved and engaged in their child's educational journey.      "  
    },
   { heading:"Secure Data Storage:",
      parah:"ChildEra prioritizes the security and confidentiality of family information by implementing robust data encryption and secure storage protocols. Parents can trust that their sensitive data, including contact details and payment information, is protected from unauthorized access, ensuring peace of mind and privacy. "  
    },
   { heading:"Parent Engagement Tools:",
      parah:"ChildEra provides parent engagement tools such as photo sharing, event calendars, and parent-teacher messaging features. These tools facilitate collaboration between parents and childcare providers, enabling parents to actively participate in their child's educational experience and stay connected with the childcare center community.      "  
    },
  ]
  return (
    <div>
      <Hero/>
      <div className='flex justify-center items-center flex-col gap-4 pt-20 pb-20 px-4 md:px-0'>
        <h1 className='font-fredoka text-[#3F6955] text-[32px] lg:text-[42px] text-center'>For <span className='text-[#F3CA5F]'>Family</span></h1>
        <p className='text-[#3F6955] md:w-[600px] text-center font-poppins'>Facilitate transparent communication, provide real-time updates, and offer convenient access, fostering engagement and trust with families.</p>
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

export default Family   