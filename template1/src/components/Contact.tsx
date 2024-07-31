import Image from "next/image";
import Button from "./ui/Button";
import Input, { Label } from "./ui/Input";

const Contact = () => {
  return (
    <div className="relative -mb-80 flex w-full items-center justify-center pb-[360px] lg:px-0 lg:pb-[260px]">
      <Image
        className="absolute bottom-0 left-0 -z-10 flex h-auto min-h-full w-full lg:w-[1440px]"
        width={1440}
        height={1033}
        alt="bg"
        src="/images/contact_bg.png"
      />
      <div className="mx-6 mt-20 max-w-full rounded-[20px] bg-[#FFFFFF99]/60 px-6 py-10 text-center lg:my-10 lg:my-[60px] lg:px-12 lg:py-16">
        <h2 className="mb-5 text-center font-semibold text-accent_maroon_deep text_title-2">
          Join Our Community
        </h2>
        <p className="max-w-full pb-10 text-accent_maroon_deep text_title-p lg:mb-20 lg:max-w-[484px]">
          Step Into Our Community: Where Enriching Experiences Await at Every
          Turn!
        </p>
        <div className="flex max-w-full flex-col flex-wrap gap-4 lg:gap-6">
          <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:gap-8">
            <div className="flex flex-1 flex-col items-start gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                className="w-full"
                placeholder="First Name"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                className="w-full"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label className="text-start" htmlFor="email">
              Email
            </Label>
            <Input placeholder="you@company.com" name="email" id="email" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label className="text-start" htmlFor="phone">
              Phone Number
            </Label>
            <Input placeholder="Phone Number" name="phone" id="phone" />
          </div>
          <div className="flex flex-1 gap-2">
            <Input type="checkbox" name="policy" id="policy" />
            <label htmlFor="policy" className="text-base text-[#667085]">
              You agree to our friendly privacy policy.
            </label>
          </div>
          <Button className="mt-3 w-fit self-center">Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
