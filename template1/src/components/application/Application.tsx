import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Input, { Label } from "../ui/Input";
import Button from "../ui/Button";

const Application = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-accent_white pb-20 lg:pb-[200px] lg:pt-[126px]">
        <MaxWidthWrapper>
          <p className="text-center text-accent_yellow">Career </p>
          <h2 className="mb-3 text-center text-accent_maroon_deep text_title-2">
            Become a Teacher at Our Center
          </h2>
          <p className="text-center text-accent_slate">
            We are continuously welcoming applications from dedicated,
            experienced, and well-qualified educators who are passionate about
            fostering the growth and development of young learners in a
            nurturing and supportive environment. If you are enthusiastic about
            helping children build intellectual curiosity, self-confidence, and
            strong moral character, we encourage you to consider joining our
            team.
          </p>
        </MaxWidthWrapper>
      </div>
      <div className="relative -mb-[200px] flex w-full items-center justify-center pb-[180px]">
        <Image
          className="absolute left-0 top-0 -z-[20] h-auto h-full min-w-full object-cover"
          width={1440}
          height={1000}
          alt="bg"
          src="/images/application/bg.png"
        />
        <div className="my-20 rounded-[20px] bg-[#667085]/40 px-4 py-12 lg:mb-[244px] lg:mt-[112px] lg:bg-[#00000069]/60 lg:px-[187px] lg:py-[61px]">
          <h3 className="text-center text_title-3">Your Information </h3>
          <div className="my-[61px] px-16">
            <div className="flex flex-col flex-wrap gap-5">
              <div className="flex flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="name">
                  Name
                </Label>
                <Input
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="age">
                  Age
                </Label>
                <Input
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  placeholder="Your Age"
                  name="age"
                  id="age"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  placeholder="Your Email Address"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="phone">
                  Mobile Number
                </Label>
                <Input
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  placeholder="Your Phone Number"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="qualification">
                  Qualification
                </Label>
                <Input
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  placeholder="Your Qualification"
                  name="qualification"
                  id="qualification"
                />
                <p className="mb-4 text-sm text-[#FF9F9F]">
                  Achieving an undergraduate degree is crucial.
                </p>
              </div>
              <Label className="text-[#FFF5DD]">Timing</Label>
              <div className="flex flex-1 gap-3">
                <Input
                  value="full-time"
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  type="radio"
                  name="part-time"
                  id="part-time"
                />
                <label htmlFor="part-time" className="text-base text-[#FFF5DD]">
                  Part-time
                </label>
                <Input
                  value="part-time"
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  type="radio"
                  name="full-time"
                  id="full-time"
                />
                <label htmlFor="full-time" className="text-base text-[#FFF5DD]">
                  Full-time
                </label>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="experience">
                  Experience
                </Label>
                <Input
                  className="border-[1px] border-accent_maroon_deep bg-[#FFF5DD]"
                  placeholder="eg: 2 year"
                  name="experience"
                  id="experience"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Label className="text-[#FFF5DD]" htmlFor="address">
                  Address
                </Label>
                <textarea
                  rows={5}
                  className="flex rounded-[8px] border-[1px] border-accent_maroon_deep bg-[#FFF5DD] px-4 py-3 text-accent_slate text_title-p"
                  placeholder="Your Address"
                  name="address"
                  id="address"
                />
              </div>

              <Button className="mt-3 w-fit self-center">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
