import img from "../../assets/childera.png"
import img2 from "../../assets/taximize.png"
import img3 from "../../assets/spotpay.png"
import img4 from "../../assets/easylearn.png"
import { Link } from "react-router-dom"
const OurProjects = () => {
  return (
    <div className='mt-20 container px-4 mx-auto'>
      <div className='lg:ps-36'>
      <h1 className='font-redhat text-center lg:text-start font-bold text-[#18181B] lg:text-4xl text-2xl pb-4'>Our Projects</h1>
      <p className='md:w-[633px] mx-auto lg:mx-0 font-poppins text-center lg:text-start text-[#12141D]'>In our role as an IT service provider, we pride ourselves on not just achieving project success but also on consistently sharing our insights.</p>
      </div>
    <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-around'>
    <div>
      <div>
      <div className=''>
      <img src={img} className='md:w-[600px]' alt="" />
      </div>
      <div className='flex flex-col gap-8 md:ps-14 ps-8'>
        <h1 className='font-redhat  text-[#1B4D6D]'>Management software</h1>
        <div>
        <h1 className='text-[32px] font-bold text-[#18181B] font-redhat'>ChildEra</h1>
        <p className='md:w-[459px]   font-poppins text-[#999999] mt-4'>A comprehensive app for managing child activities, health records, and enhancing parent-teacher communication.</p>
        </div>
      </div>
      </div>
      <div>
      <div className=''>
      <img src={img2} className='md:w-[600px] ' alt="" />
      </div>
      <div className='flex flex-col gap-8 md:ps-14 ps-8'>
        <h1 className='font-redhat  text-[#1B4D6D]'>Money Transaction app</h1>
        <div>
        <h1 className='text-[32px] font-bold text-[#18181B] font-redhat'>Taxmize</h1>
        <p className='md:w-[459px]   font-poppins text-[#999999] mt-4'>Taxmize app manages and optimizes your tax filing by handling personal information, income, deductions, and credits efficiently..</p>
        </div>
      </div>
      </div>
      </div>
    <div className='lg:mt-20'>
      <div>
      <div className=''>
      <img src={img3} className='md:w-[600px]' alt="" />
      </div>
      <div className='flex flex-col gap-8 md:ps-14 ps-8'>
        <h1 className='font-redhat  text-[#1B4D6D]'>Money Transaction app</h1>
        <div>
        <h1 className='text-[32px] font-bold text-[#18181B] font-redhat'>Spotpay</h1>
        <p className='md:w-[459px]   font-poppins text-[#999999] mt-4'>Seamlessly transfer money anytime, anywhere. Say goodbye to hassles, hello to convenience!</p>
        </div>
      </div>
      </div>
      <div>
      <div className=''>
      <img src={img4} className='md:w-[600px]' alt="" />
      </div>
      <div className='flex flex-col gap-8 md:ps-14  ps-8'>
        <h1 className='font-redhat  text-[#1B4D6D]'>Learning platform</h1>
        <div>
        <h1 className='text-[32px] font-bold text-[#18181B] font-redhat'>Easylearn</h1>
        <p className='md:w-[459px]   font-poppins text-[#999999] mt-4'>Elevate your knowledge with our user-friendly platform designed for smooth learning. Dive into a world of educational resources and personalized growth opportunities!</p>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className="text-center pt-10 ">
      <Link to={"/service"}><button className="bg-black text-white px-8 py-2 rounded font-redhat font-bold ">View more</button></Link>
    </div>
    </div>
  )
}



export default OurProjects