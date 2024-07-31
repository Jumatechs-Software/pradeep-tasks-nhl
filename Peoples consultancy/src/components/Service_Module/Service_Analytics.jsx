import cake from "../../assets/cake.png"
import girl from "../../assets/girl.png"
import estimate from "../../assets/estimate.png"
import vision from "../../assets/vision.png"
import order from "../../assets/order.png"
import start_up from "../../assets/start-up.png"
import bluemobile from "../../assets/bluemobile.png"
import clock from "../../assets/clock.png"
import time from "../../assets/time.png"
import { Link } from "react-router-dom"

const Service_Analytics = () => {
  return (
    <div className="lg:pb-20">
      <div className="lg:w-[874px] lg:h-[365px] mx-auto text-center lg:px-0 px-6 lg:pb-0 md:pb-20 pb-40">
        <p className="font-montserrat font-normal text-[#5A67A7] pb-4">ANALYTICS</p>
        <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-xl pb-4">How Can You Get A Digital Product Tailored To Your Business Goals?</p>
        <p className="font-poppins font-normal text-[#999999] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor  </p>
        <div>
        <Link to={"/Contact"}><button className="font-poppins font-normal bg-[#111214] text-white px-4 py-2 rounded-lg">Get Estimate</button></Link>        </div>
      </div>

      <div className="lg:w-[820px] lg:h-[145px] mx-auto text-center mb-40 md:mb-20 lg:px-0 px-4">
        <p className="font-redhat font-bold text-[#303030] lg:text-2xl text-xl pb-4">What problems does analytics solve?</p>
        <p className="font-poppins font-normal text-[#999999]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>    

      <div className="flex lg:justify-between justify-center lg:px-16 lg:flex-nowrap flex-wrap lg:pb-40">
      <div className="lg:w-[394px] lg:h-[245px] lg:text-start text-center lg:pb-0 pb-40">
          <p className="font-montserrat font-normal text-[#5A67A7] pb-2 ">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-2xl text-xl">How Analytic works In our Team</p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-8 lg:gap-y-0 gap-y-6 lg:place-items-start place-items-center">
        <div className="lg:w-[350px] lg:h-[344px] w-[331px] h-[387px] md:h-[321px] relative md:bottom-[90px] lg:bottom-0">
          <div>
            <img src={cake} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Impact mapping</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
        </div>
      <div className="lg:w-[350px] lg:h-[623px] w-[331px] h-[450px] md:h-[504px]">
          <div>
             <img src={girl} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">User Stories</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
      </div>
      <div className="lg:w-[350px] lg:h-[623px] w-[331px] h-[450px] md:h-[504px] relative lg:bottom-[200px] md:bottom-[200px] lg:my-0 my-10">
          <div>
             <img src={estimate} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Estimate</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
      </div>
      <div className="lg:w-[350px] lg:h-[344px] w-[331px] h-[387px] md:h-[321px] relative md:bottom-[75px]">
          <div>
            <img src={vision} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Clear Vision</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. </p>
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
    <div className="lg:w-[581px] md:w-[581px] md:h-[90px] lg:h-[112px] mx-auto mb-10">
      <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-3xl text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center lg:px-40 gap-y-10">
      <div className="flex lg:gap-x-4 gap-x-2 relative lg:mb-6">
        <div>
          <img src={clock} alt="" className="lg:w-[60px] lg:h-[60px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[292px] lg:h-[160px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Timeline</p>
          <p className="font-poppins font-normal text-[#30303099]">The project plan details the estimated costs and timeline for completion, ensuring resources are allocated efficiently and goals are met.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={bluemobile} alt="" className="lg:w-[60px] lg:h-[60px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[299px] lg:h-[184px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Specify Needs</p>
          <p className="font-poppins font-normal text-[#30303099]">Sets detailed, measurable, and specific product requirements based on user needs, market analysis, and business objectives for future project development.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={start_up} alt="" className="lg:w-[60px] lg:h-[60px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[299px] lg:h-[184px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Define goals</p>
          <p className="font-poppins font-normal text-[#30303099]">It establishes specific, achievable objectives for the product, ensuring they are quantifiable and can be tracked effectively for progress evaluation.</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2">
        <div>
          <img src={order} alt="" className="lg:w-[60px] lg:h-[60px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[299px] lg:h-[184px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Future Dependance</p>
          <p className="font-poppins font-normal text-[#30303099]">This involves establishing a clear link between the overarching objectives of the product and the specific functionalities planned for the upcoming project.</p>
        </div>
      </div>
    </div>
    </div> 
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
            <p className="font-redhat font-bold text-lg ">Analytic works</p>
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

export default Service_Analytics
