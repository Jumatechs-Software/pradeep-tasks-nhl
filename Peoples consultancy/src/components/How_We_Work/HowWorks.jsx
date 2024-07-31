import analysis from "../../assets/analysis.png";
import curve from "../../assets/curve.png";
import mobile_development from "../../assets/mobile-development.png";
import framesvg from "../../assets/frame.svg"
import { useEffect } from "react";

const HowWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="pt-10 lg:pb-10 pb-10">
      <div className="flex flex-col justify-center items-center lg:px-0 px-4 lg:text-start text-center pb-5 ">
        <p className="font-redhat text-[#5A67A7] pb-3">HOW WE WORK</p>
        <p className="font-redhat text-[#303030] lg:text-3xl text-xl pb-3">How We Drive Your Digital Success</p>
        <p className="font-poppins text-[#999999] pb-6 lg:w-[600px] mx-auto">Unlock your brands potential with our strategic digital marketing solutions. We analyze, strategize, and execute to drive your online success.</p>
      </div>
      <div className="flex justify-center items-center lg:gap-6 gap-4 lg:px-0 px-2">
        <div className="flex flex-col items-center gap-y-2">
          <div><img src={analysis} alt="" className="lg:w-[56px] lg:h-[56px] w-[41px] h-[41px]"/></div>
          <p className="font-redhat font-bold text-[#303030] lg:text-lg text-sm">ANALYTICS</p>
        </div>
        <div className="flex justify-center items-center"><img src={framesvg} alt="" className="lg:w-[83px] md:w-[83px] w-[41px] h-[41px]"/></div>
        <div className="flex flex-col items-center gap-y-2">
          <div><img src={curve} alt="" className="lg:w-[56px] lg:h-[56px] w-[41px] h-[41px]"/></div>
          <p className="font-redhat font-bold text-[#303030] lg:text-lg text-sm">DESIGNING</p>
        </div>
        <div className="flex justify-center items-center"><img src={framesvg} alt="" className="lg:w-[83px] md:w-[83px] w-[41px] h-[41px]"/></div>
        <div className="flex flex-col items-center gap-y-2">
          <div><img src={mobile_development} alt="" className="lg:w-[56px] lg:h-[56px] w-[41px] h-[41px]"/></div>
          <p className="font-redhat font-bold text-[#303030] lg:text-lg text-sm">DEVELOPMENT</p>
        </div>
      </div>
    </div>
  )
}

export default HowWorks;
