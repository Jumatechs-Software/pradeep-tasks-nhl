/* eslint-disable react/no-unescaped-entities */
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"
import blog4 from "../../assets/blog4.png"
import blog5 from "../../assets/blog5.png"
import vector from "../../assets/vector-right.png"

const AboutBlogs = () => {
  
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center">
        <p className="font-redhat text-[#5A67A7] font-medium pb-2 lg:pb-4">BLOG</p>
        <p className="font-redhat text-[#18181B] font-bold lg:text-4xl text-xl pb-2 lg:pb-4">Insights and Strategies for Success</p>
        <p className="font-poppins text-[#12141D99] font-normal pb-4 lg:px-0 md:px-16">In today's digital age, having a strong online presence is essential for businesses to succeed. </p>
      </div>
      <div className="flex justify-center lg:flex-nowrap flex-wrap lg:px-0 px-8 lg:gap-y-0 gap-y-16 lg:mb-5 mb-10 gap-x-4">
        <div className="bg-white w-[479px] lg:h-[454px] h-[474px] px-4 py-2 border shadow-xl">
          <div>
            <img src={blog1} alt="" className="w-[448px] h-[274px] mb-2"/>
          </div>
          <div>
            <p className="font-poppins font-normal text-[#5391DA] pb-2">12-mar</p>
            <p className="font-poppins font-semibold text-[#12141D] pb-2">Unleashing Tech Prevails</p>
            <p className="font-poppins font-normal text-[#30303099] pb-2">Explore expert insights and actionable strategies for tech success on our blog. </p>
          </div>
          <div className="flex justify-between">
            <a href="" className="font-poppins font-normal text-[#303030]">Read more</a>
            <a href=""><img src={vector} alt="" className="w-[25px] h-[25px]"/></a>
          </div>
        </div>
        <div className="bg-white w-[479px] lg:h-[454px] h-[474px] px-4 py-2 border shadow-xl">
          <div>
            <img src={blog2} alt="" className="w-[448px] h-[274px] mb-2"/>
          </div>
          <div>
            <p className="font-poppins font-normal text-[#5391DA] pb-2">12-mar</p>
            <p className="font-poppins font-semibold text-[#12141D] pb-2">Navigating Tech Landscape </p>
            <p className="font-poppins font-normal text-[#30303099] pb-2">Navigate the ever-changing tech landscape with our insightful articles and proven strategies </p>
          </div>
          <div className="flex justify-between">
            <a href="" className="font-poppins font-normal text-[#303030]">Read more</a>
            <a href=""><img src={vector} alt="" className="w-[25px] h-[25px]"/></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:flex-nowrap flex-wrap gap-4">
        <div className="bg-white w-[313px] h-[380px] px-4 py-4 border shadow-xl">
          <div className="pb-4">
            <img src={blog3} alt="" className="w-[286px] h-[193px] "/>
          </div>
          <div>
            <p className="font-poppins font-semibold text-[#12141D] pb-2">Innovate and Succeed </p>
            <p className="font-poppins font-normal text-[#30303099] pb-2">Innovative approaches and success strategies await you on our tech-focused blog. </p>
          </div>
          <div className="flex justify-between ">
            <a href="" className="font-poppins font-normal text-[#303030]">Read more</a>
            <a href=""><img src={vector} alt="" className="w-[25px] h-[25px]"/></a>
          </div>
        </div>
        <div className="bg-white w-[313px] h-[380px] px-4 py-4 border shadow-xl">
          <div className="pb-4">
            <img src={blog4} alt="" className="w-[286px] h-[193px] "/>
          </div>
          <div>
            <p className="font-poppins font-semibold text-[#12141D] pb-2">Mastering Tech Challenges</p>
            <p className="font-poppins font-normal text-[#30303099] pb-2">Master the challenges of the digital age with our insightful articles and success blueprints. </p>
          </div>
          <div className="flex justify-between ">
            <a href="" className="font-poppins font-normal text-[#303030]">Read more</a>
            <a href=""><img src={vector} alt="" className="w-[25px] h-[25px]"/></a>
          </div>
        </div>
        <div className="bg-white w-[313px] h-[380px] px-4 py-4 border shadow-xl">
          <div className="pb-4">
            <img src={blog5} alt="" className="w-[286px] h-[193px] "/>
          </div>
          <div>
            <p className="font-poppins font-semibold text-[#12141D] pb-2">Strategic Tech Insights</p>
            <p className="font-poppins font-normal text-[#30303099] pb-2">Gain strategic insights and actionable advice to propel your tech ventures forward. </p>
          </div>
          <div className="flex justify-between ">
            <a href="" className="font-poppins font-normal text-[#303030]">Read more</a>
            <a href=""><img src={vector} alt="" className="w-[25px] h-[25px]"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlogs
