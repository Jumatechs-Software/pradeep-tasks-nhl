/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import ApplicationForm from "./ApplicationForm"

const Career_uxui = () => {

  const [showMyModal,setShowMyModal]= useState(false)
  const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="lg:px-20 lg:pb-20 pb-10">
      <div className="lg:w-[900px] lg:h-[1137px] md:w-[700px] md:h-[1250px] w-[360px] h-[1600px] border shadow-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-3 py-4 mx-auto">
        
        <div className="text-center lg:mb-0 mb-10">
          <p className="font-redhat font-bold text-[#111214] lg:text-3xl text-xl">UI/UX Designer</p>
        </div>
        <div className="text-end mb-16 lg:block hidden">
          <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg" >Apply Now</button>
        </div>
       
        <div className="pb-8">
          <p className="font-poppins font-semibold text-[#414143]">Job description :</p>
          <p className="font-poppins font-normal text-[#878889]">Strong proficiency in Figma- Familiarity with design tools like Sketch, Photoshop, and Adobe XD (added advantage).</p>
          <p className="font-poppins font-normal text-[#878889]">- The capability to manage multiple design projects and work independently.</p>
          <p className="font-poppins font-normal text-[#878889]">- Collaborate with cross-functional teams to gather and understand user requirements.</p>
          <p className="font-poppins font-normal text-[#878889]">- Create wireframes, prototypes, and user interface designs for web and mobile applications.</p>
          <p className="font-poppins font-normal text-[#878889]">- Ensure the alignment of design concepts with user needs and project goals.</p>
        </div>
        <div className="pb-10">
          <p className="font-poppins font-semibold text-[#414143]">Qualification :</p>
          <p className="font-poppins font-normal text-[#878889]">- Bachelor's degree in any related field (e.g., Graphic Design, Interaction Design, Computer Science) or equivalent work experience.</p>
          <p className="font-poppins font-normal text-[#878889]">- Proven Experience as a UI/UX Developer with a strong portfolio showcasing your work.- Proficiency in design and prototyping tools such as Figma, Adobe XD, Sketch or similar.</p>
          <p className="font-poppins font-normal text-[#878889]">- Familiarity with user research techniques and user testing.- Solid understanding of user-centered design principles.- Knowledge of HTML, CSS, and JavaScript for implementation UI Designs.</p>
          <p className="font-poppins font-normal text-[#878889]">- Experience with front-end development frameworks and libraries (e.g., React, Angular)</p>
           <p className="font-poppins font-normal text-[#878889]">- Excellent communication and teamwork skills.</p>
        </div>
        <div className="pb-10">
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">Role:</p>
          <p className="font-poppins font-normal text-[#878889]">UI / UX Designer</p>
        </div>
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">Industry Type:</p>
          <p className="font-poppins font-normal text-[#878889]">IT Services & Consulting</p>
        </div>
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">Department:</p>
          <p className="font-poppins font-normal text-[#878889]">UX, Design & Architecture</p>
        </div>
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">Employment Type:</p>
          <p className="font-poppins font-normal text-[#878889]">Full Time, Permanent</p>
        </div>
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">Role Category:</p>
          <p className="font-poppins font-normal text-[#878889]">UI / UX</p>
        </div>
        </div>
        
        <div className="pb-10">
          <div>
            <p className="font-poppins font-semibold text-[#414143]">Education:</p>
          </div>
          <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">UG:</p>
          <p className="font-poppins font-normal text-[#878889]">B.Tech/B.E. in Computers, BCA in Computers, B.Des. in Graphic Design, B.Sc in Computers</p>
        </div>
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">PG:</p>
          <p className="font-poppins font-normal text-[#878889]">Any Postgraduate</p>
        </div>
        <div className="flex gap-x-1">
          <p className="font-poppins font-semibold text-[#414143]">Doctorate:</p>
          <p className="font-poppins font-normal text-[#878889]">Doctorate Not Required</p>
        </div>
        </div>
        <div className="pb-20">
          <div className="lg:pb-5 pb-2">
            <span className="font-poppins font-semibold text-[#414143]">Key Skills:</span>
          </div>
          <div className="flex gap-x-4 md:gap-y-0 gap-y-5 pb-5 flex-wrap">
          <div className="lg:w-[109px] lg:h-[36px] md:w-[99px] md:h-[33px] w-[100px] h-[30px]">
            <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2  py-2 rounded-lg">UX Figma</p>
          </div>
          <div className="lg:w-[109px] lg:h-[36px] md:w-[102px] md:h-[33px] w-[100px] h-[30px]">
            <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-3 px-2 py-2 rounded-lg">Adobe XD</p>
          </div>
          <div className="lg:w-[87px] lg:h-[36px] md:w-[80px] md:h-[33px] w-[90px] h-[30px]">
            <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] px-4 py-2 rounded-lg">Sketch</p>
          </div>
          <div className="lg:w-[126px] lg:h-[36px] md:w-[114px] md:h-[33px] w-[120px] h-[30px]">
            <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Prototyping</p>
          </div>
          <div className="lg:w-[119px] lg:h-[36px] md:w-[108px] md:h-[33px] w-[120px] h-[30px]">
            <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Photoshop</p>
          </div>
          </div>
          <div className="lg:w-[182px] lg:h-[36px] md:w-[170px] md:h-[33px] w-[175px] h-[30px]">
           <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Interactive  Design</p>
          </div>
          <div className="text-center lg:hidden lg:mt-0 mt-10">
          <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg">Apply Now</button>
        </div>
        </div>
        <ApplicationForm onClose={handleOnClose} visible={showMyModal}/>
      </div>
    </div>
  )
}

export default Career_uxui
