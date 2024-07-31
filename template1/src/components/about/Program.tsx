import React from "react";
import ProgramCard from "../ProgramCard";
import Button from "../ui/Button";

const AboutProgram = () => {
  return (
    <div className="flex w-full flex-col py-16 lg:py-[200px]">
      <p className="text-center text-accent_yellow">Programs </p>
      <h2 className="mb-12 text-center text-accent_maroon_deep text_title-2">
        One of Our Unique Classes
      </h2>
      <div className="mb-12 flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:gap-12">
        <ProgramCard
          className=""
          desc="Dynamic lessons and personalized attention empower children to thrive academically and socially."
          image="/images/about/class1.png"
          title="Leaning class"
        />
        <ProgramCard
          className=""
          desc="Join ABC Childcare's Drawing Class. Personalized instruction fosters creativity. Nurture artistic expression today!"
          image="/images/about/class2.png"
          title="Drawing class"
        />
        <ProgramCard
          className=""
          desc="Explore mindfulness with ABC Childcare's Meditation Class. Guided sessions promote resilience and self-awareness."
          image="/images/about/class3.png"
          title="Meditation class"
        />
      </div>

      <Button className="mt-8 w-fit self-center">See More</Button>
    </div>
  );
};

export default AboutProgram;
