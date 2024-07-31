import img2 from "../../assets/Project.png"
const OurStory = () => {
    return (

        <div
            className="pt-10 pb-10  flex items-center flex-col lg:flex-row gap-12 justify-center lg:justify-around w-full"
        >
            <div className='w-[325px] md:w-[500px] relative mt-10 h-[194px]  rounded-[30px] '>
                <div className=' flex flex-col items-center justify-center gap-4 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[361px] lg:w-[585.76px] h-[407.03px] rounded-[30px] ' >
                    <img  src={img2} alt="" />

                </div>
            </div>
            <div className='flex flex-col gap-3 md:ps-[36px] lg:ps-0 w-[385px] md:w-[527px] md:h-[388px]'>
                <div className='flex flex-col gap-3 '>
                    <p className='font-poppins text-center lg:text-start text-[#5A67A7]'>OUR STORY</p>
                    <h1 className='font-redhat text-center md:text-start w-[370px] md:w-[597px] lg:w-[580px] font-semibold text-[#303030] text-[26px] md:text-[36px]' >
                        Custom IT Solutions for Global Entrepreneurs and Businesses                    </h1>
                </div>
                <p
                    className="font-poppins text-center md:text-start md:text-[16px] text-[#5E5E5E] fw-semibold w-[380px]  md:w-[494px] lg:w-[526.95px] md:px-0 px-5"
                >Since 2019, Peoples Consulting has been dedicated to crafting tailored software solutions that align precisely with clients needs, covering every step from planning and design to integration, testing, and ongoing maintenance. We guarantee the highest quality of IT services by leveraging analytics and agile methodology. Our primary focus is on small businesses and startups, ensuring we deliver top-notch solutions to help them grow and succeed.</p>
            </div>

        </div>


    )
}

export default OurStory