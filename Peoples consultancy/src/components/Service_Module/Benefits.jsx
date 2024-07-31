import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"
import blackimg from "../../assets/blackimg.png"
const Benefits = () => {
  return (
    <div className="bg-black lg:h-[700px] mb-20">
      <div className="relative">
        <img src={blackimg} alt="" className="lg:w-[418px] lg:h-[380px] absolute"/>
        <p className="font-redhat text-white lg:text-4xl text-2xl text-center lg:pt-20 pt-10">Benefits of working with us</p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center text-center lg:pt-20 pt-10 lg:px-0 px-10">
        <div className="text-white lg:h-[228px] lg:w-[472px] lg:pb-0 pb-4">
          <div className="flex justify-center pb-4">
          <img src={work1} alt="" className="h-[80px] w-[80px]"/>
          </div>
          <p className="font-redhat font-bold pb-2 lg:text-xl">Flexible work terms</p>
          <p className="font-poppins font-normal lg:w-[406px] lg:h-[72px] mx-auto text-[#FFFFFF99]">We can adjust our terms according to your project needs and goals fixed budget basis, Time and Materials framework, weekly budget, etc</p>
        </div>
        <div className="text-white lg:h-[228px] lg:w-[472px] lg:pb-0 pb-4">
        <div className="flex justify-center pb-4">
          <img src={work2} alt="" className="h-[80px] w-[80px]"/>
          </div>          
          <p className="font-redhat font-bold pb-2 lg:text-xl">Full spectrum of services</p>
          <p className="font-poppins text-[#FFFFFF99]">From design to development, marketing to maintenance, we offer a complete suite of solutions!</p>
        </div>
        <div className="text-white lg:h-[228px] lg:w-[472px] lg:pb-0 pb-4">
        <div className="flex justify-center pb-4">
          <img src={work3} alt="" className="h-[80px] w-[80px]"/>
          </div>         
          <p className="font-redhat font-bold pb-2 lg:text-xl">We dont outsource work to others</p>
          <p className="font-poppins text-[#FFFFFF99]">With our in-house expertise, your project receives dedicated attention, ensuring superior results and seamless communication throughout the process.</p>
        </div>
        <div className="text-white lg:h-[228px] lg:w-[472px] lg:pb-0 pb-8">
        <div className="flex justify-center pb-4">
          <img src={work4} alt="" className="h-[80px] w-[80px]"/>
          </div>         
          <p className="font-redhat font-bold pb-2 lg:text-xl">We take the most out of technology</p>
          <p className="font-poppins text-[#FFFFFF99]">Empowering your business with cutting-edge technology solutions, we propel you ahead in todays dynamic landscape.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Benefits