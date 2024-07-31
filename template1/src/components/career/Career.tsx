import Image from "next/image";
import React from "react";

const Career = () => {
  return (
    <div className="lg:pt-[90px]">
      <p className="text-center text-accent_yellow">Programs </p>
      <h2 className="mb-3 text-center text-accent_maroon_deep text_title-2">
        One of Our Unique Classes
      </h2>
      <p className="mb-6 text-center text-accent_slate lg:mb-[188px]">
        We are continuously welcoming applications from dedicated, experienced,
        and well-qualified educators who are passionate about fostering the
        growth and development of young learners in a nurturing and supportive
        environment. If you are enthusiastic about helping children build
        intellectual curiosity, self-confidence, and strong moral character, we
        encourage you to consider joining our team.
      </p>
      <Image
        width={1200}
        height={523}
        alt="benefits"
        className="mb-24 flex h-auto w-full min-w-full lg:mb-[260px] lg:w-[1200px]"
        src="/images/career/benefit.png"
      />
    </div>
  );
};

export default Career;
