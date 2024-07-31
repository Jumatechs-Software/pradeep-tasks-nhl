import React from 'react'
import img1 from "../../assets/About1.png"
import img2 from "../../assets/About2.png"
import img3 from "../../assets/About3.png"
import img4 from "../../assets/About4.png"
import bg from "../../assets/Arrow.png"
import bg1 from "../../assets/Union1.png"
import bg2 from "../../assets/Union3.png"
import bg3 from "../../assets/Union.png"
const Activities = () => {
    return (
        <div>
            {/* Monitor students' activities */}
            <div className=" h-[685px] bg-cover flex items-center  flex-col px-4 md:px-0 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-around  w-full" style={{ backgroundImage: `url(${bg1})` }} >
                <div className='flex flex-col gap-3 md:ps-[36px] lg:ps-0'>
                    <div className='flex gap-3 items-center'>
                        <img className='h-5 w-5' src={bg} alt="" />

                        <h1 className='text-[#4CAF84] text-[18px] lg:text-[22px] fw-semibold font-fredoka'>  Monitor students' activities:</h1>
                    </div>
                    <p
                        className="font-poppins text-[16px] text-[#5E5E5E] fw-semibold    md:w-[550px] ps-8"
                    >Our ChildEra Application Tool enables educators to monitor <br /> students' activities efficiently, providing insights into their <br /> progress and engagement to ensure effective learning <br /> experiences.</p>
                </div>
                <div className='w-[304.26px]   md:w-[510.56px] md:h-[263.52px] relative mt-10 h-[158.15px] bg-[#f3c957] rounded-[30px] '>
                    <div className='h-[509px] flex flex-col items-center justify-center gap-4 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px]  rounded-[30px] ' >
                        <img className='md:h-[298.72px] h-[173.27px] w-[286.78px] md:w-[473.17px]' src={img1} alt="" />

                    </div>
                </div>
            </div>

            {/* User-Friendly Design */}

            <div
                className=" h-[685px]  bg-cover bg-[#FFFBF2] flex items-center flex-col px-4 md:px-0 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-around  w-full" 
            >
                <div className='w-[325px] md:w-[450px] relative mt-10 h-[274px] bg-[#3f6955] rounded-[30px] '>
                    <div className='h-[509px] flex flex-col items-center justify-center gap-4 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px]  rounded-[30px] ' >
                        <img className='md:h-[298.72px] h-[173.27px] w-[286.78px] md:w-[473.17px]' src={img2} alt="" />

                    </div>
                </div>
                <div className='flex flex-col gap-3 md:ps-[36px] lg:ps-0'>
                    <div className='flex gap-3 items-center'>
                        <img className='h-5 w-5' src={bg} alt="" />

                        <h1 className='text-[#4CAF84] text-[22px] fw-semibold font-fredoka'> User-Friendly Design:</h1>
                    </div>
                    <p
                        className="font-poppins text-[16px] text-[#5E5E5E] fw-semibold   md:w-[550px] ps-8"
                    >With its intuitive user interface, the ChildEra app offers a user- <br />friendly design that simplifies navigation and operation,<br /> enhancing the user experience for educators and administrators.</p>
                </div>

            </div>

            {/* Overseeing Your Program */}
            <div  className=" h-[685px] bg-[#EFFFF7] bg-cover flex items-center flex-col px-4 md:px-0 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-around  w-full" 
            >
                <div className='flex flex-col gap-3 md:ps-[36px] lg:ps-0'>
                    <div className='flex gap-3 items-center'>
                        <img className='h-5 w-5' src={bg} alt="" />

                        <h1 className='text-[#4CAF84] text-[22px] fw-semibold font-fredoka'> Overseeing Your Program</h1>
                    </div>
                    <p
                        className="font-poppins text-[16px] text-[#5E5E5E] fw-semibold  md:w-[550px] ps-8"
                    >This ultra-advanced tool allows program administrators to <br />oversee their programs comprehensively, providing tools for <br /> managing resources, scheduling activities, and tracking progress <br /> effectively.</p>
                </div>
                <div className='w-[304.26px]   md:w-[510.56px] md:h-[263.52px] relative mt-10 h-[158.15px] bg-[#de6767] rounded-[30px] '>
                    <div className='h-[509px] flex flex-col items-center justify-center gap-4 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px]  rounded-[30px] ' >
                        <img className='md:h-[298.72px] h-[173.27px] w-[286.78px] md:w-[473.17px]' src={img3} alt="" />

                    </div>
                </div>
            </div>


            {/* Easy Operation: */}
            <div
              className=" h-[685px] bg-cover bg-[#FFF6F6] flex items-center flex-col px-4 md:px-0 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-around  w-full" 
            >
                <div className='w-[304.26px]   md:w-[510.56px] md:h-[263.52px] relative mt-10 h-[158.15px] bg-[#3f6955] rounded-[30px] '>
                    <div className='h-[509px] flex flex-col items-center justify-center gap-4 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px]  rounded-[30px] ' >
                        <img className='md:h-[298.72px] h-[173.27px] w-[286.78px] md:w-[473.17px]' src={img4} alt="" />

                    </div>
                </div>
                <div className='flex flex-col gap-3 md:ps-[36px] lg:ps-0'>
                    <div className='flex gap-3 items-center'>
                        <img className='h-5 w-5' src={bg} alt="" />

                        <h1 className='text-[#4CAF84] text-[22px] fw-semibold font-fredoka'> Easy Operation:</h1>
                    </div>
                    <p
                        className="font-poppins text-[16px] text-[#5E5E5E] fw-semibold  md:w-[550px] ps-8"
                    >ChildEra ensures ease of operation with its straightforward <br /> functionality, allowing educators and administrators to manage <br /> programs effortlessly, saving time and enhancing productivity.</p>
                </div>

            </div>
        </div>
    )
}

export default Activities