import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const CareerBenefits = () => {
  return (
    <div className="mt-20 flex flex-col pb-20 lg:mt-[244px] lg:pb-[169px]">
      <h2 className="mb-10 text-center text-accent_maroon_deep text_title-2">
        Benefits of teacher on our center
      </h2>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[60px]">
        <BenefitsCard
          icon="/images/career/tick.svg"
          title="Medical, Dental, and Vision insurance"
        />
        <BenefitsCard icon="/images/career/dollar.svg" title="Paid Sick Days" />
        <BenefitsCard
          icon="/images/career/learning.svg"
          title="Trainings provided by our School"
        />
        <BenefitsCard
          icon="/images/career/client.svg"
          title="Employer-paid uniform"
        />
        <BenefitsCard
          icon="/images/career/umbrella.svg"
          title="10 paid holidays a year"
        />
        <BenefitsCard icon="/images/career/time.svg" title="Paid time off" />
      </div>
      <Button className="mt-8 self-center">Apply Now</Button>
    </div>
  );
};

type BenefitsCardProps = {
  icon: string;
  title: string;
};
const BenefitsCard = ({ icon, title }: BenefitsCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] rounded-[30px] bg-[#442727] px-8 py-[45px]">
      <Image src={icon} alt="" width={82} height={80} />
      <p className="line-clamp-2 text-center text-[20px] font-medium lg:text-start">
        {title}
      </p>
    </div>
  );
};

export default CareerBenefits;
