import React from 'react'
import img from "../../assets/daily.png"
import img2 from "../../assets/daily2.png"
import img3 from "../../assets/daily3.png"
import img4 from "../../assets/daily4.png"
import img5 from "../../assets/daily5.png"
function Update() {
    const list=[
        {
            image:img,
            label:"Photos",
            parah:"See your child's daily adventures with instant snapshots delivered straight to your phone."
        },
        {
            image:img2,
            label:"Stay connected",
            parah:"Stay connected with your teacher and support school learning with fun activities at home."
        },
        {
            image:img3,
            label:"Your child's community",
            parah:"Stay in touch with your teacher and boost learning at home with fun activities."
        },
        {
            image:img4,
            label:"Digital check-in",
            parah:"Streamline check-ins with codes, add adults, and get attendance notifications for child and parents."
        },
        {
            image:img5,
            label:"Paperless billing",
            parah:"Utilize bank account or card for digital payments, with paperless invoices and emailed receipts."
        },
    ]
  return (
    <div className='pt-10 pb-10'>
        <h1 className='font-fredoka text-[32px]  text-center text-[#5B7B6D] lg:text-[42px]'>Daily updates</h1>
        <p className='text-[#5E5E5E] font-poppins text-center mt-4 px-4 md:px-0'>Live updates of daily activities as they happen.</p>
        <div className='flex  flex-wrap items-center justify-center gap-4  lg:gap-10'>
            {list.map((item,index)=>{
                       return( <div key={index} className='w-[400px] shadow-xl flex gap-6 items-center justify-center h-[232px] bg-[#FFFFFF] '>
                            <div><img src={item.image} className=" size-[68px]" alt="" /></div>
                            <div className=''>
                                <h1 className='font-fredoka text-[22px] text-[#4CAF84]'>{item.label}</h1>
                                <p className='text-[#5E5E5E] font-poppins w-[237px] mt-2 '>{item.parah}</p>
                            </div>
                        </div>)
            })}
        </div>
    </div>
  )
}

export default Update