import BackgroundWrapper from "@/components/BackgroundWrapper";
import CloudBackground from "@/components/Cloud";
import Contact from "@/components/Contact";
import ProgramFeedback from "@/components/programs/Feedback";
import ProgramHero from "@/components/programs/Hero";
import Programs from "@/components/programs/Program";

const ProgramsPage = () => {
  return (
    <div className="mt-[90px]">
      <ProgramHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <BackgroundWrapper>
        <Programs />
        <ProgramFeedback />
      </BackgroundWrapper>
      <Contact />
    </div>
  );
};

export default ProgramsPage;
