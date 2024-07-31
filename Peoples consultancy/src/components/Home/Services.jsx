import pen from "../../assets/pen.png";
import datasIcon from "../../assets/data.png";
import uiIcon from "../../assets/ui.png";
import settingIcon from "../../assets/setting.png";
import seoIcon from "../../assets/seo.png";
import digital from "../../assets/digital.png"
const Services = () => {
    return (
        <div className='bg-[#FAFAFA] '>

            <div className='lg:w-[697px] lg:h-[152px] md:w-[483px] md:h-[171px] mx-auto text-center'>
            <p className='font-redhat font-bold text-[#18181B] lg:text-4xl text-xl pb-6'>Our Services</p>
            <p className='font-poppins font-normal text-[#12141D] lg:pb-0 pb-10'>Reinvent your business with our custom IT Services. We offer everything you need to develop successful software, apps, and websites.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center place-content-center lg:px-28 md:px-8 px-6">
                <div className='lg:w-[416px] lg:h-[250px] bg-[#FFFFFF]  px-6 py-4 rounded-xl lg:pt-12 lg:pl-12 border shadow-2xl'>
                    <div>
                        <img src={pen} alt="" className='w-[54px] h-[54px] mb-6'/>
                    </div>
                    <p className='font-redhat font-bold text-[#303030] pb-2'>UI/UX Design</p>
                    <p className='font-inter font-normal text-[#303030CC]'>Our Cyber Security Consulting back your organization with experience.</p>
                </div>
                <div className='lg:w-[416px] lg:h-[250px] bg-[#FFFFFF] px-6 py-4 rounded-xl lg:pt-12 lg:pl-12 border shadow-2xl'>
                    <div>
                        <img src={datasIcon} alt="" className='w-[54px] h-[54px] mb-6'/>
                    </div>
                    <p className='font-redhat font-bold text-[#303030] pb-2'>Analytics</p>
                    <p className='font-inter font-normal text-[#303030CC]'>Our Cyber Security Consulting back your organization with experience.</p>
                </div>
                <div className='lg:w-[416px] lg:h-[250px] bg-[#FFFFFF] px-6 py-4 rounded-xl lg:pt-12 lg:pl-12 border shadow-2xl'>
                    <div>
                        <img src={settingIcon} alt="" className='w-[54px] h-[54px] mb-6'/>
                    </div>
                    <p className='font-redhat font-bold text-[#303030] pb-2'>Development</p>
                    <p className='font-inter font-normal text-[#303030CC]'>Our penetration testing team can be identify cybersecurity vulnerabilities.</p>
                </div>
                <div className='lg:w-[416px] lg:h-[250px] bg-[#FFFFFF] px-6 py-4 rounded-xl lg:pt-12 lg:pl-12 border shadow-2xl'>
                    <div>
                        <img src={seoIcon} alt="" className='w-[54px] h-[54px] mb-6'/>
                    </div>
                    <p className='font-redhat font-bold text-[#303030] pb-2'>Seo</p>
                    <p className='font-inter font-normal text-[#303030CC]'>We can act as your Virtual Chief for Information Security Officer (vCISO).</p>
                </div>
                <div className='lg:w-[416px] lg:h-[250px] bg-[#FFFFFF] px-6 py-4 rounded-xl lg:pt-12 lg:pl-12 border shadow-2xl'>
                    <div>
                        <img src={digital} alt="" className='w-[54px] h-[54px] mb-6'/>
                    </div>
                    <p className='font-redhat font-bold text-[#303030] pb-2'>Branding</p>
                    <p className='font-inter font-normal text-[#303030CC]'>With lots of unique blocks you can easily create a page without coding</p>
                </div>
                <div className='lg:w-[416px] lg:h-[250px] bg-[#FFFFFF] px-6 py-4 rounded-xl lg:pt-12 lg:pl-12 border shadow-2xl'>
                    <div>
                        <img src={uiIcon} alt="" className='w-[54px] h-[54px] mb-6'/>
                    </div>
                    <p className='font-redhat font-bold text-[#303030] pb-2'>Mobile app</p>
                    <p className='font-inter font-normal text-[#303030CC]'>Our Cyber Security Consulting back your organization with experience.</p>
                </div>
            </div>
        </div>
            
    );
};

export default Services;
