import React from 'react';
import img from "../../assets/about-hero.png";

function Hero() {
  return (
    <div className="relative pt-20">
      <img src={img} className='object-cover' alt="" />
      <div className="absolute inset-0 bg-[#335042] opacity-40"></div> 
    </div>
  );
}

export default Hero;
