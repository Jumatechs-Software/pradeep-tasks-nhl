import CloudBackground from "@/components/Cloud";
import Contact from "@/components/Contact";
import StaffHero from "@/components/staff/Hero";
import Staffs from "@/components/staff/Staffs";

const page = () => {
  return (
    <div className="mt-[90px]">
      <StaffHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <Staffs />
      <Contact />
    </div>
  );
};

export default page;
