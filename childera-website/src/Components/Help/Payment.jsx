import React from 'react'
import Hero from './Hero'
import Button from './Button';
import Contact from './Conatct';
function Payment() {
  const items =[
   { heading:"Automated Invoicing:",
      parah:"ChildEra Management Software streamlines invoicing processes by automating the generation and distribution of invoices. This feature ensures accuracy and efficiency, saving time for childcare administrators and providing a seamless billing experience for parents."  
    },
   { heading:"Flexible Payment Options:",
      parah:"With ChildEra, childcare centers can offer parents a variety of payment options, including credit card payments, bank transfers, and online payment gateways. This flexibility enhances convenience for parents, leading to improved satisfaction and on-time payments.      "  
    },
   { heading:"Real-Time Payment Tracking:",
      parah:"ChildEra allows childcare providers to track payments in real-time, providing instant updates on payment statuses and account balances. This feature enables administrators to monitor financial transactions efficiently and identify any outstanding payments promptly.      "  
    },
   { heading:"Automated Payment Reminders:",
      parah:"ChildEra's automated payment reminder feature helps childcare centers stay on top of overdue payments by sending timely reminders to parents. This proactive approach encourages timely payments, reducing the incidence of late fees and ensuring consistent cash flow for the center.      "  
    },
   { heading:"Secure Payment Processing:",
      parah:"ChildEra prioritizes the security of financial transactions by implementing robust encryption and compliance measures. With secure payment processing, parents can trust that their sensitive information is protected, fostering confidence and trust in the childcare center's payment system. "  
    },
  ]
  return (
    <div>
      <Hero/>
      <div className='flex justify-center items-center flex-col gap-4 pt-20 pb-20 px-4 md:px-0'>
        <h1 className='font-fredoka text-[#3F6955] text-[32px] lg:text-[42px] text-center'>Payment  <span className='text-[#F3CA5F]'>System</span></h1>
        <p className='text-[#3F6955] md:w-[600px] text-center font-poppins'>Effortlessly manage invoices, track payments, and offer flexible options to streamline transactions and ensure smooth operations.</p>
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

export default Payment  