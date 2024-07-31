import React from "react";
import img from "../../assets/SolutionHero.png";
function Hero() {
    return (
        <div
            className="pt-14 pb-28 flex items-center flex-col px-4 md:px-0 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-around bg-[white]  w-full overflow-x-hidden mt-4"

        >
            <div className="flex relative  flex-col gap-6">

                <h5 className="text-[16px] text-center lg:text-start  text-[#3F6955] font-poppins ">
                    Program
                </h5>

                <div className="relative">
                    <h1 className="text-[34px] leading-[1.2] md:text-[34px] lg:text-[56px] text-[#546E62] w-full h-full text-center lg:text-start font-fredoka md:w-[550px] lg:w-[580px]">
                        Streamline Program {" "} <br className="md:hidden"/>
                        <span className="text-[#ffd400] "> Management </span>
                    </h1>

                </div>

                <p
                    className="font-poppins text-[14px] text-center lg:text-start text-[#5E5E5E] w-[300px]  md:w-[550px]"
                >
                    Welcome to the Streamline Program Management page showcasing the <br /> ChildEra Software Management Tool.               </p>

            </div>
            <div className="relative">
                <img src={img} className="object-cover" alt="" />
            </div>
        </div>
    );
}

export default Hero;
