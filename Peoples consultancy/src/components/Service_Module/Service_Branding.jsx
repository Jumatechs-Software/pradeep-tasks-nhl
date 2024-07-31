/* eslint-disable react/no-unescaped-entities */
import dependable from "../../assets/dependable.png"
import performance from "../../assets/performance.png"
import brandrecognition from "../../assets/brandrecognition.png"
import brandstartegy from "../../assets/brandstartegy.png"
import logodesign from "../../assets/logodesign.png"
import brandidentity from "../../assets/brandidentity.png"
import brandguideline from "../../assets/brandguideline.png"
import value from "../../assets/value.png"
import time from "../../assets/time.png"
import { Link } from "react-router-dom"

const Service_Branding = () => {
  return (
    <div className="lg:pb-20">
    {/* Branding Introduction */}
    <div className="lg:w-[901px] lg:h-[309px] mx-auto text-center lg:px-0 px-6 lg:pb-0 md:pb-20 pb-40">
        <p className="font-montserrat font-normal text-[#5A67A7] pb-4">BRANDING</p>
        <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-xl pb-4">Strategic Brand Development Services</p>
        <p className="font-poppins font-normal text-[#999999] pb-4">Dive into our strategic brand creation services, where we create compelling storylines, visually appealing designs, and build a brand heritage that will last.</p>
        <div>
        <Link to={"/Contact"}><button className="font-poppins font-normal bg-[#111214] text-white px-4 py-2 rounded-lg">Get Estimate</button></Link>        </div>
      </div>
    {/* Branding Description */}
    <div className="lg:w-[820px] lg:h-[121px] mx-auto text-center mb-40 md:mb-20 lg:px-0 px-4">
        <p className="font-redhat font-bold text-[#303030] lg:text-2xl text-xl pb-4">Strategic Brand</p>
        <p className="font-poppins font-normal text-[#999999]">Branding services encompass the strategic development and creation of a unique brand identity for a business. This involves defining the brand's voice, values, personality, and visual elements to differentiate it from competitors and create a strong, memorable impression. </p>
      </div> 
    {/* Branding Services */}
    <div className="flex lg:justify-between justify-center lg:px-16 lg:flex-nowrap flex-wrap lg:pb-40 md:pb-40">
    <div className="lg:w-[394px] lg:h-[245px] md:w-[612px] md:h-[178px] w-[389px] h-[163px] lg:text-start text-center lg:pb-0 pb-40">
          <p className="font-montserrat font-normal text-[#5A67A7] pb-2 ">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-2xl text-xl">Branding Services We Deliver</p>
      </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-8 lg:gap-y-0 gap-y-6 lg:place-items-start place-items-center">
      <div className="lg:w-[350px] lg:h-[380px] w-[331px] md:h-[321px] h-[387px] relative lg:bottom-0 md:bottom-[90px]">
        <div>
          <img src={brandstartegy} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
        </div>
        <div className="lg:w-[350px] lg:h-[112px] w-[331px] h-[101px] md:h-[321px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Brand Strategy</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[659px] w-[331px] md:h-[504px] h-[450px] lg:mb-0 md:mb-0 mb-8">
        <div>
          <img src={logodesign} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
        </div>
        <div className="lg:w-[350px] lg:h-[212px] w-[331px] h-[164px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Logo Design</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[663px] w-[331px] md:h-[504px] h-[450px] relative lg:bottom-[220px] md:bottom-[150px] lg:mb-0 md:mb-0 mb-8">
        <div>
          <img src={brandidentity} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4" />
        </div>
        <div className="lg:w-[350px] lg:h-[212px] w-[331px] h-[164px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Brand Identity</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[384px] w-[331px] md:h-[321px] h-[387px] lg:mt-12 relative lg:bottom-0 md:bottom-[20px]">
        <div>
          <img src={brandguideline} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
        </div>
        <div className="lg:w-[350px] lg:h-[112px] w-[331px] h-[101px] md:h-[321px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Brand Guidelines</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
        </div>
      </div>
    </div>  
    </div>
    {/* Company info */}
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
    {/* Branding Features */}
    <div className="lg:mb-0 mb-40">
    <div className="lg:w-[879px] md:w-[581px] md:h-[90px] lg:h-[112px] w-[356px] h-[64px] mx-auto mb-10">
      <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-3xl text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center lg:px-40 md:px-10 gap-y-10 md:gap-y-16 lg:gap-y-10">
      <div className="flex lg:gap-x-4 gap-x-2 relative md:top-[15px] lg:top-0 lg:mb-6 lg:w-[490px] lg:h-[112px] w-[377px] md:h-[136px] h-[80px] lg:justify-start justify-center">
        <div>
          <img src={brandrecognition} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[112px] md:w-[216px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Brand Recognition</p>
          <p className="font-poppins font-normal text-[#30303099]">Establishing a strong brand identity helps customers recognize and remember your business.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[484px] w-[368px] h-[112px] lg:mb-6 lg:justify-start justify-center">
        <div>
          <img src={value} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[384px] lg:h-[112px] h-[136px] md:w-[216px] md:h-[160px] w-[290px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Financial Value</p>
          <p className="font-poppins font-normal text-[#30303099]">A strong brand can increase the financial value of your business, making it more attractive to investors or buyers.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] h-[112px] w-[346px] md:w-[216px] md:h-[136px] lg:justify-start justify-center">
        <div>
          <img src={dependable} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[112px] md:w-[216px] md:h-[184px] h-[136px] w-[285px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Increased Credibility</p>
          <p className="font-poppins font-normal text-[#30303099]">A strong brand can convey professionalism and reliability, enhancing your credibility in the market.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] lg:h-[140px] w-[353px] h-[160px] md:w-[216px] md:h-[164px] lg:justify-start justify-center">
        <div>
          <img src={performance} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[140px] md:w-[216px] md:h-[184px] h-[160px] w-[292px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Employee Pride and Satisfaction</p>
          <p className="font-poppins font-normal text-[#30303099]">A strong brand can instill pride and satisfaction in employees, leading to higher morale and productivity.</p>
        </div>
      </div>
    </div>
    </div>
    {/* Branding Costs and Time */}
    <div className="grid place-content-center lg:mb-0 mb-36">
        <div className="pb-4">
          <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-2xl">Costs and time</p>
        </div>
        <div className="lg:w-[920px] lg:h-[319px] w-[329px] h-[380px] md:w-[710px] md:h-[331px] bg-[#111214] text-white lg:px-16 lg:py-16 px-4 py-10 rounded-lg">
          <div className="flex gap-x-2">
          <div>
            <img src={time} alt="" className="lg:w-[80px] lg:h-[80px] w-[43px] h-[38px] md:w-[80px] md:h-[80px]"/>
          </div>
          <div className="lg:w-[471px] lg:h-[86px] w-[316px] h-[99px] lg:mt-6 md:mt-6">
            <p className="font-redhat font-bold text-lg ">Branding Services</p>
            <p className="font-poppins font-normal text-[#FFFFFF99]">Define and Refine Your Brand Identity with Our Expert Branding Services, Strategically Crafted to Establish Credibility, Foster Loyalty, and Propel Your Business Towards Sustainable Success.</p>
          </div>
          <div className="lg:mt-12 lg:ml-32 md:mt-12 md:ml-32 lg:text-start md:text-start text-center flex lg:items-center md:items-center">
            <p className="font-redhat font-bold text-lg">2-3 Weeks</p>
          </div>
          </div>
          <div className="text-center lg:mt-16 md:mt-20 mt-44">
            <button className="font-redhat font-bold bg-white text-black px-10 py-2 rounded-lg">$30,000—$50,000+</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Service_Branding
