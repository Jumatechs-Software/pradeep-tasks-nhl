import React from 'react'
import bg from "../../assets/value.png"

function Value() {
    const items=[
        {
            heading:"Commitment to Excellence",
            paragraph:"At ChildEra, our management software tool reflects our commitment to excellence, as we constantly strive to deliver high-quality solutions that meet the evolving needs of childcare providers and families."
        },
        {
            heading:"Empathy and Inclusivity",
            paragraph:"Empathy and inclusivity are core values embedded in our management software tool, as we prioritize understanding and meeting the diverse needs of all children and families within the childcare community."
        },
        {
            heading:"Continuous Learning",
            paragraph:"ChildEra embraces a culture of continuous learning, reflected in our management software tool's ongoing updates and enhancements designed to support childcare providers in staying current with best practices and educational trends."
        },
    ]
  return (
    <div className='pb-20 pt-20 px-4'>
             <h1 className='text-2xl text-center md:text-[36px]  text-[#546E62] font-fredoka'>Values</h1>
<p className='text-center font-poppins text-[#5E5E5E] mt-3'> of Our ChildEra Application</p>
<div className='flex flex-wrap gap-10 justify-around mt-20 items-center' >
    {items.map((item, i) =>{
       return( <div className='relative size-[371px]' key={i}>
       <img src={bg} className='w-[371px] h-[380px]' alt="" />
    
       <div className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
       <h1 className='text-[#5e5e5e] font-fredoka text-center text-xl mt-5  '>{item.heading}</h1>
       <p className='text-[#5e5e5e] font-poppins  w-[300px]  text-sm md:text-base d:text-justify text-center mt-3'>{item.paragraph}</p>
       </div>
       </div>)
    })}
       
</div>
    </div>
  )
}

export default Value