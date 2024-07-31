/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ScrollTopLink = ({ to, children }) => {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={to}>
      {children}
    </Link>
  );
};

function Footer() {
  return (
    <footer className="bg-[#325544]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 border-gray-100 md:grid-cols-4  lg:grid-cols-5">
          <div className="text-center sm:text-left">
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-[24px]  text-white font-semibold">Solution</p>
              <p className="bg-[#FFD400] h-[1px] w-[25px]"></p>
            </div>
            <ul className="mt-4 space-y-3 text-white ">
              <li>
                <ScrollTopLink className="" to="/solution/childcare">
                  Childcare
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink className="" to="/solution/program">
                  Program
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink className="" to="/solution/services">
                  Services
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink className="/solution/featuresofparent" href="#">
                  Parent Features
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink className="" to="/solution/billing">
                  Billing
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-[24px]  text-white font-semibold">Resources</p>
              <p className="bg-[#54E360] h-[1px] w-[25px]"></p>
            </div>
            <ul className="mt-4 space-y-4 text-white ">
              <li>
                <ScrollTopLink className="" to="/resource/aboutus">
                  About us
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink to="/resource/customerfeedback" className="">
                  Feedback
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink className="" to="/blog">
                  Blog
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink className="" to="/termsandconditions">
                  Terms of Service
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink className="" to="/privacypolicy">
                  Privacy Policy
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-[24px]  text-white font-semibold">Support</p>
              <p className="bg-[#008ADF] h-[1px] w-[25px]"></p>
            </div>

            <ul className="mt-4 space-y-4 text-white">
              <li>
                <ScrollTopLink className="" to="/resource/helpcenter/personal">
                  Personal information
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink className="" to="/resource/helpcenter/payment">
                  Payment System
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink to="/resource/helpcenter/family" className="">
                  For Family
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink className="" to="/resource/helpcenter/checkin">
                  Check in/ Out
                </ScrollTopLink>
              </li>

              <li>
                <ScrollTopLink className="" href="/resource/helpcenter/report">
                  Report Details
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start space-x-5   md:col-span-2 -order-1 lg:order-4">
            <img src={logo} className="w-[150px]" alt="" />

            <p className=" text-white font-poppins text-center lg:text-start">
              We are here to show our excellence in childcare management through
              innovation, reliability, and unparalleled service.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-xl text-white sm:text-left">
            &copy;2023 All rights reserved..
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <div className="size-[48px] rounded-full flex items-center justify-center  bg-[#3F6955]">
                <FaFacebook className="size-[24px] text-white" />
              </div>
            </li>
            <li>
              <div className="size-[48px] rounded-full flex items-center justify-center  bg-[#3F6955]">
                <FaTwitter className="size-[24px] text-white" />
              </div>
            </li>
            <li>
              <div className="size-[48px] rounded-full flex items-center justify-center  bg-[#3F6955]">
                <FaInstagram className="size-[24px] text-white" />
              </div>
            </li>
            <li>
              <div className="size-[48px] rounded-full flex items-center justify-center  bg-[#3F6955]">
                <FaLinkedin className="size-[24px] text-white" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
