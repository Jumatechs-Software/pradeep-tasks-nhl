import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Educators = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-[63px] pb-20 md:mt-10 lg:mt-0 lg:flex-row lg:pb-[180px]">
      <div className="flex-1">
        <Image
          height={547}
          width={558}
          src="/images/educator1.png"
          alt="edu1"
        />
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <h3 className="text-accent_maroon_deep text_title-2">
          Caring Educators Devoted to Their Students
        </h3>
        <p className="text-accent_slate text_title-p">
          At ABC Childcare Center, our caring educators are devoted to nurturing
          your child&apos;s growth and development. With years of experience and
          a passion for teaching, our team creates a supportive environment
          where every child feels valued and encouraged.
        </p>
        <div className="text_title_p flex items-center gap-7 text-accent_slate">
          <Image height={35} width={35} src="/tick.svg" alt="tick" />
          <p>Experienced, compassionate caregivers prioritize well-being.</p>
        </div>
        <div className="text_title_p flex items-center gap-7 text-accent_slate">
          <Image height={35} width={35} src="/tick.svg" alt="tick" />
          <p>Focused on fostering social, emotional, and cognitive skills. </p>
        </div>
        <div className="text_title_p flex items-center gap-7 text-accent_slate">
          <Image height={35} width={35} src="/tick.svg" alt="tick" />
          <p>
            Innovative teaching methods spark curiosity and inspire learning.
          </p>
        </div>
        <div className="text_title_p flex items-center gap-7 text-accent_slate">
          <Image height={35} width={35} src="/tick.svg" alt="tick" />
          <p>Open, transparent communication with parents ensured.</p>
        </div>
        <Button className="w-fit">See More</Button>
      </div>
    </div>
  );
};

export default Educators;
