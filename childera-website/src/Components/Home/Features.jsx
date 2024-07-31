import React from 'react'
import img1 from "../../assets/features-1.png"
import img2 from "../../assets/features-2.png"
import img3 from "../../assets/features-3.png"
import bg from "../../assets/Featuresbg.png"
export const Features = () => {
    return (
        <div>
            <h1 className='text-[22px] md:text-[28px] lg:text-[42px]  font-fredoka pt-10 pb-10  text-[#546E62] text-center'>The Key Features of  <span className='text-[#F3CA5F]'>Our ChildEra <br className='hidden lg:block' /> Application</span></h1>
            <div className='flex flex-col  flex-wrap md:flex-row items-center justify-center gap-20 '>
                <div className='w-[325px] md:w-[350px] relative mt-10 h-[274px] bg-[#3F6955] rounded-[30px] '>
                    <div className='h-[369px] flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[295px] bg-[#F3CA5F] rounded-[30px] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
                        <img src={img1} className='size-[75px]' alt="" />
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-poppins text-center font-semibold text-[22px] text-white'>Confidentiality of Personal Data</h1>
                            <p className='text-center font-poppins text-white  mx-auto w-[242px]'>ChildEra management software ensures the utmost confidentiality of personal data, safeguarding sensitive information with advanced security measures.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[325px] md:w-[350px] relative mt-10 h-[274px] bg-[#3F6955] rounded-[30px] '>
                    <div className='h-[369px] flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[295px] bg-[#DE6868] rounded-[30px] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
                        <img src={img2} className='size-[75px]' alt="" />
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-poppins text-center font-semibold text-[22px] text-white'>Safe and Secure Environment</h1>
                            <p className='text-center font-poppins text-white  mx-auto w-[242px]'>With ChildEra, childcare centers create a safe environment for children, utilizing innovative features to monitor and manage safety effectively.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[325px] md:w-[350px] relative mt-10 h-[274px] bg-[#3F6955] rounded-[30px] '>
                    <div className='h-[369px] flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[295px] bg-[#4CAF84] rounded-[30px] ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
                        <img src={img3} className='size-[75px]' alt="" />
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-poppins text-center font-semibold text-[22px] px-1 text-white'>Comprehensive Care and Development</h1>
                            <p className='text-center font-poppins text-white  mx-auto w-[242px]'>ChildEra app supports care and development, providing tools to track progress, communicate with parents, and promote holistic child development.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}