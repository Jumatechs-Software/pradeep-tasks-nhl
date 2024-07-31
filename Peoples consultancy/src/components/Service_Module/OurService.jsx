/* eslint-disable react/no-unescaped-entities */
import uiux from "../../assets/uiux.png"
import analytics from "../../assets/analytics.png"
import development from "../../assets/development.png"
import seo from "../../assets/seo.png"
import digitalmarketing from "../../assets/digitalmarketing.png"
import webapp from "../../assets/webapp.png"
import Service_Design from "../Service_Module/Service_Design"
import Service_Analytics from "../Service_Module/Service_Analytics"
import Service_Development from "../Service_Module/Service_Development"
import Service_Seo from "../Service_Module/Service_Seo"
import Service_Branding from "../Service_Module/Service_Branding"
import Service_MobileApp from "../Service_Module/Service_MobileApp"
import { useState,useEffect } from "react"
const OurService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  const [showPage1,setShowPage1]= useState(false);
  const [showPage2,setShowPage2]= useState(false);
  const [showPage3,setShowPage3]= useState(false);
  const [showPage4,setShowPage4]= useState(false);
  const [showPage5,setShowPage5]= useState(false);
  const [showPage6,setShowPage6]= useState(false);
  
  const handleClick1 = ()=> {
    setShowPage1(true);
    if(window.innerWidth < 768)
    {
      window.scrollTo(0,2200)
    }
    else
    {
      window.scrollTo(0,900)
    }
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(false);
  }
  
  const handleClick2 = ()=> {
    setShowPage1(false);
    setShowPage2(true);
    if(window.innerWidth < 768)
    {
      window.scrollTo(0,2200)
    }
    else
    {
      window.scrollTo(0,900)
    }
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick3 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    if(window.innerWidth < 768)
    {
      window.scrollTo(0,2200)
    }
    else
    {
      window.scrollTo(0,900)
    }    
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick4 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(true);
    if(window.innerWidth < 768)
    {
      window.scrollTo(0,2200)
    }
    else
    {
      window.scrollTo(0,900)
    }    
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick5 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(true);
    if(window.innerWidth < 768)
    {
      window.scrollTo(0,2200)
    }
    else
    {
      window.scrollTo(0,900)
    }    
    setShowPage6(false);
  }
  const handleClick6 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(true);
    if(window.innerWidth < 768)
    {
      window.scrollTo(0,2200)
    }
    else
    {
      window.scrollTo(0,900)
    } 
   }
 
  return (
  
    <div className="lg:px-20 overflow-hidden">
      
        {/* Service */}
        <div className="flex justify-center lg:gap-10 flex-wrap">
        <div className="lg:w-[313px] lg:text-start text-center lg:px-0 px-6 lg:pb-0 pb-10">
          <p className="font-redhat font-normal text-[#5A67A7] pb-2">SERVICE</p>
          <p className="font-redhat font-bold text-[#303030] lg:text-4xl text-xl pb-2 lg:leading-[45px]">Elevate Your Brand with Our Expert Strategies!</p>
          <p className="font-poppins font-normal text-[#999999]">"Boost your online presence with our tailored digital marketing strategies. From SEO to social media management, we've got you covered. Let's elevate your brand together!"</p>
        </div>
        {/* Black Rectangular Box */}
        <div className="lg:w-[888px] md:w-[714px] w-[430px] h-[177px] bg-[#5D5D5D]"></div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-2 lg:px-[280px] md:px-[120px] relative lg:bottom-[200px] bottom-[100px] lg:left-[180px] place-content-center place-items-center">
          <div className="md:w-[249px] lg:h-[300px] h-[274px] w-[210px] bg-white shadow-2xl rounded-lg border md:p-5 p-2">
            <img src={uiux} alt="" className="md:w-[54px] w-[48px] mb-4"/>
            <p className="font-redhat font-bold text-[#303030] text-lg pb-2">Design</p>
            <p className="font-inter font-normal text-[#303030CC] pb-6 lg:leading-[30px]">"Transforming digital landscapes with innovative web design solutions."</p>
            <button onClick={handleClick1} className="font-poppins font-normal bg-[#111214] text-white px-3 py-2 rounded-lg">View more</button>
          </div>
          <div className="md:w-[249px] lg:h-[300px] h-[274px] w-[210px] bg-white shadow-2xl rounded-lg border md:p-5 p-2">
            <img src={analytics} alt="" className="lg:w-[54px] w-[48px] mb-4"/>
            <p className="font-redhat font-bold text-[#303030] text-lg pb-2">Analytics</p>
            <p className="font-inter font-normal text-[#303030CC] pb-6 lg:leading-[30px]">"Unlock Insights, Drive Growth: Analytics Solutions for Your Digital Success."</p>
            <button onClick={handleClick2} className="font-poppins font-normal bg-[#111214] text-white px-3 py-2 rounded-lg">View more</button>
          </div>
          <div className="md:w-[249px] lg:h-[300px] h-[274px] w-[210px] bg-white shadow-2xl rounded-lg border md:p-5 p-2">
            <img src={development} alt="" className="lg:w-[54px] w-[48px] mb-4"/>
            <p className="font-redhat font-bold text-[#303030] text-lg pb-2">Development</p>
            <p className="font-inter font-normal text-[#303030CC] pb-6 lg:leading-[30px]">"Fuel Your Growth with Our Digital Marketing Strategies."</p>
            <button onClick={handleClick3} className="font-poppins font-normal bg-[#111214] text-white px-3 py-2 rounded-lg">View more</button>
          </div>
          <div className="md:w-[249px] lg:h-[300px] h-[274px] w-[210px] bg-white shadow-2xl rounded-lg border md:p-5 p-2">
            <img src={seo} alt="" className="lg:w-[54px] w-[48px] mb-4"/>
            <p className="font-redhat font-bold text-[#303030] text-lg pb-2">Seo</p>
            <p className="font-inter font-normal text-[#303030CC] pb-6 lg:leading-[30px]">"Elevate your online presence with expert SEO strategies."</p>
            <button onClick={handleClick4} className="font-poppins font-normal bg-[#111214] text-white px-3 py-2 rounded-lg">View more</button>
          </div>
          <div className="md:w-[249px] lg:h-[300px] h-[274px] w-[210px] bg-white shadow-2xl rounded-lg border md:p-5 p-2">
            <img src={digitalmarketing} alt="" className="lg:w-[54px] w-[48px] mb-4"/>
            <p className="font-redhat font-bold text-[#303030] text-lg pb-2">Branding</p>
            <p className="font-inter font-normal text-[#303030CC] pb-6 lg:leading-[30px]">"Transforming visions into unforgettable brand experiences."</p>
            <button onClick={handleClick5} className="font-poppins font-normal bg-[#111214] text-white px-3 py-2 rounded-lg">View more</button>
          </div>
          <div className="md:w-[249px] lg:h-[300px] h-[274px] w-[210px] bg-white shadow-2xl rounded-lg border md:p-5 p-2">
            <img src={webapp} alt="" className="lg:w-[54px] w-[48px] mb-4"/>
            <p className="font-redhat font-bold text-[#303030] text-lg pb-2">Mobile app</p>
            <p className="font-inter font-normal text-[#303030CC] pb-6 lg:leading-[30px]">"Boost engagement, drive growth with our mobile app solutions."</p>
            <button onClick={handleClick6} className="font-poppins font-normal bg-[#111214] text-white px-3 py-2 rounded-lg">View more</button>
          </div>
        </div>
        
      
      {showPage1 && <Service_Design/>}
      {showPage2 && <Service_Analytics/>}
      {showPage3 && <Service_Development/>}
      {showPage4 && <Service_Seo/>}
      {showPage5 && <Service_Branding/>}
      {showPage6 && <Service_MobileApp/>}
    </div>
  )
}

export default OurService