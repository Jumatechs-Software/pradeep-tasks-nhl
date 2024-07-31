import brands1 from "../../assets/about_brand_1.png"
import brands2 from "../../assets/about_brand_2.png"
import brands3 from "../../assets/about_brand_3.png"
import brands4 from "../../assets/about_brand_4.png"

const AboutBrands = () => {
  
  return (
    <div className="flex justify-center lg:gap-32 gap-8 flex-wrap mb-20 mt-20 lg:mb-40">
      <div className="w-[147px] h-[127px] flex flex-col items-center">
        <div>
          <img src={brands1} alt="" className="w-[60px] h-[60px]"/>
        </div>
        <p className="font-montserrat font-bold text-[#263238]">119+</p>
        <p className="font-montserrat font-semibold text-[#263238]">PROJECTS</p>
      </div>
      <div className="w-[147px] h-[127px] flex flex-col items-center">
        <div>
          <img src={brands2} alt="" className="w-[60px] h-[60px]"/>
        </div>
        <p className="font-montserrat font-bold  text-[#263238]">5 YRS</p>
        <p className="font-montserrat font-semibold text-[#263238]">EXPERIENCE</p>
      </div>
      <div className="w-[147px] h-[127px] flex flex-col items-center">
        <div>
          <img src={brands3} alt="" className="w-[60px] h-[60px]"/>
        </div>
        <p className="font-montserrat font-bold text-[#263238]">5000+</p>
        <p className="font-montserrat font-semibold text-[#263238] text-center">INTERNATIONAL CLIENTS</p>
      </div>
      <div className="w-[147px] h-[127px] flex flex-col items-center">
        <div>
          <img src={brands4} alt="" className="w-[60px] h-[60px]"/>
        </div>
        <p className="font-montserrat font-bold text-[#263238]">4.8/5</p>
        <p className="font-montserrat font-semibold text-[#263238]">Average rate</p>
      </div>
   
    </div>
  )
}

export default AboutBrands
