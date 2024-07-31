import React from 'react';
import Svg from './Svg';
import img from "../../assets/customer.png";
import img2 from "../../assets/customer2.png";
import img3 from "../../assets/customer3.png";
import img4 from "../../assets/customer4.png";

function Success() {
  // Array of success story data
  const successStories = [
    {
      svg: <Svg />,
      title: "Parent Engagement Boost with ChildEra's Software Management Tool",
      description: "With ChildEra's Software Management tool, we've seen a remarkable improvement in parent engagement at our daycare. The easy-to-use interface allows parents to stay updated on their child's activities effortlessly. Our success story? Increased parent satisfaction and a stronger sense of community within our center.",
      image: img
    },
    {
      svg: <Svg />,
      title: "Streamlined Administrative Tasks with ChildEra's Tool Implementation",
      description: "Since implementing ChildEra's tool, our childcare center's administrative tasks have become a breeze. From scheduling to invoicing, everything is streamlined and efficient. Our success? More time spent on providing quality care and less time on paperwork.",
      image: img2
    },
    {
      svg: <Svg />,
      title: "Reduction in Administrative Errors with ChildEra's Tool Management",
      description: "Thanks to ChildEra's tool management, we've experienced a significant reduction in administrative errors and missed deadlines. The automated notifications keep us on track, ensuring nothing falls through the cracks. Our success story? Improved accuracy and peace of mind",
      image: img3
    },
    {
      svg: <Svg />,
      title: "Enhanced Center Operations with ChildEra's App Management Tool",
      description: "ChildEra's app management tool has empowered us to enhance our center's operations and improve overall efficiency. The secure cloud access allows us to manage tasks from anywhere, freeing up valuable time for staff and directors. Our success? A well-run childcare center that exceeds expectations.",
      image: img4
    },
  ];

  return (
    <div className='pt-20 pb-20 px-4 md:px-0'>
      <p className="text-[#3F6955] text-center ">10000+ Voices of Satisfaction</p>
      <h1 className='font-fredoka text-center mx-auto  text-[36px] lg:w-[600px]  text-[#546E62] lg:text-[42px]'><span className='text-[#F3CA5F]'>Success stories</span> from Happy Users of Child Era</h1>
      <div className='pt-20 flex flex-col gap-4'>
        {successStories.map((story, index) => (
          <div key={index} className={`flex  justify-around flex-col  ${index % 2 === 0 ? 'lg:flex-row  ' : 'lg:flex-row-reverse'} items-center gap-4`}>
            <div className='flex flex-col gap-4'>
              {story.svg}
              <h1 className='font-fredoka text-2xl text-center lg:text-start md:text-3xl text-[#3F6955] md:w-[562px]'>
                {story.title}
              </h1>
              <p className='text-sm text-center lg:text-start font-poppins text-gray-600 md:w-[568px]'>
                {story.description}
              </p>
            </div>
            <div>
              <img src={story.image} className='md:w-[405px] object-cover' alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Success;
