import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative flex justify-between pb-[90px] pt-[100px] md:pb-[230px] lg:pb-[112px] lg:pt-[116px]">
        <Image
          className="absolute left-6 top-[87%] h-[28px] w-[47px] bg-transparent md:left-24 md:top-[350px] md:h-[47px] md:w-[77px] lg:left-24 lg:top-20"
          width={77}
          height={47}
          src="images/cloud.svg"
          alt="clouds"
        />
        <Image
          className="absolute left-28 top-[85%] h-[78px] w-[130px] bg-transparent md:left-[30%] md:top-[63%] md:h-[128px] md:w-[212px] lg:left-[226px] lg:top-20"
          width={212}
          height={128}
          src="images/cloud.svg"
          alt="clouds"
        />
        <Image
          className="absolute right-14 top-[80%] h-[28px] w-[47px] bg-transparent md:right-[15%] md:top-[62%] md:h-[47px] md:w-[77px] lg:right-[280px] lg:top-[70px]"
          width={77}
          height={47}
          src="images/cloud.svg"
          alt="clouds"
        />

        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <p>Welcome to ABC center</p>
          <h1 className="text_title-1">About Us</h1>
          <p>
            Discover the story behind ABC Childcare Center and our dedication to
            your child&apos;s growth.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutHero;
