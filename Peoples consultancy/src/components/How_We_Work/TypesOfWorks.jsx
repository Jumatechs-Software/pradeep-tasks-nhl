import dashboard from "../../assets/dashboard.png"
import warning from "../../assets/warning.png"
import resources from "../../assets/resources.png"
import ux from "../../assets/ux.png"
import prototyping from "../../assets/prototyping.png"
import creative_thinking from "../../assets/creative-thinking.png"
import functions from "../../assets/function.png"
import testing from "../../assets/testing.png"
import coding from "../../assets/coding.png"

const TypesOfWorks = () => {
  return (
    <div>
      <div className="bg-[#F7F7F8] flex justify-center items-center gap-4 lg:flex-nowrap flex-wrap lg:mb-10 lg:py-20">
        <div className="lg:w-[313px] lg:h-[288px] md:w-[531px] md:h-[212px] w-[393px] h-[249px] lg:pt-10 lg:text-start text-center lg:relative lg:right-24">
          <p className="font-redhat text-[#303030] lg:text-3xl text-xl pb-2">Analytics</p>
          <p className="font-poppins text-[#999999]">Unlocking insights through data analysis.Tracking performance, optimizing strategies.Analytics-driven decisions for growth.Turning data into actionable intelligence.</p>
        </div>
        
        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 rounded-lg border shadow-2xl">
          <div>
            <img src={dashboard} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-2 lg:pb-4 lg:text-xl">Performance Monitoring</p>
          <p className="font-inter text-[#303030CC] pb-6 md:pb-8 leading-[30px]">Track, Analyze, Optimize: Our 12-Step Performance Monitoring Boosts Your Digital Success!</p>
          
        </div>

        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 rounded-lg border shadow-2xl">
          <div>
            <img src={warning} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-2 lg:pb-4 lg:text-xl">Risk <br />Management</p>
          <p className="font-inter text-[#303030CC] lg:pb-6 pb-2  leading-[30px]">Mitigate digital risks with our strategic and proactive risk management <br /> approach.</p>
          
        </div>

        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 rounded-lg border shadow-2xl">
          <div>
            <img src={resources} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-2 lg:pb-4  lg:text-xl">Resource <br />Optimization</p>
          <p className="font-inter text-[#303030CC] lg:pb-6 pb-9 leading-[30px]">Maximizing digital resources for optimal performance, growth, and market dominance.</p>
          
        </div>
      </div>

      <div className="bg-[#F7F7F8] flex lg:justify-normal justify-center items-center gap-4 lg:flex-nowrap flex-wrap-reverse lg:py-40 py-20 mb-10 lg:px-28 ">
        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 rounded-lg border shadow-2xl">
          <div>
            <img src={ux} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-4 text-lg">User <br />Experience</p>
          <p className="font-inter text-[#303030CC] pb-8 leading-[30px]">Crafting seamless digital journeys through strategic UX design and innovative solutions.</p>
          
        </div>

        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 rounded-lg border shadow-2xl">
          <div>
            <img src={prototyping} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-3 text-xl">Prototyping And Iteration</p>
          <p className="font-inter text-[#303030CC] pb-8 lg:pb-9 leading-[30px]">Streamlined digital marketing with agile design, prototyping, and iterative enhancements.</p>
          
        </div>

        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 rounded-lg border shadow-2xl">
          <div>
            <img src={creative_thinking} alt="" className="w-[60px] h-[60px] mb-4 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-8 text-xl">Creative Design</p>
          <p className="font-inter text-[#303030CC] pb-8 lg:pb-11 leading-[30px]">Crafting compelling visuals tailored to your brand, engaging audiences effectively.</p>
          
        </div>
        <div className="lg:w-[313px] lg:h-[288px] md:w-[531px] md:h-[212px] w-[393px] h-[249px] lg:pt-10 lg:text-end text-center lg:pl-10 lg:px-0 md:px-0 px-8 lg:ml-16">
          <p className="font-redhat text-[#303030] lg:text-3xl text-xl pb-2">Design</p>
          <p className="font-poppins text-[#999999]">We create aesthetically pleasing designs that attract audiences. Ensuring the design looks great on all screen sizes and resolutions. Creating fast, smooth, and easily accessible purchase options to help users find the right product is our top priority.</p>
        </div>
      </div>

      <div className="bg-[#F7F7F8] flex justify-center gap-4 items-center lg:flex-nowrap flex-wrap lg:py-40 py-20 ">
        <div className="lg:w-[313px] lg:h-[288px] md:w-[531px] md:h-[212px] w-[393px] h-[249px] lg:pt-10 lg:text-start text-center lg:px-0 md:px-0 px-8 lg:relative lg:right-24">
          <p className="font-redhat text-[#303030] lg:text-3xl text-xl pb-2">Development</p>
          <p className="font-poppins text-[#999999]">We prioritize efficiency, expertise, and accessibility in delivering top-notch software development services, meeting the demands of businesses in an increasingly remote work-oriented world.</p>
        </div>
        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 border rounded-lg shadow-2xl">
          <div>
            <img src={functions} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-4 text-xl">Creating Functional Solution</p>
          <p className="font-inter text-[#303030CC] pb-8 leading-[30px]">Crafting Effective Development Solutions through Strategic Digital Marketing Expertise.</p>
          
        </div>

        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 border rounded-lg shadow-2xl">
          <div>
            <img src={testing} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-4 text-xl">Testing And Debugging</p>
          <p className="font-inter text-[#303030CC] pb-8 leading-[30px]">Ensuring Smooth Functionality: Testing, Debugging, and Quality Assurance.</p>
        
        </div>

        <div className="bg-[#FFFFFF] lg:w-[250px] h-[320px] w-[223px] px-4 lg:py-2 py-4 border rounded-lg shadow-2xl">
          <div>
            <img src={coding} alt="" className="w-[60px] h-[60px] mb-2 lg:mb-6"/>
          </div>
          <p className="font-redhat text-[#303030] pb-4 text-xl">Development Software</p>
          <p className="font-inter text-[#303030CC] lg:pb-8 pb-6 lg:leading-[30px] leading-[25px]">Innovative software solutions driving efficiency, productivity, and growth for businesses.</p>
          
        </div>
      </div>

    </div>
  )
}

export default TypesOfWorks
