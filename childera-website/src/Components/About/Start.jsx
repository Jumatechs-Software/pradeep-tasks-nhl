import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div className='px-4 md:px-0 flex pt-10 pb-20 flex-col justify-center gap-4 items-center'>
        <h1 className='font-fredoka text-[32px] text-center  lg:text-[42px] text-[#546E62] '>Start your Journey </h1>
        <p className='font-poppins text-center text-[#5e5e5e]  lg:w-[800px]'>Curious about how your child can thrive at ABC Childcare Centre? Reach out to us today to explore the exciting possibilities of growth and learning tailored for your little one!</p>
        <div>
        <Link to="/get-start">
            <button className='bg-[#F3C95F] w-[154px] h-[56px] rounded-lg  text-[#6C5826] font-bold'>Join now </button>
            </Link>
        </div>
    </div>
  )
}

export default Start