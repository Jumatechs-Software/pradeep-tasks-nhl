import webappdev from "../../assets/webappdev.png"
import mobdev from "../../assets/mobdev.png"
import socialnetwork from "../../assets/socialnetwork.png"
import enterpriseapp from "../../assets/enterpriseapp.png"
import brandrecognition from "../../assets/brandrecognition.png"
import directmarketing from "../../assets/directmarketing.png"
import interaction from "../../assets/interaction.png"
import personalinfo from "../../assets/personal-info.png"
import time from "../../assets/time.png"
import { Link } from "react-router-dom"

const Service_MobileApp = () => {
  return (
    <div className="lg:pb-20">
    {/* MobileApp Introdution */}
    <div className="lg:w-[901px] lg:h-[309px] mx-auto text-center lg:px-0 px-6 lg:pb-0 md:pb-20 pb-40">
        <p className="font-montserrat font-normal text-[#5A67A7] pb-4">MOBILE APP</p>
        <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-xl pb-4">App Development Service</p>
        <p className="font-poppins font-normal text-[#999999] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor </p>
        <div>
        <Link to={"/Contact"}><button className="font-poppins font-normal bg-[#111214] text-white px-4 py-2 rounded-lg">Get Estimate</button></Link>        </div>
    </div>
    {/* MobileApp Description */}
    <div className="lg:w-[940px] lg:h-[121px] mx-auto text-center mb-40 md:mb-20 lg:px-0 px-4">
        <p className="font-redhat font-bold text-[#303030] lg:text-2xl text-xl pb-4">Why mobile app needed?</p>
        <p className="font-poppins font-normal text-[#999999]">Mobile app development services encompass the design, development, testing, and maintenance of applications for mobile devices such as smartphones and tablets. These services are offered by software development companies or freelance developers and aim to create functional and user-friendly applications for various purposes.</p>
    </div> 
    {/* Branding Services */}
    <div className="flex lg:justify-between justify-center lg:px-16 lg:flex-nowrap flex-wrap lg:pb-40 md:pb-40">
    <div className="lg:w-[394px] lg:h-[245px] md:w-[612px] md:h-[178px] w-[389px] h-[163px] lg:text-start text-center lg:pb-0 pb-40">
          <p className="font-montserrat font-normal text-[#5A67A7] pb-2 ">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-2xl text-xl">Mobile App Services We Deliver</p>
      </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-8 lg:gap-y-0 gap-y-6 lg:place-items-start place-items-center">
      <div className="lg:w-[350px] lg:h-[344px] w-[331px] md:h-[348px] h-[387px] relative lg:bottom-0 md:bottom-[75px]">
        <div>
          <img src={webappdev} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
        </div>
        <div className="lg:w-[350px] lg:h-[112px] w-[331px] h-[101px] md:h-[128px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Web App Development</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[623px] w-[331px] md:h-[504px] h-[450px] lg:mb-0 md:mb-0 mb-8">
        <div>
          <img src={mobdev} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
        </div>
        <div className="lg:w-[350px] lg:h-[212px] w-[331px] h-[164px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">E-commerce</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[627px] w-[331px] md:h-[504px] h-[450px] relative lg:bottom-[180px] md:bottom-[150px] lg:mb-0 md:mb-0 mb-8">
        <div>
          <img src={socialnetwork} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4" />
        </div>
        <div className="lg:w-[350px] lg:h-[212px] w-[331px] h-[164px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Social Networking App</p>
        <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[384px] w-[331px] md:h-[348px] h-[387px] lg:mt-20 relative lg:bottom-0 md:bottom-3">
        <div>
          <img src={enterpriseapp} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
        </div>
        <div className="lg:w-[350px] lg:h-[112px] w-[331px] h-[101px] md:h-[128px]">
        <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Enterprise App Development</p>
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
    {/* MobileApp Features */}
    <div className="lg:mb-0 mb-40">
    <div className="lg:w-[879px] md:w-[581px] md:h-[90px] lg:h-[112px] w-[356px] h-[64px] mx-auto mb-10">
      <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-3xl text-xl text-center">Mobile apps offer a range of benefits for both businesses and users</p>
    </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center lg:px-40 md:px-10 gap-y-10 md:gap-y-2 lg:gap-y-0">
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] lg:h-[136px] w-[377px] md:h-[136px] md:w-[292px] h-[100px] lg:justify-start justify-center lg:mb-20 md:mb-[50px]">
        <div>
          <img src={personalinfo} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[136px] md:w-[216px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Access to User Data</p>
          <p className="font-poppins font-normal text-[#30303099]">Establishing a strong brand identity helps customers recognize and remember your business.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[484px] md:w-[299px] md:h-[188px] w-[368px] h-[136px] lg:mb-6 lg:justify-start justify-center">
        <div>
          <img src={directmarketing} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[384px] h-[136px] md:w-[216px] md:h-[188px] w-[290px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Direct Marketing Channel</p>
          <p className="font-poppins font-normal text-[#30303099]">A strong brand can increase the financial value of your business, making it more attractive to investors or buyers.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] h-[136px] w-[346px] md:w-[292px] md:h-[164px] lg:justify-start justify-center">
        <div>
          <img src={brandrecognition} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[136px] md:w-[216px] md:h-[164px] h-[136px] w-[285px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Improved Brand Recognition</p>
          <p className="font-poppins font-normal text-[#30303099]">A strong brand can convey professionalism and reliability, enhancing your credibility in the market.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] lg:h-[112px] w-[353px] h-[160px] md:w-[292px] md:h-[164px] lg:justify-start justify-center lg:mb-12">
        <div>
          <img src={interaction} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[112px] md:w-[216px] md:h-[164px] h-[160px] w-[292px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Enhanced Customer Service</p>
          <p className="font-poppins font-normal text-[#30303099]">A strong brand can instill pride and satisfaction in employees, leading to higher morale and productivity.</p>
        </div>
      </div>
    </div>
    </div>
    {/* MobileApp Costs and Time */}
    <div className="grid place-content-center lg:mb-0">
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

export default Service_MobileApp
