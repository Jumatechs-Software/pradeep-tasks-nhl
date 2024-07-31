import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const AboutMain = () => {
  return (
    <div className="-mt-[40px] flex w-full flex-col items-center pt-10 lg:pt-28">
      <Image
        src="/images/about/about.png"
        width={734}
        height={476}
        alt="about"
      />
      <h2 className="mb-7 mt-[67px] text-accent_maroon_deep text_title-2">
        Our success story
      </h2>
      <p className="mb-4 text-center text-accent_slate lg:mb-[67px] lg:text-start">
        ABC Childcare Center&apos;s journey to success is a tale of resilience
        and dedication. What began as a dream to create a nurturing space for
        children has blossomed into a thriving institution known for its
        commitment to excellence. Our success is defined by the countless smiles
        we&apos;ve helped shape, the bonds we&apos;ve forged with families, and
        the impact we&apos;ve had on young lives.
      </p>
      <Button className="w-fit self-center">See Our Program</Button>
      <div className="my-20 flex flex-col items-center gap-8 lg:my-[143px] lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-center text-accent_maroon_deep text_title-2 lg:text-start">
            Why People choose us
          </h2>
          <p className="text-accent_slate">
            ABC Childcare Center stands out for its comprehensive curriculum,
            individualized attention, and focus on building strong foundations
            for lifelong learning. Families trust us for our commitment to
            providing a nurturing environment where children can learn, grow,
            and thrive under the care of experienced educators.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-[30px] bg-[#F1F1F1] p-[30px]">
              <Image
                width={55}
                height={55}
                alt="safe"
                src="/images/about/safe.svg"
              />
              <p className="text-center font-semibold text-accent_maroon_deep">
                Safe and Stimulating Environment:
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-[30px] bg-[#F1F1F1] p-[30px]">
              <Image
                width={55}
                height={55}
                alt="safe"
                src="/images/about/food.svg"
              />
              <p className="text-center font-semibold text-accent_maroon_deep">
                providing nutritious and delicious meals
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-[30px] bg-[#F1F1F1] p-[30px]">
              <Image
                width={55}
                height={55}
                alt="safe"
                src="/images/about/staff.svg"
              />
              <p className="text-center font-semibold text-accent_maroon_deep">
                Experienced and Caring Staff
              </p>
            </div>
          </div>
        </div>
        <Image
          className="flex h-auto max-w-[90%] flex-1 lg:h-[624px] lg:w-[585px]"
          src="/images/about/section1.png"
          width={585}
          height={624}
          alt="educators"
        />
      </div>
    </div>
  );
};

export default AboutMain;
