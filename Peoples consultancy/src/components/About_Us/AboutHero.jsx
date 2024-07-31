import { useEffect } from "react"
import about1 from "../../assets/about1.png"
import about2 from "../../assets/about2.png"
import about3 from "../../assets/about3.png"
import about4 from "../../assets/about4.png"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="pt-10">
      <div className="text-center lg:mb-8 md:mb-16 mb-24  lg:px-0 px-4 md:px-10">
        <p className="font-redhat text-[#5A67A7] font-medium pb-2">ABOUT US</p>
        <p className="font-redhat text-[#111214] font-bold lg:text-5xl text-2xl pb-6"> Driving Digital Success Since Day One</p>
        <p className="font-poppins text-[#999999] font-normal lg:w-[803px] h-[47px] mx-auto"> we're dedicated to helping businesses succeed in the digital world. With a focus on innovation and creativity, we offer a range of services designed to elevate your brand and drive results. </p>
      </div>
      <div className="flex justify-center items-end lg:gap-10 md:gap-4 gap-2 lg:mb-20 mb-8 lg:px-0 px-2">
        <div>
          <img src={about1} alt="" className="lg:w-[249px] lg:h-[225px] md:w-[154px] md:h-[139px]  w-[90px] h-[80px]"/>
        </div>
        <div>
          <img src={about2} alt="" className="lg:w-[253px] lg:h-[297px] md:w[156px] md:h-[184px] w-[90px] h-[107px]"/>
        </div>
        <div>
          <img src={about3} alt="" className="lg:w-[249px] lg:h-[225px] md:w-[154px] md:h-[139px] w-[90px] h-[80px]"/>
        </div>
        <div>
          <img src={about4} alt="" className="lg:w-[253px] lg:h-[297px] md:w[156px] md:h-[184px] w-[90px] h-[107px]"/>
        </div>
      </div>
      <div className="text-center lg:px-16 px-6 lg:pb-40 pb-10 ">
        <p className="font-redhat font-medium text-[#5A67A7] pb-2">OUR STORY</p>
        <p className="font-poppins font-normal text-[#99999D] lg:w-[1237px] mx-auto">At People's Consulting, our services are tailored to the specific needs of global entrepreneurs and businesses, offering comprehensive IT solutions.
        From planning and designing to integration, testing, and maintenance, crafting software solutions to precisely match clients’ needs has been our mission since 2011. People's Consulting employs analytics and agile methodology to ensure top-notch IT services. With a focus on small businesses and startups, we deliver high-quality solutions. Reinvent your business with our bespoke software development services: We start by thoroughly understanding your business requirements and goals. We Build you an MVP so that you can evaluate the potential of your business idea. We provide comprehensive documentation to assist with understanding and troubleshooting the software.</p>
      </div>
    </div>
  )
}

export default About
