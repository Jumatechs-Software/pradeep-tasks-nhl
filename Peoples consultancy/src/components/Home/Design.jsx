import design1 from "../../assets/design1.png"
import design2 from "../../assets/design2.png"
import design3 from "../../assets/design3.png"
import design4 from "../../assets/design4.png"

const Design = () => {
  return (
    <div>
      <div className="flex justify-around lg:flex-nowrap flex-wrap lg:text-start text-center lg:px-0 px-4">
        <div className="lg:w-[411px] lg:h-[425px]">
          <p className="font-redhat text-[#5A67A7] pb-2">DESIGN</p>
          <p className="font-redhat text-[#303030] lg:text-3xl text-2xl pb-2">Integer nec odio. Praesent libero.</p>
          <p className="font-poppins text-[#999999]">We create aesthetically pleasing designs that attract audiences. Ensuring the design looks great on all screen sizes and resolutions. Creating fast, smooth, and easily accessible purchase options to help users find the right product is our top priority.</p>
        </div>
        <div className="lg:w-[627px] lg:h-[514px] lg:px-0 px-2 text-start lg:pb-0 pb-10">
          <img src={design1} alt="" className="mb-4 lg:w-[607px] lg:h-[246px] h-[220px] "/>
          <p className="font-redhat text-[#303030] pb-2 ">Website and platforms</p>
          <p className="font-poppins text-[#999999] pb-4">Elevate your brand with stunning website and platform designs tailored to your digital marketing needs. Engage your audience with intuitive layouts and cutting-edge aesthetics. Maximize conversions with user-friendly interfaces optimized for all devices.</p>
          <div>
            <button className="font-poppins bg-black text-white px-2 py-2 rounded-lg">Read More</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end lg:px-32 px-4">
      <div className="lg:w-[627px] lg:h-[514px] lg:px-0 px-2 text-start lg:pb-0 pb-10">
          <img src={design2} alt="" className=" mb-4 lg:w-[607px] lg:h-[246px] h-[220px]"/>
          <p className="font-redhat text-[#303030] pb-2">Mobile app</p>
          <p className="font-poppins text-[#999999] pb-4">Revolutionize your mobile presence with our expert app design services. From sleek interfaces to seamless user experiences, we craft apps that stand out. Elevate your brand with our innovative mobile solutions.</p>
          <div>
            <button className="font-poppins bg-black text-white px-2 py-2 rounded-lg">Read More</button>
          </div>
        </div>
        <div className="lg:w-[627px] lg:h-[514px] lg:px-0 px-2 text-start lg:pb-0 pb-10">
          <img src={design3} alt="" className=" mb-4 lg:w-[607px] lg:h-[246px] h-[220px]"/>
          <p className="font-redhat text-[#303030] pb-2">Strategy and branding</p>
          <p className="font-poppins text-[#999999] pb-4">Elevate your brand with our strategic digital marketing solutions. We specialize in crafting compelling strategies to enhance your online presence and drive growth. Let us help you stand out in the digital landscape.</p>
          <div>
            <button className="font-poppins bg-black text-white px-2 py-2 rounded-lg">Read More</button>
          </div>
        </div>
        <div className="lg:w-[627px] lg:h-[514px] lg:px-0 px-2 text-start ">
          <img src={design4} alt="" className=" mb-4 lg:w-[607px] lg:h-[246px] h-[220px]"/>
          <p className="font-redhat text-[#303030] pb-2">Design concept</p>
          <p className="font-poppins text-[#999999] pb-4">Discover the power of impactful design. Elevate your brand with our innovative design concepts. Transform ideas into visually stunning realities.</p>
          <div>
            <button className="font-poppins bg-black text-white px-2 py-2 rounded-lg">Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design
