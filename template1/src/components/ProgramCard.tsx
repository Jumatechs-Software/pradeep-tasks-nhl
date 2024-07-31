import { cn } from "@/lib/utils";
import Image from "next/image";

type ProgramCardProps = {
  image: string;
  className: string;
  title: string;
  desc: string;
};

const ProgramCard = ({ className, desc, image, title }: ProgramCardProps) => {
  return (
    <div className="w-full rounded-[20px] bg-[#F8F8F8] p-5 md:w-[311px] lg:w-[358px] lg:bg-[#FFF]">
      <div className={cn("flex flex-col gap-4 p-5", className)}>
        <Image
          src={image}
          width={358}
          height={230}
          alt="class"
          className="rounded-[20px]"
        />
        <p className="text-accent_maroon_deep">Leaning class</p>
        <p className="text-accent_slate">
          Dynamic lessons and personalized attention empower children to thrive
          academically and socially.
        </p>
      </div>
      <div className="flex h-[65px] w-full rounded-b-[20px] px-5">
        <div className="flex flex-1 items-center justify-center rounded-bl-[20px] bg-[#FFE6A7] text-center text-[#895D5D]">
          Age 3-5
        </div>
        <div className="flex flex-1 items-center justify-center rounded-br-[20px] bg-[#895D5D] text-center text-[#FFE6A7]">
          08:00am-9:00am
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
