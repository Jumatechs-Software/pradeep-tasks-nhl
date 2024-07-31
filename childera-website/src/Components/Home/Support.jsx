import React from 'react'
import bg from "../../assets/supportbg.png"
import img from "../../assets/support.png"
import { Link } from 'react-router-dom'
function Support() {
  return (
    <div className='mt-20 pt-16 pb-32 lg:pb-0 lg:pt-0 flex flex-col lg:flex-row justify-around gap-5 lg:gap-0  items-center md:h-[800px] lg:h-[600px] bg-no-repeat bg-center bg-cover '   style={{ backgroundImage: `url(${bg})` }}>
        <div className='flex flex-col gap-4 mt-32 lg:mt-0'>
        <h1 className='font-fredoka text-center lg:text-start text-2xl md:text-3xl lg:text-[42px] text-white'>Support is here for you.</h1>
        <p className='font-poppins text-center px-4 md:px-0 lg:text-start text-white '>The Helpline of ChildEra is available 24/7. You are always <br className='hidden md:block' /> welcome to get support from here. </p>
<div className='flex justify-center lg:block'>
  <Link to="/support">
    <button className='text-[#6C5826] font-bold bg-[#F3C95F] rounded-[30px] md:rounded-2xl px-5 py-2 '>Get Support</button>
    </Link>
</div>
        </div>
        <div>
            <img src={img} className='object-cover size-[300px] md:size-[432px]' alt="" />
        </div>
    </div>
  )
}

export default Support