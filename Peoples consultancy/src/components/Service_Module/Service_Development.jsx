import webapps from "../../assets/webapps.png"
import appdev from "../../assets/appdev.png"
import mobdev from "../../assets/mobdev.png"
import nativeapp from "../../assets/nativeapp.png"
import ecommerceapp from "../../assets/ecommerceapp.png"
import scalablity from "../../assets/scalability.png"
import solutions from "../../assets/solutions.png"
import protection from "../../assets/protection.png"
import teamwork from "../../assets/teamwork.png"
import time from "../../assets/time.png"
import { Link } from "react-router-dom"

const Service_Development = () => {
  return (
    <div className="lg:pb-20">

      <div className="lg:w-[901px] lg:h-[309px] mx-auto text-center lg:px-0 px-6 lg:pb-0 md:pb-20 pb-40">
        <p className="font-montserrat font-normal text-[#5A67A7] pb-4">DEVELOPMENT</p>
        <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-xl pb-4">Custom Software Solutions</p>
        <p className="font-poppins font-normal text-[#999999] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor </p>
        <div>
        <Link to={"/Contact"}><button className="font-poppins font-normal bg-[#111214] text-white px-4 py-2 rounded-lg">Get Estimate</button></Link>        </div>
      </div>

      <div className="lg:w-[820px] lg:h-[145px] mx-auto text-center mb-40 md:mb-20 lg:px-0 px-4">
        <p className="font-redhat font-bold text-[#303030] lg:text-2xl text-xl pb-4">How we create custom software solutions</p>
        <p className="font-poppins font-normal text-[#999999]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="flex lg:justify-between justify-center lg:px-16 lg:flex-nowrap flex-wrap lg:pb-40 lg:mb-0 mb-40">
      <div className="w-[394px] h-[245px] lg:pb-0 pb-40 lg:text-start text-center">
          <p className="font-montserrat font-normal text-[#5A67A7] pb-2">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-2xl text-xl">Development Services We Deliver</p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-8 lg:gap-y-0 gap-y-6 lg:place-items-start place-items-center">
        <div className="lg:w-[350px] lg:h-[344px] w-[331px] h-[387px] md:h-[321px] relative md:bottom-[90px] lg:bottom-0">
          <div>
          <img src={webapps} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Web Development</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
        </div>
        <div className="lg:w-[350px] lg:h-[623px] w-[331px] h-[450px] md:h-[504px]">
          <div>
            <img src={appdev} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">App Development</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
        <div className="lg:w-[350px] lg:h-[623px] w-[331px] h-[450px] md:h-[504px] relative lg:bottom-[180px] md:bottom-[180px] lg:my-0 my-10">
          <div>
            <img src={mobdev} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Cross-platform Mobile Development</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
        <div className="lg:w-[350px] lg:h-[344px] w-[331px] h-[387px] md:h-[321px] lg:mt-20 relative md:bottom-[50px] lg:bottom-0">
          <div>
        <img src={nativeapp} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Native Mobile App Development</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
        </div>
        <div className="lg:w-[350px] lg:h-[476px] w-[331px] h-[387px] relative lg:bottom-[160px] md:bottom-[160px] md:left-[50%] lg:left-0">
          <div>
            <img src={ecommerceapp} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
           <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">E-commerce Development</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
      </div>
      </div>

      <div className="flex justify-center relative lg:bottom-[200px] md:bottom-[250px] lg:gap-x-16 flex-wrap lg:gap-y-0 gap-y-6 lg:pt-0 pt-28 lg:mb-0 md:mb-0 mb-40">
      <div className="w-[100px] h-[70px] text-center">
        <p className="font-redhat font-bold text-[#303030] lg:text-4xl text-2xl">25+</p>
        <p className="font-redhat font-bold text-[#30303099]">Developers</p>
      </div>
      <div className="w-[177px] h-[70px] text-center lg:pl-0 md:pl-0 pl-10">
        <p className="font-redhat font-bold text-[#303030] lg:text-4xl text-2xl">2500+</p>
        <p className="font-redhat font-bold text-[#30303099]">Customer</p>
      </div>
      <div className="w-[149px] h-[70px] text-center">
        <p className="font-redhat font-bold text-[#303030] lg:text-4xl text-2xl">10+</p>
        <p className="font-redhat font-bold text-[#30303099]">Years of experience</p>
      </div>
      <div className="w-[177px] h-[70px] text-center">
        <p className="font-redhat font-bold text-[#303030] lg:text-4xl text-2xl">2500+</p>
        <p className="font-redhat font-bold text-[#30303099]">Projects</p>
      </div>
    </div> 
    <div className="lg:mb-0 mb-40">
    <div className="lg:w-[879px] md:w-[581px] md:h-[90px] lg:h-[112px] mx-auto">
      <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-3xl text-xl text-center">Future-Forward Business Solutions</p>
    </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center lg:px-40 gap-y-10">
      <div className="flex lg:gap-x-4 gap-x-2 relative lg:mb-6 lg:w-[490px] lg:h-[136px]">
        <div>
          <img src={scalablity} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[136px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Scalability</p>
          <p className="font-poppins font-normal text-[#30303099]">Custom software can be easily scaled up or down to accommodate business growth or changes in requirements, providing flexibility and adaptability.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[484px] lg:h-[136px] lg:mb-6">
        <div>
          <img src={solutions} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[384px] lg:h-[136px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Tailored Solutions</p>
          <p className="font-poppins font-normal text-[#30303099]">Custom software is designed to meet the specific needs and requirements of the business, ensuring it aligns perfectly with existing processes and workflows.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] lg:h-[136px]">
        <div>
          <img src={protection} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[136px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Improved Data Security</p>
          <p className="font-poppins font-normal text-[#30303099]">Custom software can be built with robust security features to protect sensitive business data, reducing the risk of data breaches and cyber attacks.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] lg:h-[112px]">
        <div>
          <img src={teamwork} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[112px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Enhanced Customer Experience</p>
          <p className="font-poppins font-normal text-[#30303099]">Custom software can be designed to improve customer interactions and experiences, leading to higher customer satisfaction and loyalty.</p>
        </div>
      </div>
    </div>
    </div>
    <div className="grid place-content-center lg:mb-0 mb-36 ">
        <div className="pb-4">
          <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-2xl">Costs and time</p>
        </div>
        <div className="lg:w-[920px] lg:h-[319px] w-[329px] h-[300px] md:w-[710px] md:h-[331px] bg-[#111214] text-white lg:px-16 lg:py-16 px-4 py-10 rounded-lg">
          <div className="flex gap-x-2">
          <div>
            <img src={time} alt="" className="lg:w-[80px] lg:h-[80px] w-[43px] h-[38px] md:w-[80px] md:h-[80px]"/>
          </div>
          <div className="lg:w-[471px] lg:h-[86px] w-[316px] h-[99px] lg:mt-6 md:mt-6">
            <p className="font-redhat font-bold text-lg ">Development works</p>
            <p className="font-poppins font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante.</p>
          </div>
          <div className="lg:mt-12 lg:ml-32 md:mt-12 md:ml-32 lg:text-start md:text-start text-center">
            <p className="font-redhat font-bold text-lg">2-3 Weeks</p>
          </div>
          </div>
          <div className="text-center lg:mt-16 md:mt-16 mt-20">
            <button className="font-redhat font-bold bg-white text-black px-10 py-2 rounded-lg">$30,000—$50,000+</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Service_Development
