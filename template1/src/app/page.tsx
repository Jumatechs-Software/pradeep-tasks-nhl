import BackgroundWrapper from "@/components/BackgroundWrapper";
import CloudBackground from "@/components/Cloud";
import HomeActivities from "@/components/home/Activities";
import HomeContact from "@/components/home/Contact";
import Educators from "@/components/home/Educators";
import HomeFaq from "@/components/home/Faq";
import HomeHero from "@/components/home/Hero";
import HomeIntro from "@/components/home/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className=".no_scrollbar mt-[90px] overflow-x-hidden">
      <HomeHero />
      <div className="relative h-[100px] w-full md:h-[150px]">
        <CloudBackground
          className="max-w-screen-sm md:max-w-screen-2xl"
          width={1500}
          height={100}
        />
      </div>
      <BackgroundWrapper>
        <MaxWidthWrapper>
          <HomeIntro />
        </MaxWidthWrapper>
      </BackgroundWrapper>

      <BackgroundWrapper>
        <MaxWidthWrapper>
          <HomeActivities />
          <Educators />
        </MaxWidthWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper>
        <MaxWidthWrapper>
          <HomeFaq />
          <HomeContact />
        </MaxWidthWrapper>
      </BackgroundWrapper>
    </div>
  );
}
