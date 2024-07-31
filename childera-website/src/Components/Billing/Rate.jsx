import React, { useState } from 'react';
import img from "../../assets/billing.png";
import img2 from "../../assets/billing2.png";
import img3 from "../../assets/billing3.png";
import img4 from "../../assets/billing4.png";
import img5 from "../../assets/billing5.png";
import point from "../../assets/point.png";

function Rate() {
  const [active, setActive] = useState("Overview");
  const items = ["Overview", "Billing", "Payments", "Tracking", "Reporting"];

  const data=[
    {
      icon:point,
      topic:"Overview",
      img:img,
      heading:"ChildEra Software Management Tool allows you to -",
      points:[
        "Quickly set up billing.","Easily create billing plans for multiple students and automate invoicing tasks.",
        "Customize payment amounts for different payers and enable automatic payment notifications.","Gain access to detailed reports and billing data to track balances, deposits, transactions, revenue, and other key financial metrics.","Centralize tracking for a comprehensive overview of your finances, including both agency and family payers."
      ]
    },
    {
      icon:point,
      topic:"Billing",
      img:img2,
      heading:"Simplify billing for both you and your families.",
      points:[
        "Streamline billing processes with automated invoicing and payment tracking features.","Generate detailed invoices accurately reflecting services provided for transparent billing.",
        "Easily manage payment schedules and overdue accounts to ensure financial stability.",
      ]
    },
    {
      icon:point,
      topic:"Payments",
      img:img3,
      heading:"Effortlessly handle payments for your program.",
      points:[
        "Accept payments securely through various methods including credit cards and bank transfers.","Provide parents with convenient payment options to facilitate timely transactions.",
        "Automatically record payments and update account balances for efficient financial management.",
        "Set up recurring payments for hassle-free billing and improved cash flow."]
    },
    {
      icon:point,
      topic:"Tracking",
      img:img4,
      heading:"Monitor childcare payments from start to finish.",
      points:[
        "Track attendance with digital check-in/out systems, ensuring accurate records.","Monitor child activities and progress throughout the day with real-time tracking.",
        "AKeep inventory levels in check by tracking supplies and materials usage.",
        
      ]
    },
    {
      icon:point,
      topic:"Reporting",
      img:img5,
      heading:"Provide administrators complete access to reports and data.",
      points:[
        "Generate comprehensive reports on attendance, payments, and child development progress.","Analyze data to identify trends and insights for informed decision-making.",
        "Customize reports to meet specific needs and requirements of childcare center administrators.",
        "Share reports with parents to keep them informed and engaged in their child's daycare experience"
      ]
    },
  ]
  return (
    <div className=' bg-[#EFFFF7]'>
      <h1 className='text-[22px] mx-auto pt-10 md:text-[28px] md:w-[600px] lg:text-[42px]  font-fredoka  lg:w-[810px]  text-[#546E62] text-center'>Discover the essential billing and payment functionalities.</h1> 
     <div className='flex justify-center items-center mt-10'>
     <div className='w-[350px] md:w-[713px] lg:w-[950px] h-[50px] md:h-[100px] flex justify-around items-center bg-[#83C9A7] rounded-[52px]'>
        {items.map((item, index) => (
          <button 
            key={index}
            className={`font-poppins text-[#2A4E3D] text-xs md:text-lg  ${active === item ? 'bg-[#F3CA5F] w-[83px] h-[32px] md:w-[130px] lg:w-[172px] md:h-[71px] font-medium' : ''} rounded-[52px] w-[83px] h-[32px] md:w-[130px] lg:w-[172px] md:h-[71px]`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>
     </div>
     {data.map((item, index) => (
        active === item.topic ? (
          <div key={index} className='flex flex-col pt-10 pb-10 lg:flex-row justify-center lg:justify-around items-center'>
            <div>
              <h1 className='text-lg md:text-2xl lg:text-[28px] text-center lg:text-start font-fredoka text-[#546E62]'>{item.heading}</h1>
              <ul className='mt-8 flex gap-4 flex-col px-4 lg:px-0'>
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className='flex items-center gap-4'>
                    <img src={item.icon} className='size-[25px]' alt="" />
                    <p className='lg:w-[565px] font-poppins text-sm md:text-base text-[#5e5e5e]'>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={item.img} className='size-[440px]' alt="" />
            </div>
          </div>
        ) : null
      ))}

    </div>
  );
}

export default Rate;
