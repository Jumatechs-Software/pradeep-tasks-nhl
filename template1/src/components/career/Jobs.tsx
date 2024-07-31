import React from "react";
import Button from "../ui/Button";

const CareerJobs = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-10 lg:gap-y-20">
      <JobCard
        role="Teacher"
        des="Join ABC Childcare Center as a Teacher. Inspire young minds and cultivate a love for learning in a supportive environment."
        type="Full time/ Part time"
      />
      <JobCard
        role="Teacher"
        des="Join ABC Childcare Center as a Teacher. Inspire young minds and cultivate a love for learning in a supportive environment."
        type="Full time/ Part time"
      />
      <JobCard
        role="Teacher"
        des="Join ABC Childcare Center as a Teacher. Inspire young minds and cultivate a love for learning in a supportive environment."
        type="Full time/ Part time"
      />
      <JobCard
        role="Teacher"
        des="Join ABC Childcare Center as a Teacher. Inspire young minds and cultivate a love for learning in a supportive environment."
        type="Full time/ Part time"
      />
      <JobCard
        role="Teacher"
        des="Join ABC Childcare Center as a Teacher. Inspire young minds and cultivate a love for learning in a supportive environment."
        type="Full time/ Part time"
      />
      <JobCard
        role="Teacher"
        des="Join ABC Childcare Center as a Teacher. Inspire young minds and cultivate a love for learning in a supportive environment."
        type="Full time/ Part time"
      />
    </div>
  );
};
type JobCardProps = {
  type: string;
  role: string;
  des: string;
};

const JobCard = ({ des, role, type }: JobCardProps) => {
  return (
    <div className="flex flex-col gap-[14px] rounded-[6px] border-t-[1.5px] bg-[#FFFAFA] p-8 text-accent_maroon_deep shadow-sm lg:h-[432px]">
      <p className="text-[18px]">{type}</p>
      <h4 className="text-[32px] leading-[66px] text_title-4">{role}</h4>
      <div className="mb-[14px] mt-2 h-[1px] w-full bg-[#333] lg:mt-[17px]" />
      <p className="line-clamp-5 text-accent_slate">{des}</p>
      <Button className="mt-auto rounded-[5px] border-[1px] border-[#FEC44A] bg-accent_yellow_light text-accent_maroon_deep">
        Apply Now
      </Button>
    </div>
  );
};

export default CareerJobs;
