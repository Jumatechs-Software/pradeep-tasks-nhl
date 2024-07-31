import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide CSS
import img1 from "../../assets/testimonial-1.png"
import img2 from "../../assets/testimonial-2.png"
import img3 from "../../assets/testimonial-3.png"

function Testimonial() {
  useEffect(() => {
    // Determine the perPage value based on the device screen size
    const perPage = window.innerWidth < 768 ? 1 : 3;

    // Initialize Splide instance with the calculated perPage value and other options
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: perPage,
      autoScroll: {
        speed: 1,
      },
      pagination: true, // Enable pagination (navigation dots)
      gap: '1rem', // Add gap between slides
    });

    // Mount Splide instance
    splide.mount();

    // Clean up on unmount
    return () => {
      splide.destroy();
    };
  }, []); // Empty dependency array to run only once

  return (
    
    <div className="splide mt-10 bg-[#FAFAFA]">
      <div className="splide__track ">
        <ul className="splide__list ">
          <li className="splide__slide w-[330px] px-4 md:px-0 md:w-[390px] h-[350px] flex flex-col justify-center items-center gap-4 bg-white ">
            <img src={img1} className='size-[81px] rounded-full' alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-[#383838] font-bold font-montserrat' >Phillip</h1>
              <p className='text-[#383838] font-poppins'>Professor</p>
            </div>
            <p className='text-[#303030] font-poppins md:w-[360px] text-center'>The Childera app revolutionized our daycare, streamlining daily child activity recording, staff management, license tracking, bill payments, form filling, menu creation, and more.</p>
          </li>
          <li className="splide__slide w-[330px] px-4 md:px-0 md:w-[390px] h-[350px] flex flex-col justify-center items-center gap-4 bg-white">
            <img src={img2} className='size-[81px] rounded-full' alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-[#383838] font-bold font-montserrat' >Phillip</h1>
              <p className='text-[#383838] font-poppins'>Professor</p>
            </div>
            <p className='text-[#303030] font-poppins md:w-[360px] text-center'> I was truly impressed by the innovative UI/UX solutions provided for our mobile app. Our customers have noticed the difference, and the feedback has been overwhelmingly positive.</p>
          </li>
          <li className="splide__slide w-[330px] px-4 md:px-0 md:w-[390px] h-[350px] flex flex-col justify-center items-center gap-4 bg-white">
            <img src={img3} className='size-[81px] rounded-full' alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-[#383838] font-bold font-montserrat' >Phillip</h1>
              <p className='text-[#383838] font-poppins'>Professor</p>
            </div>
            <p className='text-[#303030] font-poppins md:w-[360px] text-center'>I recently had the pleasure of redesigning my online store with a focus on creating a mobile-friendly interface, incorporating an HD product catalog, and ensuring the entire web design was responsive.</p>
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default Testimonial;