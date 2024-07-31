import React from 'react'
import img from "../../assets/service.png"
import img2 from "../../assets/service-2.png"
import img3 from "../../assets/service-3.png"
import img4 from "../../assets/service-4.png"
import img5 from "../../assets/service-5.png"
import img6 from "../../assets/service-6.png"
function Features() {
const items =[
    {
        image:img,
        label:"Real-Time Communication",
        parah:"ChildEra ensures seamless communication among childcare providers, parents, and staff with its real-time messaging feature, fostering collaboration and enhancing childcare experiences."
    },
    {
        image:img2,
        label:"Secure Environment",
        parah:"With advanced security measures and encryption protocols, ChildEra provides a secure platform for managing sensitive information and safeguarding the well-being of children in childcare facilities."
    },
    {
        image:img3,
        label:"Personalized Experiences",
        parah:"Our Sophisticated Tool, ChildEra allows childcare providers to personalize experiences for each child, tailoring activities and learning materials to their individual needs and interests, promoting holistic development."
    },
    {
        image:img4,
        label:"Educational Enrichment",
        parah:"ChildEra offers a plethora of interactive resources and educational materials tailored to children's developmental stages, promoting a stimulating learning environment within childcare centers."
    },
    {
        image:img5,
        label:"Community Connection",
        parah:"ChildEra fosters community connection by facilitating communication and collaboration among childcare centers, parents, and educators, creating a supportive network for children's growth and development."
    },
    {
        image:img6,
        label:"Transparent Insights",
        parah:"Our Software offers clear insights into children's progress, attendance records, and daily activities, empowering parents with valuable information and fostering trust and transparency within childcare communities."
    },
]
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 place-content-center pt-20'>
        {items.map((items,index)=>{
            return(
                <div className='w-[537px] h-[167px] flex items-center justify-center gap-8' key={index}>
                   <div>
                   <img src={items.image} className='object-cover size-[75px] md:size-[90px]' alt="" />
                    </div> 
                    <div>
                    <h1 className='text-[#3F6955] font-fredoka text-lg  md:text-[22px]'>{items.label}</h1>
                    <p className='font-poppins text-[#5E5E5E] text-sm md:text-lg w-[237px] md:w-[420px]'>{items.parah}</p>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Features