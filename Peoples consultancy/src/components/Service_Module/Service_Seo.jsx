/* eslint-disable react/no-unescaped-entities */
import time from "../../assets/time.png"
import long_range from "../../assets/long-range.png"
import conversion from "../../assets/conversion.png"
import web_traffic from "../../assets/web-traffic.png"
import recognition from "../../assets/recognition.png"
import keyword from "../../assets/keyword.png"
import ranking from "../../assets/ranking.png"
import monitoring from "../../assets/monitoring.png"
import content_creation from "../../assets/content-creation.png"
import { Link } from "react-router-dom"

const Service_Seo = () => {
  return (
    <div className="lg:pb-20">
    {/* SEO Header */}
    <div className="lg:w-[901px] lg:h-[365px] mx-auto text-center lg:px-0 px-6 lg:pb-0 md:pb-20 pb-40">
        <p className="font-montserrat font-normal text-[#5A67A7] pb-4">SEO</p>
        <p className="font-redhat font-bold text-[#303030] lg:text-3xl text-xl pb-4">Skyrocket Your Online Presence: <br /> Comprehensive SEO Services</p>
        <p className="font-poppins font-normal text-[#999999] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, Lorem ipsum dolor  </p>
        <div>
        <Link to={"/Contact"}><button className="font-poppins font-normal bg-[#111214] text-white px-4 py-2 rounded-lg">Get Estimate</button></Link>        </div>
      </div>
      {/* SEO Description */}
      <div className="lg:w-[820px] lg:h-[145px] mx-auto text-center mb-40 md:mb-20 lg:px-0 px-4">
         <p className="font-redhat font-bold text-[#303030] lg:text-2xl text-xl pb-4"> The Power of SEO Services</p>
        <p className="font-poppins font-normal text-[#999999]">Search Engine Optimization (SEO) is a digital marketing strategy aimed at improving a website's visibility in search engine results. The goal is to increase organic (non-paid) traffic to the website. SEO services encompass a range of strategies and techniques to achieve this goal.</p>
      </div> 
      {/* SEO Services */}
      <div className="flex lg:justify-between justify-center lg:px-16 lg:flex-nowrap flex-wrap lg:pb-40 md:pb-40">
      <div className="lg:w-[394px] lg:h-[245px] lg:text-start text-center lg:pb-0 pb-40">
          <p className="font-montserrat font-normal text-[#5A67A7] pb-2 ">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-2xl text-xl">SEO Services We Deliver</p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-8 lg:gap-y-0 gap-y-6 lg:place-items-start place-items-center">
        <div className="lg:w-[350px] lg:h-[368px] w-[331px] h-[387px]">
          <div>
          <img src={keyword} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Keyword Research</p>
          <p className="font-poppins font-normal text-[#999999]">Tap into the Insights of Our Expert Keyword Research Services, Empowering Your Content to Reach and Resonate with Your Ideal Audience.</p>
        </div>
        <div className="lg:w-[350px] lg:h-[695px] w-[331px] h-[450px] relative lg:top-0 md:top-[50px]">
          <div>
          <img src={ranking} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Ranking</p>
          <p className="font-poppins font-normal text-[#999999]">Our meticulously crafted Ranking Services are designed to propel your website to the forefront of search engine results pages. We ensure that your website achieves and maintains top positions for targeted keywords, maximizing visibility, driving organic traffic, and fostering sustainable growth for your online platform.</p>
        </div>
        <div className="lg:w-[350px] lg:h-[687px] relative lg:bottom-[250px] md:bottom-[120px] w-[331px] h-[450px] lg:my-0 my-20">
          <div>
          <img src={content_creation} alt="" className="lg:w-[350px] lg:h-[391px] w-[331px] h-[270px] md:h-[320px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Content Creation and Optimization</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your online presence with our Content Creation and Optimization service. From compelling copy to strategic keyword integration, we craft content that resonates with your audience and boosts your search engine rankings for sustainable growth and visibility.</p>
        </div>
        <div className="lg:w-[350px] lg:h-[368px] lg:mt-10 w-[331px] h-[387px] relative lg:top-0 md:top-[100px]">
          <div>
          <img src={monitoring} alt="" className="lg:w-[350px] lg:h-[208px] w-[331px] h-[270px] md:h-[200px] mb-4"/>
          </div>
          <p className="font-redhat font-bold lg:text-xl md:text-xl text-[#303030] pb-2">Monitoring and Reporting</p>
          <p className="font-poppins font-normal text-[#999999]">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs.</p>
        </div>
      </div>
      </div>
      {/* Company Info  */}
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
     {/*SEO Features */}
     <div className="lg:mb-0 mb-40">
    <div className="lg:w-[581px] md:w-[581px] md:h-[90px] lg:h-[112px] mx-auto mb-10">
      <p className="font-redhat font-bold text-[#303030] lg:text-4xl md:text-3xl text-xl text-center">Strategic Business Growth</p>
    </div>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center lg:px-40 gap-y-10  md:gap-y-28 lg:gap-y-0">
      <div className="flex lg:gap-x-4 gap-x-2 relative lg:mb-6 lg:w-[490px] lg:h-[188px] w-[377px] h-[136px] mb-10 lg:justify-start justify-center">
        <div>
          <img src={recognition} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[188px] md:w-[216px] md:h-[184px] h-[136px] w-[301px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Brand Visibility and Awareness</p>
          <p className="font-poppins font-normal text-[#30303099]">Experience strategic business growth with our Brand Visibility and Awareness service. Boost your brand's presence across digital channels and engage your target audience effectively for increased visibility and impact</p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[484px] w-[368px] h-[136px] lg:mb-20 lg:justify-start justify-center">
        <div>
          <img src={web_traffic} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[384px] h-[136px] md:w-[216px] md:h-[184px] w-[290px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Increased Website Traffic</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, </p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] h-[136px] w-[346px] lg:justify-start justify-center">
        <div>
          <img src={conversion} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] md:w-[216px] md:h-[184px] h-[136px] w-[285px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Higher Conversion Rates</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet, </p>
        </div>
      </div>
      <div className="flex lg:gap-x-4 gap-x-2 lg:w-[490px] lg:h-[136px] w-[353px] h-[160px] lg:justify-start justify-center">
        <div>
          <img src={long_range} alt="" className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45px]"/>
        </div>
        <div className="lg:w-[390px] lg:h-[136px] md:w-[216px] md:h-[184px] h-[160px] w-[292px]">
          <p className="font-poppins font-semibold lg:text-xl pb-2">Long-Term Strategy</p>
          <p className="font-poppins font-normal text-[#30303099]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diamLorem ipsum dolor sit amet,</p>
        </div>
      </div>
    </div>
    </div> 
    {/* SEO Costs and Time */}
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
            <p className="font-redhat font-bold text-lg "> Professional SEO services </p>
            <p className="font-poppins font-normal text-[#FFFFFF99]">Boost Website Traffic and Enhance Conversion Rates through Strategic Implementation of Our Proven, Results-Driven Professional SEO Services Strategies.</p>
          </div>
          <div className="lg:mt-12 lg:ml-32 md:mt-12 md:ml-32 lg:text-start md:text-start text-center">
            <p className="font-redhat font-bold text-lg">2-3 Weeks</p>
          </div>
          </div>
          <div className="text-center lg:mt-16 md:mt-16 mt-44">
            <button className="font-redhat font-bold bg-white text-black px-10 py-2 rounded-lg">$30,000—$50,000+</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Service_Seo
