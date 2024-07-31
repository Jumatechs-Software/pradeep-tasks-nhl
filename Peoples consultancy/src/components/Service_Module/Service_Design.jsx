import webdesign from "../../assets/WebDesign.png"
import mobileapp from "../../assets/MobileApp.png"
import graphicdesign from "../../assets/GraphicDesign.png"
import logos from "../../assets/Logos.png"
import Strategy from "../../assets/Strategy.png"
import illustration from "../../assets/illustration.png"
import CreativePages from "../../assets/CreativePages.png"
import ResponsiveDesign from "../../assets/ResponsiveDesign.png"
import ConceptDesign from "../../assets/ConceptDesign.png"
import uxdesign from "../../assets/uxdesign.png"
import login from "../../assets/login.png"
import repeat from "../../assets/repeat.png"
import principle from "../../assets/principle.png"
import time from "../../assets/time.png"
import { Link } from "react-router-dom"

const Service_Design = () => {
  
  return (
    <div className="lg:pb-20">
      {/* 1st part */}
      <div className="lg:w-[901px] lg:h-[309px] mx-auto text-center lg:px-0 px-6 lg:pb-0 md:pb-20 pb-40">
        <p className="font-montserrat font-normal text-[#5A67A7] pb-4">DESIGN</p>
        <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-xl pb-4">Custom design services</p>
        <p className="font-poppins font-normal text-[#999999] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor </p>
        <div>
          <Link to={"/Contact"}><button className="font-poppins font-normal bg-[#111214] text-white px-4 py-2 rounded-lg">Get Estimate</button></Link>
        </div>
      </div>
      {/* 2nd part */}
      <div className="lg:w-[820px] lg:h-[145px] mx-auto text-center mb-40 md:mb-20 lg:px-0 px-4">
        <p className="font-redhat font-bold text-[#303030] lg:text-2xl text-xl pb-4">Why Design Work Needed?</p>
        <p className="font-poppins font-normal text-[#999999]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 3rd part */}
      <div className="flex lg:justify-between justify-center lg:px-16 lg:flex-nowrap flex-wrap">
        <div className="w-[394px] h-[245px] lg:pb-0 pb-40 lg:text-start text-center">
          <p className="font-montserrat font-normal text-[#5A67A7] pb-2">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-2xl text-xl">Design Services We Deliver</p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-8 lg:gap-y-0 gap-y-6">
          <div className="lg:w-[350px] w-[331px]">
          <div>
            <img src={webdesign} alt="web design" className="lg:w-[350px] w-[331px] lg:h-[208px] md:h-[200px] h-[270px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Web design</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs.</p>
        </div>
        <div className="lg:w-[350px] w-[331px]">
          <div>
            <img src={mobileapp} alt="web design" className="lg:w-[350px] w-[331px] lg:h-[391px] md:h-[320px] h-[270px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Mobile app design</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] relative lg:bottom-[170px] md:bottom-[180px]">
          <div>
            <img src={graphicdesign} alt="web design" className="lg:w-[350px] lg:h-[385px] w-[331px] md:h-[320px] h-[270px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Graphic design</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] lg:h-[344px] lg:pt-20 relative md:top-[40px]">
          <div>
            <img src={logos} alt="web design" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Logos</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] lg:h-[344px] relative lg:bottom-[100px] md:bottom-[150px]">
          <div>
            <img src={Strategy} alt="web design" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Strategy and branding</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] lg:h-[623px] relative lg:bottom-[100px] md:bottom-[150px]">
          <div>
            <img src={illustration} alt="web design" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Illustration</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] lg:h-[623px] relative lg:bottom-[300px] md:bottom-[340px]">
          <div>
            <img src={CreativePages} alt="web design" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Creative landing pages</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] lg:h-[344px] relative lg:bottom-[30px] md:bottom-[130px]">
          <div>
            <img src={ResponsiveDesign} alt="web design" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Responsive design</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs.</p>
        </div>
        <div className="lg:w-[350px] w-[331px] lg:h-[623px] relative lg:bottom-[280px] md:bottom-[300px] md:left-[180px] lg:left-0">
          <div>
            <img src={ConceptDesign} alt="web design" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[200px] mb-2"/>
          </div>
          <p className="font-redhat font-bold text-[#303030] lg:text-xl text-lg pb-2">Concept design services</p>
          <p className="font-poppins font-normal text-[#999999] ">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
          </div>
      </div>
    {/* 4th part */}
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
    {/* 5th part */}
    <div className="lg:mb-0 mb-40">
    <div className="lg:w-[859px] md:w-[581px] md:h-[90px] lg:h-[112px] mx-auto mb-20">
      <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-3xl text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center lg:px-40 gap-y-10">
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={uxdesign} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">UX writing</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, </p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={login} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">User-friendly</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, </p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={repeat} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Consistency</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, </p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={principle} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Basic principles</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, </p>
        </div>
      </div>
    </div>
    </div>
    {/* 6th part */}
      <div className="grid place-content-center lg:mb-0 mb-36">
        <div className="pb-4">
          <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-2xl">Costs and time</p>
        </div>
        <div className="lg:w-[920px] lg:h-[319px] w-[329px] h-[300px] md:w-[710px] md:h-[331px] bg-[#111214] text-white lg:px-16 lg:py-16 px-4 py-10 lg:rounded-none rounded-lg">
          <div className="flex gap-x-2">
          <div>
            <img src={time} alt="" className="lg:w-[80px] lg:h-[80px] w-[43px] h-[38px] md:w-[80px] md:h-[80px]"/>
          </div>
          <div className="lg:w-[471px] lg:h-[86px] w-[316px] h-[99px] lg:mt-6 md:mt-6">
            <p className="font-redhat font-bold text-lg ">Custom design services</p>
            <p className="font-poppins font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante.</p>
          </div>
          <div className="lg:mt-12 lg:ml-32 md:mt-12 md:ml-32 lg:text-start md:text-start text-center">
            <p className="font-redhat font-bold text-lg">2-3 Weeks</p>
          </div>
          </div>
          <div className="text-center lg:mt-16 md:mt-16 mt-24">
            <button className="font-redhat font-bold bg-white text-black px-10 py-2 rounded-lg">$30,000—$50,000+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service_Design
