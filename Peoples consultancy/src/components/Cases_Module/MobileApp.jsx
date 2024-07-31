import mobile_app from "../../assets/react-mobile-app.png"
import whitevector from "../../assets/whitevector.png"
const MobileApp = () => {
  return (
    <div className="bg-black lg:h-[800px] h-auto flex items-center justify-center lg:flex-nowrap flex-wrap lg:pt-0 pt-10 lg:pl-8 mb-20">
      <div className="w-[574px] h-[246px] lg:pl-10 lg:text-start text-center md:px-0 px-6">
        <p className="font-redhat text-[#FFFFFF] pb-2">REACT MOBILE APP</p>
        <p className="font-redhat text-[#FFFFFF] lg:text-2xl text-lg pb-2">Connect Anywhere, Anytime</p>
        <p className="font-poppins text-[#D8D8D8] pb-2">Experience instant communication like never before with Reach Mobile App. </p>
        <div className="flex items-center pb-2 gap-x-2 text-start">
          <p><img src={whitevector} alt="" className="w-[18px] h-[18px] "/></p>
          <p className="font-poppins text-[#D8D8D8]">Instant messaging for quick and efficient communication. </p>
        </div>
        <div className="flex items-center pb-2 gap-x-2 text-start">
          <p><img src={whitevector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#D8D8D8]">Access resources such as educational materials and parenting tips. </p>
        </div>
        <div className="flex items-center pb-2 gap-x-2 text-start">
          <p><img src={whitevector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#D8D8D8]">Event reminders and important announcements, all in one place. </p>
        </div>
  
        <div>
          <button className="font-poppins bg-[#FFFFFF] text-black lg:px-20 px-10 py-2 rounded-lg lg:mt-20">View</button>
        </div>
      </div>
      <div>
        <img src={mobile_app} alt="" className="w-[990px] h-[790px]"/>
      </div>
    </div>
  )
}

export default MobileApp
