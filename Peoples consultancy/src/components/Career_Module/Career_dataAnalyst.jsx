import { useState } from "react"
import ApplicationForm from "./ApplicationForm"
const Career_dataAnalyst = () => {
  const [showMyModal,setShowMyModal]= useState(false)
  const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="lg:px-20 lg:pb-20 pb-10">
    <div className="lg:w-[900px] md:w-[700px] md:h-[800px] w-[370px] h-[950px] border shadow-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-2 py-4 mx-auto">
      <div className="text-center lg:mb-0 mb-10">
        <p className="font-redhat font-bold text-[#111214] lg:text-3xl text-xl">Data Analytics</p>
      </div>
      <div className="text-end mb-16 lg:block hidden">
        <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg">Apply Now</button>
      </div>
      <div className="pb-8">
        <p className="font-poppins font-semibold text-[#414143]">Job description :</p>
        <p className="font-poppins font-normal text-[#878889]">- Enabling customer-centric experiences and journeys for our customers</p>
        <p className="font-poppins font-normal text-[#878889]">- Driving efficiency and efficacy of loyalty and onboarding automations</p>
        <p className="font-poppins font-normal text-[#878889]">- Building capability and equity of our Owned Media platforms</p>
      </div>
      <div className="pb-10">
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role:</p>
        <p className="font-poppins font-normal text-[#878889]">Data Analyst</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Industry Type:</p>
        <p className="font-poppins font-normal text-[#878889]">IT Services & Consulting</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Department:</p>
        <p className="font-poppins font-normal text-[#878889]">Data Science & Analytics</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Employment Type:</p>
        <p className="font-poppins font-normal text-[#878889]">Full Time, Permanent</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role Category:</p>
        <p className="font-poppins font-normal text-[#878889]">Business Intelligence </p>
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
        <p className="font-poppins font-normal text-[#878889]">Any Postgraduate</p>
      </div>
      </div>
      <div className="pb-20">
        <div className="lg:pb-5 pb-2">
          <span className="font-poppins font-semibold text-[#414143]">Key Skills:</span>
        </div>
        <div className="flex md:gap-x-4 gap-x-2 md:gap-y-4 gap-y-5 pb-5 flex-wrap">
        <div className="lg:w-[160px] lg:h-[36px] md:h-[33px] w-[145px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2  py-2 rounded-lg">Analytical Skills</p>
        </div>
        <div className="lg:w-[105px] lg:h-[36px] md:h-[33px] w-[85px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Big Data</p>
        </div>
        <div className="lg:w-[95px] lg:h-[36px] md:h-[33px] w-[95px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] px-4 py-2 rounded-lg">Hadoop</p>
        </div>
        <div className="lg:w-[115px] lg:h-[36px] md:h-[33px] w-[110px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Postgresql</p>
        </div>
        <div className="lg:w-[160px] lg:h-[36px] md:h-[33px] w-[155px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Bi Development</p>
        </div>
        <div className="lg:w-[100px] lg:h-[36px] md:h-[33px] w-[90px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Node.Js</p>
        </div>
        <div className="lg:w-[60px] lg:h-[36px] md:h-[33px] w-[55px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">SQL</p>
        </div>
        <div className="lg:w-[140px] lg:h-[36px] md:h-[33px] w-[135px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Data Science</p>
        </div>
        <div className="lg:w-[145px] lg:h-[36px] md:h-[33px] w-[135px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Data Analysis</p>
        </div>
        <div className="lg:w-[130px] lg:h-[36px] md:h-[33px] w-[125px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Quantitative</p>
        </div>
        <div className="lg:w-[120px] lg:h-[36px] md:h-[33px] w-[115px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Ab Testing</p>
        </div>
        <div className="lg:w-[50px] lg:h-[36px] md:h-[33px] w-[45px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">ML</p>
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

export default Career_dataAnalyst
