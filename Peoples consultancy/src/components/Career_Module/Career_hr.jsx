/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import ApplicationForm from "./ApplicationForm"

const Career_hr = () => {

  const [showMyModal,setShowMyModal]= useState(false)
  const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="lg:px-20 lg:pb-20 pb-10">
    <div className="lg:w-[900px] lg:h-[880px] md:w-[700px] md:h-[950px] w-[370px] h-[1200px] border shadow-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-5 py-4 mx-auto">
      <div className="text-center lg:mb-0 mb-10">
        <p className="font-redhat font-bold text-[#111214] lg:text-3xl text-xl">Human Resource</p>
      </div>
      <div className="text-end mb-16 lg:block hidden">
        <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg" >Apply Now</button>
      </div>
      <div className="pb-8">
        <p className="font-poppins font-semibold text-[#414143]">Job description :</p>
        <p className="font-poppins font-normal text-[#878889]">- 0-2 years of experience in IT / Non IT recruitment function</p>
        <p className="font-poppins font-normal text-[#878889]">- Excellent communication, client service and negotiation skills</p>
        <p className="font-poppins font-normal text-[#878889]">- Strong attention to detail.</p>
        <p className="font-poppins font-normal text-[#878889]">- High level of interpersonal skills to handle sensitive and confidential information</p>
        <p className="font-poppins font-normal text-[#878889]">- Ability to manage multiple priorities</p>
        <p className="font-poppins font-normal text-[#878889]">- Passion for recruitment is a must</p>
      </div>
      <div className="pb-10">
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role:</p>
        <p className="font-poppins font-normal text-[#878889]">Non IT Recruiter</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Industry Type:</p>
        <p className="font-poppins font-normal text-[#878889]">Recruitment / Staffing</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Department:</p>
        <p className="font-poppins font-normal text-[#878889]">Human Resources</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Employment Type:</p>
        <p className="font-poppins font-normal text-[#878889]">Full Time, Permanent</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role Category:</p>
        <p className="font-poppins font-normal text-[#878889]">Recruitment & Talent Acquisition</p>
      </div>
      </div>
      
      <div className="pb-10">
        <div>
          <p className="font-poppins font-semibold text-[#414143]">Education:</p>
        </div>
        <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">UG:</p>
        <p className="font-poppins font-normal text-[#878889]">Any Graduate</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">PG:</p>
        <p className="font-poppins font-normal text-[#878889]">Any Postgraduate</p>
      </div>
      </div>
      <div className="pb-20">
        <div className="lg:pb-5 pb-2">
          <span className="font-poppins font-semibold text-[#414143]">Key Skills:</span>
        </div>
        <div className="flex md:gap-x-4 gap-x-2 md:gap-y-4 gap-y-5 pb-5 flex-wrap">
        <div className="lg:w-[130px] lg:h-[36px] md:w-[120px] md:h-[33px] w-[115px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2  py-2 rounded-lg">Interviewing</p>
        </div>
        <div className="lg:w-[110px] lg:h-[36px] md:w-[100px] md:h-[33px] w-[100px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Screening</p>
        </div>
        <div className="lg:w-[120px] lg:h-[36px] md:w-[110px] md:h-[33px] w-[110px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Orientation</p>
        </div>
        <div className="lg:w-[150px] lg:h-[36px] md:h-[33px] w-[130px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Exit interviews</p>
        </div>
        <div className="lg:w-[130px] lg:h-[36px] md:w-[120px] md:h-[33px] w-[120px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Job posting</p>
        </div>
        <div className="lg:w-[100px] lg:h-[36px] md:w-[90px] md:h-[33px] w-[90px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Staffing</p>
        </div>
        <div className="lg:w-[130px] lg:h-[36px] md:w-[125px] md:h-[33px] w-[125px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Recruitment</p>
        </div>
        <div className="lg:w-[90px] lg:h-[36px] md:h-[33px] w-[80px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Payroll</p>
        </div>
        <div className="lg:w-[190px] lg:h-[36px] md:w-[180px] md:h-[33px] w-[180px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Screening resumes</p>
        </div>
        <div className="lg:w-[130px] lg:h-[36px] md:w-[125px] md:h-[33px] w-[120px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Onboarding</p>
        </div>
        <div className="lg:w-[150px] lg:h-[36px] md:h-[33px] w-[145px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Compensation</p>
        </div>
        <div className="lg:w-[140px] lg:h-[36px] md:h-[33px] w-[125px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">HR functions</p>
        </div>
        <div className="lg:w-[80px] lg:h-[36px] md:h-[33px] w-[70px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Hiring</p>
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

export default Career_hr
