import React from 'react'
import bg from "../../assets/welcomebg.png"
import img from "../../assets/welcome.png"
function Welcome() {
  return (
    <div className='bg-cover  flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-32 pt-36 pb-10' style={{ backgroundImage: `url(${bg})` }}>
 <div className='pt-10 lg:pt-0 relative'>
            <img src={img} className='object-cover' alt="" />
            <div className='absolute -translate-y-1/2 top-[54%] lg:top-[50%] right-[5%] md:right-[8%] lg:right-[10%]'>
            <h1 className='font-fredoka  text-white text-2xl md:text-3xl lg:text-[34px] '>Welcome</h1>   
            <p className='text-white text-sm md:text-base font-poppins'>To ABC Childcare Center  </p>
            </div>
        </div>
        <div className='flex gap-4 px-4 flex-col'>
        <p className='text-white text-center lg:text-start font-poppins  text-[14px] md:text-base md:w-[480px]'>We're thrilled to welcome you to the ChildEra Management Software family! At ChildEra, we're dedicated to fostering a vibrant community committed to delivering unparalleled childcare management solutions, nurturing a love for learning, and ensuring the best for your precious little ones.
            </p>
           <div className='flex flex-col gap-2'>
           <h1 className='font-fredoka text-center lg:text-start text-white text-lg md:text-[24px] lg:text-[34px] '>Our Commitment:</h1>
            <p className='text-white font-poppins text-center lg:text-start md:w-[480px]'>At ChildEra Management Software, we prioritize your child's well-being and development. Our dedicated team of expert caregivers is committed to providing exceptional childcare management solutions, creating an environment where every child can flourish and thrive.
            </p>
           </div>
           <div className='flex flex-col gap-2'>
           <h1 className='font-fredoka text-white text-center lg:text-start text-lg md:text-[24px] lg:text-[34px]'>A Nurturing Environment</h1>
            <p className='text-white font-poppins text-center lg:text-start  text-[14px] md:text-base  md:w-[480px]'>We understand the significance of the early years in shaping a child's future. At ChildEra Management Software, we transcend traditional childcare, fostering a nurturing haven where curiosity thrives, growth is celebrated, and smiles abound.
            </p>
           </div>
          
        
        </div>
    </div>
  )
}

export default Welcome