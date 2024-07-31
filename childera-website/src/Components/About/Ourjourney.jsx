import React from 'react'
import  img from  "../../assets/journey.png"
import  img2 from  "../../assets/journey2.png"
import  img3 from  "../../assets/journey3.png"
import  img4 from  "../../assets/journey4.png"
import  img5 from  "../../assets/journey5.png"
function Ourjourney() {
  return (
    <div className=' hidden md:block pb-20'>
                     <h1 className='text-2xl text-center md:text-[36px]  text-[#546E62] font-fredoka'>Our Journey</h1>
                     
                     <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-20">
  <li>
  <div class="timeline-middle">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
<circle cx="17.5" cy="17.5" r="15" fill="#83C9A7" stroke="#5E5E5E" stroke-width="5"/>
</svg>
    </div>
    <div className="  timeline-end  flex ps-2 gap-4 justify-center items-center">
        <img src={img5} className='size-[50px] lg:size-[80px] object-cover' alt="" />
        <div>
            <h1 className='text-lg font-fredoka text-[#5e5e5e] mt-2'>Inception and Ideation</h1>
            <p className='font-poppins text-xs  w-[250px] lg:w-[330px]'>[Month, Year]: [Your Childcare App Name] takes root, inspired by a vision of transforming childcare experiences.</p>
        </div>
    </div>
    <hr className='bg-[#5e5e5e]'/>
  </li>
  <li>
    
  <div class="timeline-middle">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
<circle cx="17.5" cy="17.5" r="15" fill="#83C9A7" stroke="#5E5E5E" stroke-width="5"/>
</svg>
    </div>
    <hr className='bg-[#5e5e5e]'/>
    <div className="  timeline-start  flex ps-2 gap-4 justify-center items-center">
        <img src={img} className='size-[50px] lg:size-[80px] object-cover' alt="" />
        <div>
            <h1 className='text-lg font-fredoka text-[#5e5e5e] mt-2'>Development Kickoff</h1>
            <p className='font-poppins text-xs  w-[250px] lg:w-[330px]'>[Month, Year]: Our passionate team of developers, childcare specialists, and educators join forces to bring the vision to life.</p>
        </div>
        </div>
         <hr className='bg-[#5e5e5e]'/>
  </li>
  <li>
  <div class="timeline-middle">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
<circle cx="17.5" cy="17.5" r="15" fill="#83C9A7" stroke="#5E5E5E" stroke-width="5"/>
</svg>
    </div>
    <hr className='bg-[#5e5e5e]'/>
    <div className="  timeline-end  flex ps-2 gap-4 justify-center items-center">
        <img src={img2} className='size-[50px] lg:size-[80px] object-cover' alt="" />
        <div>
            <h1 className='text-lg font-fredoka text-[#5e5e5e] mt-2'>Beta Testing and Iterative Improvements</h1>
            <p className='font-poppins text-xs  w-[250px] lg:w-[330px]'>[Month, Year]: Beta version released, followed by continuous refinements based on valuable user feedback.</p>
        </div>
        </div>
    <hr className='bg-[#5e5e5e]'/>
  </li>
  <li>
  <div class="timeline-middle">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
<circle cx="17.5" cy="17.5" r="15" fill="#83C9A7" stroke="#5E5E5E" stroke-width="5"/>
</svg>
    </div>
    <hr className='bg-[#5e5e5e]'/>
    <div className="  timeline-start  flex ps-2 gap-4 justify-center items-center">
        <img src={img3} className='size-[50px] lg:size-[80px] object-cover' alt="" />
        <div>
            <h1 className='text-lg font-fredoka text-[#5e5e5e] mt-2'>Official Launch</h1>
            <p className='font-poppins text-xs  w-[250px] lg:w-[330px]'>[Month, Year]: [Your Childcare App Name] officially launches, marking a milestone in redefining childcare experiences.</p>
        </div>
        </div>
    <hr className='bg-[#5e5e5e]'/>
  </li>
  <li>
  <div class="timeline-middle">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
<circle cx="17.5" cy="17.5" r="15" fill="#83C9A7" stroke="#5E5E5E" stroke-width="5"/>
</svg>
    </div>
    <hr className='bg-[#5e5e5e]'/>
    <div className="  timeline-end  flex ps-2 gap-4 justify-center items-center">
        <img src={img4} className='size-[50px] lg:size-[80px] object-cover' alt="" />
        <div>
            <h1 className='text-lg font-fredoka text-[#5e5e5e] mt-2'>User Growth and Feature Expansions</h1>
            <p className='font-poppins text-xs  w-[250px] lg:w-[330px]'>[Month, Year]: Rapid user adoption and positive community feedback drive continuous expansion of features and resources.</p>
        </div>
        </div>
    <hr className='bg-[#5e5e5e]'/>
  </li>
 
</ul>

    </div>
  )
}

export default Ourjourney