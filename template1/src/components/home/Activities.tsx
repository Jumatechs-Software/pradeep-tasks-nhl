import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../ui/Button";

const HomeActivities = () => {
  return (
    <div className="flex w-full flex-col pt-20 lg:py-[180px]">
      <h1 className="text-center text-black text_title-2">
        Discover the Activities We Offer
      </h1>
      <div className="my-12 flex w-full flex-wrap justify-center gap-3 md:gap-6 lg:justify-between lg:gap-0">
        <Card
          title="Learning"
          logo="/images/reading_book.svg"
          description="Discover our engaging curriculum designed to nurture each child's unique learning journey."
          className="bg-[#FE6673]"
        />
        <Card
          title="Creative Games"
          logo="/images/jigsaw.svg"
          description="Engage your child's imagination with our creative games, designed to inspire learning and joy."
          className="bg-[#FEC44A]"
        />
        <Card
          title="Activities"
          logo="/images/extracurricular.svg"
          description="Engaging activities that promote learning and development in a fun and nurturing environment."
          className="bg-[#01AE9B]"
        />
      </div>
      <Button className="w-fit self-center">See more</Button>
    </div>
  );
};

type CardProps = {
  logo: string;
  title: string;
  description: string;
  className: string;
};

const Card = ({ description, logo, title, className }: CardProps) => {
  return (
    <div
      className={cn(
        "inline-flex h-[373px] w-[324px] flex-col items-center justify-end gap-7 rounded-[40px] px-[25px] py-[43px]",
        className,
      )}
    >
      <Image
        height={80}
        width={80}
        className="h-20 w-20"
        src={logo}
        alt={title}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h4 className="font-gilroy text-white text_title-4">{title}</h4>
        <p className="text-center font-poppins text-[#F6F6F6] text_title-p">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeActivities;
