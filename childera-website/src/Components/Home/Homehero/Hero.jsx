import React from "react";
import bg from "../../../assets/Hero.png";
import img from "../../../assets/hero-pic.png";
import leaf from "../../../assets/Leaf.png";
import star from "../../../assets/Soft Star.png";
import up from "../../../assets/Home 2.png";
import flower from "../../../assets/Asterisk 1.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="pt-28 pb-28 flex items-center flex-col px-4 md:px-0 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-around bg-[#EEFAF4]  w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex relative  flex-col gap-6">
        <img src={leaf} className="absolute left-[15%] size-[23PX] -top-7 lg:left-0 " alt="" />

        <h5 className="text-xl md:text-[24px] text-center lg:text-start  text-[#83C9A7] font-semibold">
          #1 ChildCare Management Software
        </h5>

       <div className="relative">
       <h1 className="text-3xl leading-[1.2] md:text-[34px] lg:text-[42px] text-[#546E62] w-full h-full text-center lg:text-start font-fredoka md:w-[550px] lg:w-[580px]">
  Discover the future of{" "}
  <span className="border-[#ffd400] border-b-8">childcare management</span> with our ChildEra software
</h1>

        <img src={up} className="absolute bottom-2 left-[80%]  w-[18px] object-contain" alt="" />
       </div>

        <p className="font-poppins text-center lg:text-start text-[#969191]  md:w-[550px]">
        Make running your childcare center a breeze with our easy-to-use software! Say goodbye to paperwork headaches with simple electronic forms and easy signatures. Get organized effortlessly and stay stress-free – Sign Up now for a smoother childcare experience.
        </p>
        <div className="relative flex justify-center lg:justify-normal">
          <Link to="/get-start">
          <button className="md:w-[200px] px-[60px] md:px-0 py-5 md:py-[20px] md:rounded-2xl font-bold text-lg rounded-[50px] bg-[#3F6955] text-white ">
            Get Started
          </button>
          </Link>
          <img src={star} className="absolute size-[42px] bottom-0 right-0" alt="" />
        </div>
      </div>
      <div className="relative">
        <img src={img} className="object-cover md:w-[600px]" alt="" />
    <img src={flower} className="absolute bottom-0 right-0 size-[27px]" alt="" />
      </div>
    </div>
  );
}

export default Hero;
