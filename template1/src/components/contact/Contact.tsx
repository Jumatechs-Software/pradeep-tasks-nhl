import Image from "next/image";
import Input, { Label } from "../ui/Input";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className="relative -mb-[200px] flex w-full items-center justify-center pb-[180px]">
      <Image
        className="absolute left-0 top-0 -z-[20] h-full w-full object-cover"
        width={1440}
        height={1033}
        alt="bg"
        src="/images/contact_bg.png"
      />
      <div className="mb-10 flex flex-col items-center gap-12 px-6 lg:mb-0 lg:flex-row lg:px-0">
        <div className="mt-20 max-w-full rounded-[20px] bg-[#FFFFFF99]/60 px-6 py-10 text-center lg:my-10 lg:my-[60px] lg:px-12 lg:py-16">
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
        <div className="flex max-h-[426px] max-w-[500px] flex-col gap-10 rounded-[20px] bg-[#442727CC] px-4 py-9 lg:px-[65px] lg:py-[105px]">
          <div className="flex items-center justify-between gap-10">
            <Image
              src="/images/contact/location.svg"
              alt="loc"
              width={32}
              height={32}
            />
            <p className="line-clamp-3 text-white">
              123 Elm Street Springfield, Anytown State of Confusion, 98765
              United States
            </p>
          </div>
          <div className="flex items-center justify-between gap-10">
            <Image
              src="/images/contact/call.svg"
              alt="loc"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
            <p className="line-clamp-3 text-white">
              (555) 123-4567 or (555) 123-7654
            </p>
          </div>
          <div className="flex items-center justify-between gap-10">
            <Image
              src="/images/contact/clock.svg"
              alt="loc"
              width={32}
              height={32}
            />
            <p className="line-clamp-3 text-white">
              Monday-Saturday 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
