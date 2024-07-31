import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const ProgramHero = () => {
  return (
    <section>
      <MaxWidthWrapper className="flex justify-between pb-[90px] pt-[100px] lg:pb-[112px] lg:pt-[116px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <p>Welcome to ABC center</p>
          <h1 className="text_title-1">Our program</h1>
          <p>
            Begin Your Journey with ABC Childcare Center. Explore diverse career
            opportunities in a dynamic workplace.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProgramHero;
