import AboutMain from "@/components/about/About";
import AboutBanner from "@/components/about/Banner";
import AboutHero from "@/components/about/Hero";
import AboutProgram from "@/components/about/Program";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import CloudBackground from "@/components/Cloud";
import Contact from "@/components/Contact";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const About = () => {
  return (
    <div className="mt-[90px]">
      <AboutHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <BackgroundWrapper>
        <MaxWidthWrapper>
          <AboutMain />
        </MaxWidthWrapper>
      </BackgroundWrapper>
      <AboutBanner />
      <BackgroundWrapper>
        <MaxWidthWrapper>
          <AboutProgram />
        </MaxWidthWrapper>
      </BackgroundWrapper>
      <Contact />
    </div>
  );
};

export default About;
