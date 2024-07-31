import career_img from "../../assets/career-img.png"
import Getintouch from "../Service_Module/Getintouch"
import Footer from "../Home/Footer"
import Career_uxui from "./Career_uxui"
import Career_hr from "../Career_Module/Career_hr"
import Career_backend from "../Career_Module/Career_backend"
import Career_dataAnalytics from "../Career_Module/Career_dataAnalyst"
import Career_graphicdesigner from "../Career_Module/Career_graphicdesigner"
import Career_frontend from "../Career_Module/Career_frontend"
import ApplicationForm from "./ApplicationForm"
import { useState,useEffect } from "react"
const Careers = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [modal,setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  const [showPage1,setShowPage1]= useState(false);
  const [showPage2,setShowPage2]= useState(false);
  const [showPage3,setShowPage3]= useState(false);
  const [showPage4,setShowPage4]= useState(false);
  const [showPage5,setShowPage5]= useState(false);
  const [showPage6,setShowPage6]= useState(false);
  
  const handleClick1 = ()=> {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick2 = ()=> {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick3 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick4 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(true);
    setShowPage5(false);
    setShowPage6(false);
  }
  const handleClick5 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(true);
    setShowPage6(false);
  }
  const handleClick6 = ()=> {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setShowPage5(false);
    setShowPage6(true);
  }
  
  return (
    <div className='pt-10 lg:px-20 md:px-10 px-4'>
      <div className='lg:w-[872px] lg:h-[161px] md:w-[685px] md:h-[176px] h-[256px] mx-auto text-center lg:mb-10 md:mb-20 mb-16'>
        <p className="font-redhat font-normal text-[#5A67A7] pb-4">CAREER</p>
        <p className="font-redhat font-bold text-[#111214] lg:text-4xl text-2xl pb-4">Join us on a brand-new professional path.</p>
        <p className="font-poppins font-normal text-[#999999]">Explore new horizons and reach your full potential in a thriving work environment that values diversity, creativity, and quality. Join us on an exciting journey where each step ahead opens up new possibilities for growth and fulfillment.</p>
      </div>
      <div className="flex items-center lg:gap-x-16 gap-x-6 md:flex-nowrap flex-wrap lg:mb-40 md:mb-28 mb-20">
        <div className="md:mb-0 mb-6">
        <img src={career_img} alt="" className="lg:w-[680px] lg:h-[400px] w-[334px] h-[196px]"/>
        </div>
        <div className="lg:w-[477px] lg:h-[201px] w-[333px] h-[191px] md:text-start text-center">
          <p className="font-redhat font-bold text-[#111214] lg:text-4xl md:text-2xl text-xl pb-4">Benefits of working with us</p>
          <p className="font-poppins font-normal text-[#999999]">Discover the perks of joining our team, from competitive compensation to professional development opportunities. Elevate your career with us and reap the rewards of working in a supportive and innovative environment.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:px-52 md:px-16 place-content-center place-items-center">
        <div className="lg:w-[353px] lg:h-[133px] w-[333px] md:h-[110px] h-[120px] md:text-start text-center">
          <button href="" className="font-redhat font-bold text-[#111214] lg:text-xl bg-white border shadow-2xl px-[66px] py-8" onClick={handleClick1}>UI/UX Designer</button>
        </div>
        <div className="lg:w-[353px] lg:h-[133px] w-[333px] h-[110px] md:text-start text-center">
        <button href="" className="font-redhat font-bold text-[#111214] lg:text-xl bg-white border shadow-2xl md:px-[58px] px-[62px] py-8" onClick={handleClick2}>Human Resource</button>
        </div>
        <div className="lg:w-[353px] lg:h-[133px] w-[333px] h-[110px] md:text-start text-center">
        <button href="" className="font-redhat font-bold text-[#111214] lg:text-xl bg-white border shadow-2xl lg:px-[38px] md:px-[44px] px-[46px] py-8" onClick={handleClick3}>Front-end Developer</button>
        </div>
        <div className="lg:w-[353px] lg:h-[133px] w-[333px] h-[110px] md:text-start text-center">
        <button href="" className="font-redhat font-bold text-[#111214] lg:text-xl bg-white border shadow-2xl lg:px-[70px] md:px-[68px] px-[70px] py-8" onClick={handleClick4}>Data Analytics</button>
        </div>
        <div className="lg:w-[353px] lg:h-[133px] w-[333px] h-[110px] md:text-start text-center">
        <button href="" className="font-redhat font-bold text-[#111214] lg:text-xl bg-white border shadow-2xl lg:px-[56px] md:px-[58px] px-[60px] py-8" onClick={handleClick5}>Graphic Designer</button>
        </div>
        <div className="lg:w-[353px] lg:h-[133px] w-[333px] h-[110px] md:text-start text-center">
        <button href="" className="font-redhat font-bold text-[#111214] lg:text-xl bg-white border shadow-2xl lg:px-[42px] md:px-[44px] px-[48px] py-8" onClick={handleClick6}>Back-end Developer</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      {showPage1 && <Career_uxui/>}
      {showPage2 && <Career_hr/>}
      {showPage3 && <Career_frontend/>}
      {showPage4 && <Career_dataAnalytics/>}
      {showPage5 && <Career_graphicdesigner/>}
      {showPage6 && <Career_backend/>}
      </div>
      
      <Getintouch/>
      <Footer/>
    </div>
  )
}

export default Careers
