/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import ApplicationForm from "./ApplicationForm"

const Career_graphicdesigner = () => {
  const [showMyModal,setShowMyModal]= useState(false)
  const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="lg:px-20 lg:pb-20 pb-10">
    <div className="lg:w-[900px] lg:h-[1050px] md:w-[700px] md:h-[1100px] w-[370px] h-[1400px] border shadow-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-5 py-4 mx-auto">
      <div className="text-center lg:mb-0 mb-10">
        <p className="font-redhat font-bold text-[#111214] lg:text-3xl text-xl">Graphic Designer</p>
      </div>
      <div className="text-end mb-16 lg:block hidden">
        <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg">Apply Now</button>
      </div>
      <div className="pb-8">
        <p className="font-poppins font-semibold text-[#414143]">Job description :</p>
        <p className="font-poppins font-normal text-[#878889]">- Regular exposure to business stakeholders and executive management, as well as the authority and scope to apply your expertise to many interesting technical problems.</p>
        <p className="font-poppins font-normal text-[#878889]">- Candidate must have a strong understanding of UI, cross-browser compatibility, general web functions and standards.</p>
        <p className="font-poppins font-normal text-[#878889]">- The position requires constant communication with colleagues.</p>
        <p className="font-poppins font-normal text-[#878889]">- Experience in planning and delivering software platforms used across multiple products and organizational units.</p>
        <p className="font-poppins font-normal text-[#878889]">- Deep expertise and hands on experience with Web Applications and programming languages such as HTML, CSS, JavaScript, JQuery and API's.</p>
        <p className="font-poppins font-normal text-[#878889]">- Deep functional knowledge or hands on design experience with Web Services (REST, SOAP, etc) is needed to be successful in this position.</p>
        <p className="font-poppins font-normal text-[#878889]">- Strong grasp of security principles and how they apply to E-Commerce applications.</p>
      </div>
      <div className="pb-10">
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role:</p>
        <p className="font-poppins font-normal text-[#878889]">Graphic Designer</p>
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
        <p className="font-poppins font-normal text-[#878889]">Other Design</p>
      </div>
      </div>
      
      <div className="pb-10">
        <div>
          <p className="font-poppins font-semibold text-[#414143]">Education:</p>
        </div>
        <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">UG:</p>
        <p className="font-poppins font-normal text-[#878889]">Any Postgraduate</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">PG:</p>
        <p className="font-poppins font-normal text-[#878889]">MBA/PGDM in HR/Industrial Relations</p>
      </div>
      </div>
      <div className="pb-20">
        <div className="lg:pb-5 pb-2">
          <span className="font-poppins font-semibold text-[#414143]">Key Skills:</span>
        </div>
        <div className="flex lg:gap-x-4 gap-x-2 md:gap-y-4 gap-y-5 pb-5 flex-wrap">
        <div className="lg:w-[160px] lg:h-[36px] md:h-[33px] w-[145px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2  py-2 rounded-lg">Analytical skills</p>
        </div>
        <div className="lg:w-[90px] lg:h-[36px] md:h-[33px] w-[80px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Printing</p>
        </div>
        <div className="lg:w-[65px] lg:h-[36px] md:h-[33px] w-[60px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">CSS</p>
        </div>
        <div className="lg:w-[110px] lg:h-[36px] md:h-[33px] w-[100px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Illustrator</p>
        </div>
        <div className="lg:w-[185px] lg:h-[36px] md:h-[33px] w-[185px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] px-4 py-2 rounded-lg">Graphic designing</p>
        </div>
        <div className="lg:w-[170px] lg:h-[36px] md:h-[33px] w-[160px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Software design</p>
        </div>
        <div className="lg:w-[130px] lg:h-[36px] md:h-[33px] w-[125px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Logo design</p>
        </div>
        <div className="lg:w-[180px] lg:h-[36px] md:h-[33px] w-[170px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Web technologies</p>
        </div>
        <div className="lg:w-[115px] lg:h-[36px] md:h-[33px] w-[110px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Photoshop</p>
        </div>
        <div className="lg:w-[180px] lg:h-[36px] md:h-[33px] w-[170px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Creative direction</p>
        </div>
        
        <div className="lg:w-[70px] lg:h-[36px] md:h-[33px] w-[65px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">HTML</p>
        </div>
        
        
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

export default Career_graphicdesigner
