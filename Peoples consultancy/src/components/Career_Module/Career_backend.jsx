/* eslint-disable no-irregular-whitespace */

import { useState } from "react"
import ApplicationForm from "./ApplicationForm"
const Career_backend = () => {
  const [showMyModal,setShowMyModal]= useState(false)
  const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="lg:px-20 lg:pb-20 pb-10">
    <div className="lg:w-[900px] lg:h-[1050px] md:w-[700px] md:h-[950px] w-[370px] h-[1150px] border shadow-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-4 py-4 mx-auto">
      <div className="text-center lg:mb-0 mb-10">
        <p className="font-redhat font-bold text-[#111214] lg:text-3xl text-xl">Back-end Developer</p>
      </div>
      <div className="text-end mb-16 lg:block hidden">
        <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg">Apply Now</button>
      </div>
      <div className="pb-8">
        <p className="font-poppins font-semibold text-[#414143]">Job description :</p>
        <p className="font-poppins font-normal text-[#878889]">- Java, Node JS, Python. Frameworks (Spring Boot), Mongo DB, Cassandra, REST API, Redis, GCP, Kubernets or any other cloud experience, Nginx.</p>
        <p className="font-poppins font-normal text-[#878889]">- Minimum 5 to 8 years exp in back end development.</p>
        <p className="font-poppins font-normal text-[#878889]">- Build conversational platform to support multiple protocols between client and server.</p>
        <p className="font-poppins font-normal text-[#878889]">- Create session management, context awareness and orchestrating services based on customers shopping intents.</p>
        <p className="font-poppins font-normal text-[#878889]">- Must have skills Java, Node JS, Python. Frameworks (Spring Boot), Mongo DB, Cassandra, REST API, Redis, GCP, Kubernets or any other cloud experience, Nginx.</p>
      </div>
      <div className="pb-10">
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role:</p>
        <p className="font-poppins font-normal text-[#878889]">Software Development - Other</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Industry Type:</p>
        <p className="font-poppins font-normal text-[#878889]">IT Services & Consulting</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Department:</p>
        <p className="font-poppins font-normal text-[#878889]">Engineering - Software & QA</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Employment Type:</p>
        <p className="font-poppins font-normal text-[#878889]">Full Time, Permanent</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-poppins font-semibold text-[#414143]">Role Category:</p>
        <p className="font-poppins font-normal text-[#878889]"> Software Development
</p>
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
        <div className="flex lg:gap-x-4 gap-x-2 md:gap-y-4 gap-y-5 pb-5 flex-wrap">
        <div className="lg:w-[130px] lg:h-[36px] md:h-[33px] w-[115px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2  py-2 rounded-lg">Spring boot</p>
        </div>
        <div className="lg:w-[100px] lg:h-[36px] md:h-[33px] w-[90px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Backend</p>
        </div>
        <div className="lg:w-[75px] lg:h-[36px] md:h-[33px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Nginx</p>
        </div>
        <div className="w-[120px] lg:h-[36px] md:h-[33px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Cassandra</p>
        </div>
        <div className="w-[65px] lg:h-[36px] md:h-[33px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] px-4 py-2 rounded-lg">GCP</p>
        </div>
        <div className="w-[75px] lg:h-[36px] md:h-[33px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Cloud</p>
        </div>
        <div className="w-[115px] lg:h-[36px] md:h-[33px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Javascript</p>
        </div>
        <div className="w-[85px] lg:h-[36px] md:h-[33px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Python</p>
        </div>
        <div className="w-[140px] lg:h-[36px] md:h-[33px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Management</p>
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

export default Career_backend
