import { useState } from "react"
import ApplicationForm from "./ApplicationForm"

const Career_frontend = () => {

  const [showMyModal,setShowMyModal]= useState(false)
  const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="lg:px-20 lg:pb-20 pb-10">
    <div className="lg:w-[900px] md:w-[700px] md:h-[1200px] w-[370px] h-[1500px] border shadow-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-4 py-4 mx-auto">
      <div className="text-center lg:mb-0 mb-10">
        <p className="font-redhat font-bold text-[#111214] lg:text-3xl text-xl">Front-end Developer</p>
      </div>
      <div className="text-end mb-16 lg:block hidden">
        <button onClick={() => setShowMyModal(true)} className="font-poppins font-normal bg-[#111214] text-[#FCFCFC] px-4 py-2 rounded-lg">Apply Now</button>
      </div>
      <div className="pb-8">
        <p className="font-poppins font-semibold text-[#414143]">Job description :</p>
        <p className="font-poppins font-normal text-[#878889]">- Determining the structure and design of web pages.</p>
        <p className="font-poppins font-normal text-[#878889]">- Ensuring user experience determines design choices.</p>
        <p className="font-poppins font-normal text-[#878889]">- Developing features to enhance the user experience.</p>
        <p className="font-poppins font-normal text-[#878889]">- Striking a balance between functional and aesthetic design.</p>
        <p className="font-poppins font-normal text-[#878889]">- Ensuring web design is optimized for smartphones.</p>
        <p className="font-poppins font-normal text-[#878889]">- Building reusable code for future use.</p>
        <p className="font-poppins font-normal text-[#878889]">- Optimizing web pages for maximum speed and scalability.</p>
        <p className="font-poppins font-normal text-[#878889]">- Utilizing a variety of markup languages to write web pages.</p>
        <p className="font-poppins font-normal text-[#878889]">- Maintaining brand consistency throughout the design.</p>
      </div>
      <div className="pb-10">
        <p className="font-poppins font-semibold text-[#414143]">Front End Developer Requirements:</p>
        <p className="font-poppins font-normal text-[#878889]">- Degree in computer science or related field.</p>
        <p className="font-poppins font-normal text-[#878889]">- Understanding of key design principles.</p>
        <p className="font-poppins font-normal text-[#878889]">- Proficiency in php, CSS, JavaScript, and jQuery.</p>
        <p className="font-poppins font-normal text-[#878889]">- Understanding of server-side CSS.</p>
        <p className="font-poppins font-normal text-[#878889]">- Experience with graphic design applications such as Adobe Illustrator.</p>
        <p className="font-poppins font-normal text-[#878889]">- Experience with responsive and adaptive design.</p>
        <p className="font-poppins font-normal text-[#878889]">- Understanding of SEO principles.</p>
        <p className="font-poppins font-normal text-[#878889]">- Good problem-solving skills.</p>
        <p className="font-poppins font-normal text-[#878889]">- Excellent verbal communication skills.</p>
        <p className="font-poppins font-normal text-[#878889]">- Good interpersonal skills.</p>
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
        <p className="font-poppins font-normal text-[#878889]">Software Development</p>
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
        <div className="flex gap-x-2 md:gap-y-4 gap-y-5 pb-5 flex-wrap">
        <div className="lg:w-[95px] lg:h-[36px] md:h-[33px] w-[85px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">React.js</p>
        </div>
        <div className="lg:w-[120px] lg:h-[36px] md:h-[33px] w-[105px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-2 py-2 rounded-lg">Javascript</p>
        </div>
        <div className="w-[65px] lg:h-[36px] md:h-[33px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] px-4 py-2 rounded-lg">CSS</p>
        </div>
        <div className="lg:w-[115px] lg:h-[36px] md:h-[33px] w-[105px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Developer</p>
        </div>
        <div className="lg:w-[90px] lg:h-[36px] md:h-[33px] w-[80px] h-[30px]">
          <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">JQuery</p>
        </div>
        <div className="lg:w-[110px] lg:h-[36px] md:h-[33px] w-[105px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Front end</p>
        </div>
        <div className="lg:w-[70px] lg:h-[36px] md:h-[33px] w-[65px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Java</p>
        </div>
        <div className="lg:w-[50px] lg:h-[36px] md:h-[33px] w-[45px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">UI</p>
        </div>
        <div className="lg:w-[70px] lg:h-[36px] md:h-[33px] w-[65px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">HTML</p>
        </div>
        <div className="lg:w-[135px] lg:h-[36px] md:h-[33px] w-[130px] h-[30px]">
         <p className="font-poppins font-medium text-[#FCFCFCCC] bg-[#111214] lg:px-4 px-3 py-2 rounded-lg">Tailwind CSS</p>
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

export default Career_frontend
