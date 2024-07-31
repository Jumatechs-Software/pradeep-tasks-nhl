import website1 from "../../assets/website1.png"
import website2 from "../../assets/website2.png"
import website3 from "../../assets/website3.png"
import website4 from "../../assets/website4.png"
import website5 from "../../assets/website5.png"
import vector from "../../../public/vector.png"
import mock_img from "../../assets/mock-img.png"

const Softwares = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex justify-evenly items-center lg:flex-nowrap flex-wrap lg:text-start text-center">
      <div className="w-[529px] h-[287px]">
        <p className="font-redhat text-[#5A67A7] pb-2">REACT MOBILE APP</p>
        <p className="font-redhat text-[#18181B] lg:text-2xl text-xl pb-2 font-bold">Empower Your Mobile Strategy with Our React App</p>
        <p className="font-poppins text-[#999999] pb-2 lg:px-0 px-8">Experience seamless performance and stunning UI with our React Mobile App. Harness the power of React for your mobile solutions. Elevate your user experience and streamline your app development process.</p>
        <div>
          <button className="font-poppins bg-black text-white px-6 py-2 rounded-lg">View</button>
        </div>
      </div>
      <div className="lg:px-0 px-8">
          <img src={mock_img} alt="" className="w-[507px] h-[581px]"/>
      </div>
      </div>

      <div className="flex justify-around items-center lg:flex-nowrap flex-wrap-reverse lg:text-start text-center">
      <div className="w-[529px] h-[192px]">
        <p className="font-montserrat text-[#1B4D6D] lg:pb-6 pb-2">Management software</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl lg:pb-4 pb-2">ChildEra</p>
        <p className="font-poppins text-[#999999]">A comprehensive app for managing child activities, health records, and enhancing parent-teacher communication.</p>
      </div>
      <div className="lg:pr-20">
        <img src={website1} alt="" className="w-[463px] h-[471px]"/>
      </div>
      </div>
      
      <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:text-start text-center lg:gap-x-40">
      <div>
        <img src={website2} alt="" className="w-[469px] h-[492px]"/>
      </div>
      <div className="w-[648px] h-[252px] lg:relative lg:right-36 md:px-0 px-4">
        <p className="font-montserrat text-[#1B4D6D] lg:pb-6 pb-2">Learning platform</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl text-xl lg:pb-4 pb-2">Easylearn</p>
        <p className="font-poppins text-[#999999] pb-2">Dive into a world of learning possibilities with Easylearn. </p>
        <div className="flex  items-center pb-2 gap-x-2 ">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Explore a curated selection of courses designed for all skill levels.</p>
        </div>
        <div className="flex items-center pb-2 gap-x-2">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Enjoy flexible learning options, including video lectures and quizzes.</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Join a supportive community of learners and experts for collaborative growth</p>
        </div>
      </div>
      </div>
      <div className="flex justify-around items-center lg:flex-nowrap flex-wrap-reverse lg:text-start text-center lg:px-16 ">
      <div className="w-[529px] h-[276px] md:px-0 px-3">
        <p className="font-montserrat text-[#1B4D6D] lg:pb-6 pb-2">Money Transaction app</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl lg:pb-4 pb-2" >Spotpay</p>
        <p className="font-poppins text-[#999999] pb-2">Simplify your transactions with Spotpay, the secure and efficient money transfer app. </p>
        <div className="flex items-center gap-x-2 pb-2 ">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Send money securely in just a tap.</p>
        </div>
        <div className="flex items-center gap-x-2 pb-2 text-start">
          <p><img src={vector} alt="" className="md:w-[18px] w-[24px] md:h-[18px] h-[20px]"/></p>
          <p className="font-poppins text-[#999999]">Experience lightning-fast transactions with instant processing</p>
        </div>
        <div className="flex items-center gap-x-2 text-start">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Stay informed with real-time transaction updates</p>
        </div>
      </div>
      <div className="lg:relative lg:right-24">
        <img src={website3} alt="" className="w-[510px] h-[488px]"/>
      </div>
      </div>
     <div className="flex justify-between items-center lg:flex-nowrap flex-wrap lg:text-start text-center lg:px-20 ">
     <div className="mx-auto">
        <img src={website4} alt="" className="w-[455px] h-[500px]"/>
      </div>
      <div className="w-[529px] h-[192px] lg:mr-52 md:px-0 px-6 mx-auto">
        <p className="font-montserrat text-[#1B4D6D] lg:pb-6 pb-2">Money Transaction app</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl text-xl lg:pb-4 pb-2">Taxmize</p>
        <p className="font-poppins text-[#999999]">Taxmize app manages and optimizes your tax filing by handling personal information, income, deductions, and credits efficiently.</p>
      </div>
     </div>
      <div className="flex justify-around items-center lg:flex-nowrap flex-wrap-reverse lg:text-start text-center lg:px-10 md:pb-0 pb-16">
      <div className="w-[648px] h-[252px] md:px-0 px-4">
        <p className="font-redhat text-[#1B4D6D] lg:pb-6 pb-2">Little bank</p>
        <p className="font-redhat font-bold text-[#18181B] lg:text-4xl text-xl lg:pb-4 pb-2">Wallet track</p>
        <p className="font-poppins text-[#999999] lg:pb-4 pb-2">Take control of your finances with Wallet Track, the ultimate banking companion.</p>
        <div className="flex items-center pb-2 gap-x-2">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Easily monitor your transactions and account balances in real-time. </p>
        </div>
        <div className="flex items-center pb-2 gap-x-2">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Simplify bill payments and automate recurring transactions.</p>
        </div>
        <div className="flex items-center pb-2 gap-x-2">
          <p><img src={vector} alt="" className="w-[18px] h-[18px]"/></p>
          <p className="font-poppins text-[#999999]">Achieve financial goals faster with intuitive money management tools.</p>
        </div>
      </div>
      <div>
        <img src={website5} alt="" className="w-[455px] h-[500px]"/>
      </div>
      </div>
      

    </div>
  )
}

export default Softwares
