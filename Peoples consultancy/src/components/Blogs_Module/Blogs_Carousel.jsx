import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "./Data";

const Blogs_Carousel = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [active, setActive] = useState("All");
  const items = ["All", "Design", "Technology", "Development"];
  const data = blogsData;

  // Filter items based on the active category
  const filteredItems = active === "All" ? data : data.filter(item => item.topic === active);

  // Function to limit content to 100 words
// Function to limit content to 100 words
const limitContent = (content, limit) => {
  if (content.length > limit) {
    return content.substring(0, limit) + '...';
  }
  return content;
};




  return (
    <div className="mb-20">
      <div className="flex justify-center gap-4 pb-3 lg:flex-nowrap flex-wrap">
        {items.map((item, index) => (
          <button
            key={index}
            className={`text-[#303030] font-poppins font-normal px-4 py-2 rounded-xl ${active === item ? 'bg-[#CECECE]' : null}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Display filtered items */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 place-content-center place-items-center lg:px-[16%] px-[6%] gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="w-[313px] h-[430px] border rounded-md p-2">
            <img src={item.blogImage} alt={item.title} className="w-[295px] h-[193px] mb-2" />
            <h3 className="font-poppins font-semibold text-[#12141D] text-lg pb-2 ">{item.title}</h3>
            <p className="font-poppins font-normal text-[#30303099] pb-2">{limitContent(item.content,160)}</p>

            <Link to={`/blog/${item.id}`}>
              <button className="font-poppins text-[#303030] ">Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs_Carousel;