import Image from "next/image";
import Button from "../ui/Button";

const HomeIntro = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-9 text-accent_slate lg:max-h-[675px] lg:flex-row">
      <div className="flex max-h-[408px] w-auto flex-1 md:max-h-[675px]">
        <Image
          width={611}
          height={675}
          src="/images/home_intro.png"
          alt="scarf"
        />
      </div>
      <div className="flex w-[576px] max-w-[576px] flex-col items-center justify-center gap-5 lg:items-start lg:justify-normal">
        <h1 className="text-[24px] leading-[29px] md:text_title-2">
          Welcome to ABC Childcare
        </h1>
        <p className="max-w-[331px] text-center md:max-w-full lg:text-start">
          Welcome to ABC Childcare Center, where we nurture and care for your
          little ones with love and dedication. Our center provides a safe and
          stimulating environment where children can learn, play, and grow. With
          our experienced staff and enriching programs, we strive to create a
          home away from home for your child.
        </p>
        <Button type="button" className="w-fit">
          About us
        </Button>
      </div>
    </div>
  );
};

export default HomeIntro;
