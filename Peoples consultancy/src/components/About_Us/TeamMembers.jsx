import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import person3 from "../../assets/person3.png"
import person4 from "../../assets/person4.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const TeamMembers = () => {
  return (
    <div className="lg:pb-32 pb-10 bg-[#fafafa]">
      <div className="mb-8 text-center md:px-4">
        <p className="font-redhat font-medium text-[#5A67A7] pb-2 lg:pb-6 ">TEAM MEMBERS</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl md:text-2xl text-xl pb-2 lg:pb-6">Meet Our Talented Team</p>
        <p className="font-poppins font-normal text-[#12141D99] lg:w-[621px] lg:h-[48px] mx-auto">Our team is the heart of our organization, comprised of diverse individuals united by a passion for digital marketing excellence. </p>
      </div>
      <div className="flex justify-center lg:flex-nowrap flex-wrap lg:px-0 px-10 mb-10 gap-6">
      <div className="lg:w-[283px] lg:h-[415px] bg-[#FFFFFF] px-2 py-4 ">
        <div>
          <img src={person1} alt="" className="w-[263px] h-[334px] mb-2"/>
        </div>
        <div className="flex justify-between items-center px-2">
        <div>
        <p className="font-poppins font-normal text-[#303030]">Alaney</p>
        <p className="font-poppins font-bold text-[#999999]">Professional</p>
        </div>
        <div className="flex gap-2 text-xl">
          <a href="#"><FaLinkedin/></a>
          <a href="#"> <FaFacebook/></a>
          <a href="#"><FaSquareXTwitter/></a>
        </div>
        </div>
      </div>
      <div className="lg:w-[283px] lg:h-[415px] bg-[#FFFFFF] px-2 py-4">
        <div>
          <img src={person2} alt="" className="w-[263px] h-[334px] mb-2"/>
        </div>
        <div className="flex justify-between items-center px-2">
        <div>
        <p className="font-poppins font-normal text-[#303030]">David</p>
        <p className="font-poppins font-bold text-[#999999]">Professional</p>
        </div>
        <div className="flex gap-2 text-xl">
          <a href="#"><FaLinkedin/></a>
          <a href="#"> <FaFacebook/></a>
          <a href="#"><FaSquareXTwitter/></a>
        </div>
        </div>
      </div>
      <div className="lg:w-[283px] lg:h-[415px] bg-[#FFFFFF] px-2 py-4">
        <div>
          <img src={person3} alt="" className="w-[263px] h-[334px] mb-2"/>
        </div>
        <div className="flex justify-between items-center px-2">
        <div>
        <p className="font-poppins font-normal text-[#303030]">James</p>
        <p className="font-poppins font-bold text-[#999999]">Professional</p>
        </div>
        <div className="flex gap-2 text-xl">
          <a href="#"><FaLinkedin/></a>
          <a href="#"> <FaFacebook/></a>
          <a href="#"><FaSquareXTwitter/></a>
        </div>
        </div>
      </div>
      <div className="lg:w-[283px] lg:h-[415px] bg-[#FFFFFF] px-2 py-4">
        <div>
          <img src={person4} alt="" className="w-[263px] h-[334px] mb-2"/>
        </div>
        <div className="flex justify-between items-center px-2">
        <div>
        <p className="font-poppins font-normal text-[#303030]">Steve</p>
        <p className="font-poppins font-bold text-[#999999]">Professional</p>
        </div>
        <div className="flex gap-2 text-xl">
          <a href="#"><FaLinkedin/></a>
          <a href="#"> <FaFacebook/></a>
          <a href="#"><FaSquareXTwitter/></a>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TeamMembers
