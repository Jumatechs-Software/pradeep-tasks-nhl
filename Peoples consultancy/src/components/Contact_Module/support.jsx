import { useEffect } from "react"
import women from "../../assets/contact-img.png"

const support = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="pt-10">
      <div className="text-center mb-4">
        <p className="font-redhat font-medium text-[#5A67A7] pb-4">CONTACT</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl text-2xl pb-8">Contact Us for Support</p>
        <p className="font-poppins font-normal text-[#12141D99] pb-4 lg:w-[483px] lg:h-[48px] mx-auto text-center lg:px-0 px-4">Get in touch for tailored support! We're here to help. Reach out and let's find solutions.</p>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 md:px-4 place-content-center place-items-center lg:px-[24%] gap-y-8">
      <div>
      <label htmlFor="" className="font-redhat font-medium text-[#303030]">Your Name</label><br />
      <input type="text" name="" id="" placeholder="Enter your name" className="border-black border w-80 px-2 py-2 rounded mt-2"/>
      </div>
      <div>
      <label htmlFor="" className="font-redhat font-medium text-[#303030]">Your Email</label><br />
      <input type="email" name="" id="" placeholder="Enter your email" className="border-black border w-80 px-2 py-2 rounded mt-2"/>
      </div>
      <div>
      <label htmlFor="" className="font-redhat font-medium text-[#303030]">Your Mobile Number</label><br />
      <input type="number" name="" id="" placeholder="US +1(555) 000-0000" className="border-black border w-80 px-2 py-2 rounded mt-2"/>
      </div>
      <div>
      <label htmlFor="" className="font-redhat font-medium text-[#303030]">Message</label><br />
      <input type="text" name="" id="" placeholder="Text here" className="border-black border w-80 px-2 py-2 rounded mt-2"/>
      </div>
      </div>

      <div className="text-center mt-6 mb-10">
        <button className="bg-black text-white px-4 py-2 rounded-lg font-poppins font-normal">SEND REQUEST</button>
      </div>

      <div className="flex justify-center items-center lg:flex-nowrap flex-wrap">
        <div className="w-[653px] h-[136px] lg:text-start text-center lg:px-0 px-6">
          <p className="font-redhat font-bold lg:text-3xl text-xl lg:pb-2 pb-4">Supporting Your Success Every Step of the Way!</p>
          <p className="font-poppins font-normal text-[#303030]">support@peoples-consulting.com</p>
        </div>
        <div>
          <img src={women} alt="" className="lg:w-[372px] lg:h-[368px] w-[315px] h-[312px]"/>
        </div>
      </div>

    </div>
  )
}

export default support
