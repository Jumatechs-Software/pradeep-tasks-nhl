import { useState } from "react"
const ApplicationForm = ({visible, onClose}) => {
  if(!visible) return null

  const handleOnClose = (e) => {
    if(e.target.id === "container") onClose();
  };
  return (
    <div>
    <div id="container" onClick={handleOnClose} className="bg-[#0000004D] inset-0 fixed ">
      <div className="bg-white lg:w-[900px] md:w-[660px] w-[310px] md:h-[450px] h-[524px] mx-auto flex flex-col items-center justify-center relative md:top-[100px] top-[80px] ">
      <p className="font-redhat font-bold text-3xl text-[#111214] text-center md:pb-12 pb-4">Application form</p>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 pb-4">
        <div>
        <p className="font-poppins font-medium text-[#111214]">First name</p>
        <input type="text" name="" id="" placeholder="Enter your first name" className="lg:w-[380px] w-[278px] lg:h-[46px] md:h-[43px] h-[40px] bg-[#F6F6F6] border-[#DEDEDE] px-2 rounded-lg"/>
        </div>
        <div>
        <p className="font-poppins font-medium text-[#111214]">Last name</p>
        <input type="text" name="" id="" placeholder="Enter your last name" className="lg:w-[380px] w-[278px] lg:h-[46px] md:h-[43px] h-[40px] bg-[#F6F6F6] border-[#DEDEDE] px-2 rounded-lg"/>
        </div>
        <div>
        <p className="font-poppins font-medium text-[#111214]">Email</p>
        <input type="text" name="" id="" placeholder="Example@gmail.com" className="lg:w-[380px] w-[278px] lg:h-[46px] md:h-[43px] h-[40px] bg-[#F6F6F6] border-[#DEDEDE] px-2 rounded-lg"/>
        </div>
        <div>
        <p className="font-poppins font-medium text-[#111214] ">Phone</p>
        <input type="text" name="" id="" placeholder="+91" className="lg:w-[380px] w-[278px] lg:h-[46px] md:h-[43px] h-[40px] bg-[#F6F6F6] border-[#DEDEDE] px-2 rounded-lg"/>
        </div>
        <div className="relative lg:left-48 md:left-28">
        <p className="font-poppins font-medium text-[#111214] ">Upload Resume</p>
        <input type="text" name="" id="" placeholder="Format: .pdf .doc .docx .jpg within ( 2MB )" className="lg:w-[676px] md:w-[450px] w-[300px] h-[46px] bg-[#F6F6F6] border-[#DEDEDE] px-2 rounded-lg"/>
      </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <button className="font-poppins font-medium bg-[#111214] text-white px-2 py-2 rounded-lg">Upload image</button>
        </div>
        <p>or drop a file</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ApplicationForm
