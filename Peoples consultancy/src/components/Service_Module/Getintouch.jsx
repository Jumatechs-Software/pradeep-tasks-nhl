import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Getintouch = () => {
  return (
    <div className="flex flex-col items-center text-center mb-10 lg:w-[527px] lg:h-[340px] mx-auto lg:px-0 md:px-16 px-6">
      <p className="font-redhat text-[#303030] lg:text-3xl text-2xl pb-2">Get in touch</p>
      <p className="font-poppins text-[#30303099] pb-4">"Have questions or inquiries? Contact us for responsive support and assistance. Let's chat!" </p>
      <div className="flex justify-center gap-4 pb-6 text-2xl">
      <a href=""><FaSquareInstagram/></a>
      <a href=""><FaLinkedinIn/></a>
      <a href=""><FaFacebook/></a>
      <a href=""><FaTwitter/></a>
      <a href=""><FaYoutube/></a>
      </div>
      <input type="email" placeholder="Your email" className="border-black border lg:w-96 w-80 px-2 py-2 rounded-lg mb-4"/>
      <div>
        <button className="bg-black text-white lg:px-8 px-10 py-2 rounded-lg font-poppins font-normal">Join</button>
      </div>
    </div>
  )
}

export default Getintouch
