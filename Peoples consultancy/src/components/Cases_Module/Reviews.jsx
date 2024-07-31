import { Link } from 'react-router-dom'
import buisness from '../../assets/buisness.png'

const Reviews = () => {
  return (
    <div className='flex justify-evenly items-center lg:flex-nowrap flex-wrap-reverse pb-16 md:gap-y-0 gap-y-20'>
      <div >
        <img src={buisness} alt="" className='w-[580px] lg:h-[526px]'/>
      </div>
      <div className='w-[636px] h-[389px] lg:pt-12 lg:px-0 px-6 lg:text-start text-center'>
        <p className="font-redhat text-[#18181B] lg:text-3xl text-xl pb-2">Check out our customer reviews to see for yourself!</p>
        <p className="font-poppins text-[#999999] pb-2">Childera app has transformed our daycare operations, revolutionizing how we record daily child activities, manage staff information, track licenses, handle billing, complete activity forms, design menus, and more. Its an all-in-one solution that is incredibly user-friendly, saving us a significant amount of time. With Childera, administrative tasks are streamlined, allowing us to prioritize the childrens needs. This app has truly alleviated our biggest challenges, and we highly recommend it to any daycare seeking efficiency and convenience.</p>
        <p className='font-poppins text-[#18181B] font-bold'>Alaney</p>
        <p className='font-inter text-[#999999] pb-4'>Manager</p>
        <div>
         <Link to={"/"}><button className='bg-black text-white px-4 py-2 rounded-lg font-inter'>View all reviews</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default Reviews
