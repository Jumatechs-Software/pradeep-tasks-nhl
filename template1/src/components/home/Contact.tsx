import Image from "next/image";
import Input, { Label } from "../ui/Input";
import Button from "../ui/Button";

const HomeContact = () => {
  return (
    <div className="flex flex-col items-center gap-10 pb-20 lg:flex-row lg:gap-[60px] lg:pb-[180px]">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-accent_maroon_deep text_title-2">
          Select Us for Your Child&apos;s Bright Future
        </h1>
        <p className="text-accent_maroon_deep">
          When it comes to securing your child&apos;s bright future, ABC
          Childcare Center stands out as the ideal choice. With a dedication to
          nurturing environments and a team of experienced staff, we provide the
          perfect setting for optimal growth and development.
        </p>
        <div className="flex gap-6">
          <Image src="/twitter.svg" width={24} height={24} alt="x" />
          <Image src="/facebook.svg" width={24} height={24} alt="fb" />
          <Image src="/instagram.png" width={24} height={24} alt="ins" />
          <Image src="/linkedin.png" width={24} height={24} alt="ln" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6">
        <div className="flex max-w-full flex-1 justify-between">
          <div className="flex w-[47%] flex-col gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input placeholder="First Name" name="firstName" id="firstName" />
          </div>
          <div className="flex w-[47%] flex-col gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input placeholder="Last Name" name="lastName" id="lastName" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input placeholder="you@company.com" name="email" id="email" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
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
  );
};

export default HomeContact;
