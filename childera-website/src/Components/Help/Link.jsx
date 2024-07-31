import React from 'react'
import img from "../../assets/help.png"
import img2 from "../../assets/help2.png"
import img3 from "../../assets/help3.png"
import img4 from "../../assets/help4.png"
import img5 from "../../assets/help5.png"
import img6 from "../../assets/help6.png"
import { Link } from 'react-router-dom'

function Help() {
    const items=[
        {
            image:img,
            label:"Personal information",
            path:"/resource/helpcenter/personal"
        },
        {
            image:img2,
            label:"Payment System",
            path:"/resource/helpcenter/payment"
        },
        {
            image:img3,
            label:"For Family",
            path:"/resource/helpcenter/family"
        },
        {
            image:img4,
            label:"Check in/ Out ",
            path:"/resource/helpcenter/checkin"
        },
        {
            image:img5,
            label:"Report Details",
            path:"/resource/helpcenter/report"
        },
        {
            image:img6,
            label:"Future Update",
        },
       
    ]
  return (
    <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-10 lg:px-20 pt-20 pb-20'>

        {items.map((item,i)=>{
            return(
                <div className='w-[300px] h-[212px] flex items-center justify-center  shadow-lg rounded-[20px]' key={i}>
                    <Link className='flex items-center justify-center gap-4 flex-col' to={item.path}>
<img src={item.image} className='size-[80px] object-cover' alt="" />
<h1 className='font-fredoka text-lg text-[#4CAF84]'>{item.label}</h1>
</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Help