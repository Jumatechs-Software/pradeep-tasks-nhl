import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../ui/Button";

const HomeHero = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative flex flex-col justify-between gap-[88px] bg-transparent pb-0 pt-[100px] md:gap-[119px] md:pb-16 lg:flex-row lg:gap-4 lg:pb-[112px] lg:pt-[116px]">
        <Image
          className="absolute left-8 top-[400px] h-[28px] w-[47px] bg-transparent md:left-32 md:top-[460px] md:h-[47px] md:w-[77px] lg:left-[570px] lg:top-9"
          width={77}
          height={47}
          src="images/cloud.svg"
          alt="clouds"
        />
        <Image
          className="absolute left-[150px] top-[355px] h-[78px] w-[130px] bg-transparent md:left-[261px] md:top-[460px] md:h-[128px] md:w-[212px] lg:left-[744px] lg:top-6"
          width={212}
          height={128}
          src="images/cloud.svg"
          alt="clouds"
        />
        <Image
          className="absolute right-12 top-[340px] h-[28px] w-[47px] bg-transparent md:right-28 md:top-[450px] md:h-[47px] md:w-[77px] lg:right-[153px] lg:top-1"
          width={77}
          height={47}
          src="images/cloud.svg"
          alt="clouds"
        />
        <div className="flex max-w-[676px] flex-col gap-4">
          <p>Welcome to ABC center</p>
          <h1 className="text_title-1">
            Nurturing Minds,
            <br /> Growing Futures
          </h1>
          <p>
            Your Trusted Partner in Early Childhood Development Empowering
            Children to Thrive Through Compassionate Care
          </p>
          <Button className="w-fit">Join with us</Button>
        </div>
        <div className="flex items-end justify-end gap-4 lg:justify-normal">
          <div className="relative max-h-[267px]">
            <Image
              className="flex h-[164px] w-auto md:h-[267px]"
              alt="hero"
              height={267}
              width={94}
              src="/images/hero_elipsis.png"
            />
            <div className="absolute left-2 top-[11px] h-[40px] w-[40px] rounded-bl-full rounded-tl-full rounded-tr-full bg-accent_maroon_deep md:left-[15px] md:h-[65px] md:w-[65px]" />
          </div>

          <Image
            className="h-[234px] w-[168px] md:h-[383px] md:w-[275px]"
            alt="hero"
            width={275}
            height={383}
            src="/images/hero_child_elipsis.png"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HomeHero;
