import company_logo from "../../assets/company-name.png";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import "../Navbar/styles.css"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>

<div className="h-[2px] w-[90%] bg-[#919191] relative lg:left-16 left-4 md:left-10 mb-4">
    <div className="absolute left-0 top-[50%] -translate-y-1/2 w-[10px] h-[10px] bg-[#919191] rounded-full"></div>
    <div className="absolute right-0 top-[50%] -translate-y-1/2 w-[10px] h-[10px] bg-[#919191] rounded-full"></div>
    </div>
      <div className="flex justify-around lg:flex-nowrap flex-wrap ">

        <div className="font-poppins font-normal text-[#303030] flex flex-col gap-y-2 lg:px-0  px-8 lg:pb-0 pb-8">
        <div className="lg:flex-none flex lg:justify-normal justify-center">
          <img src={company_logo} alt="" className="w-[177px] h-[51px]"/>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaEnvelope/></p>
          <a href="" className="lg:text-lg">support@peoples-consulting.com</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaPhone/></p>
          <a href="" className="lg:text-lg">+1 (888) 602-8679</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaLocationDot/></p>
          <a href="" className="lg:text-lg">4449 Easton Way, Floor 2, Columbus, OH 43219</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaLocationDot/></p>
          <a href="" className="lg:text-lg">8 The Green, STE 200, Dover, DE 19901</a>
        </div>
        </div>

        <div className="flex flex-col items-center font-montserrat font-medium text-[#303030] gap-y-2 lg:px-0 md:px-48 px-24 lg:pb-0 pb-8">
          <p className="pb-2">COMPANY</p>
          <Link to={"/About"}><a href="" className="font-montserrat font-normal">ABOUT US</a></Link>
          <Link to={"/Career"}><a href="" className="font-montserrat font-normal">CAREERS</a></Link>
          <Link to={"/Contact"}><a href="" className="font-montserrat font-normal">CONTACT US</a></Link>
          <Link to={"/Service"}><a href="" className="font-montserrat font-normal">SERVICES</a></Link>
        </div>

        <div className="flex flex-col items-center font-montserrat font-medium text-[#303030] gap-y-2 lg:px-0 md:px-72 px-24 lg:pb-0 pb-8">
          <p className="pb-2">RESOURCE</p>
          <Link to={"/Cases"}><a href="" className="font-montserrat font-normal">CASES</a></Link>
          <Link to={"/About"}><a href="" className="font-montserrat font-normal">FAQ</a></Link>
          <Link to={"/Blog"}><a href="" className="font-montserrat font-normal">BLOGS</a></Link>
          <Link to={"/"}><a href="" className="font-montserrat font-normal">TESTIMONIALS</a></Link>
        </div>

        <div className="flex flex-col font-montserrat font-medium text-[#303030] gap-y-2">
          <p className="pb-2 mx-auto">LINKS</p>
          <div className="flex items-center gap-2">
          <p className="text-lg"><FaSquareInstagram/></p>
          <a href="" className="text-lg font-montserrat font-normal">Instagram</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaFacebook/></p>
          <a href="" className="text-lg font-montserrat font-normal">Facebook</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaTwitter/></p>
          <a href="" className="text-lg font-montserrat font-normal">Twitter</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaLinkedinIn/></p>
          <a href="" className="text-lg font-montserrat font-normal">Linkedin</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg"><FaYoutube/></p>
          <a href="" className="text-lg font-montserrat font-normal">Youtube</a>
        </div>
        </div>
      </div>
      <div className="h-[2px] w-[90%] bg-[#919191] relative lg:left-16 left-4 md:left-12 mt-2">
      </div>
      <div className="font-poppins font-normal text-[#303030] flex justify-center lg:flex-wrap flex-wrap lg:gap-12 md:gap-3 gap-4 lg:px-0 md:px-2 px-6">
        <p>© Copyright 2024. Peoples Consulting. All rights reserved.</p>
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
      </div>
    </div>    
  )
}

export default Footer
