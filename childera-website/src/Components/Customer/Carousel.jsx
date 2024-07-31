import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import img from "../../assets/testimonial-1.png";

function SplideCarousel() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage,
      autoScroll: {
        speed: 1,
      },
      pagination: true,
      gap: "1rem",
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [perPage]); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(1);
      } else if (window.innerWidth < 1024) {
        setPerPage(1);
      } else {
        setPerPage(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonialData = [
    {
      name: "Phillip",
      occupation: "Professor",
      rating: "⭐⭐⭐⭐⭐",
      review:
        '"Child Era keeps us connected effortlessly, enhancing our child\'s learning journey. Highly recommend!"',
    },
  ];

  return (
    <div className="splide pt-10 mt-20 pb-10 bg-[#E9F6EF]">
      <div className="splide__track">
        <ul className="splide__list">
          {testimonialData.map((testimonial, index) => (
            <li
              key={index}
              className="splide__slide px-4 md:px-0 w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center"
            >
              <div className="mx-auto">
                <img src={img} className="w-[200px] lg:w-[220px] h-auto object-cover rounded-lg" alt="" />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <p className="text-[#325544] font-poppins font-bold">{testimonial.rating}</p>
                <h1 className="text-[#383838] font-bold font-poppins">{testimonial.name}</h1>
                <p className="text-[#3F6955] font-poppins text-center px-2 md:px-0 md:w-[297px]">{testimonial.review}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SplideCarousel;
