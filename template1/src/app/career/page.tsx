import BackgroundWrapper from "@/components/BackgroundWrapper";
import CareerBenefits from "@/components/career/Benefits";
import Career from "@/components/career/Career";
import CareerHero from "@/components/career/Hero";
import CareerJobs from "@/components/career/Jobs";
import CloudBackground from "@/components/Cloud";
import Contact from "@/components/Contact";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const CareerPage = () => {
  return (
    <div className="mt-[90px]">
      <CareerHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <BackgroundWrapper>
        <MaxWidthWrapper>
          <Career />
          <CareerJobs />
          <CareerBenefits />
        </MaxWidthWrapper>
      </BackgroundWrapper>
      <Contact />
    </div>
  );
};

export default CareerPage;
