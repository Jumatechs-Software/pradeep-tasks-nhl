import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Staffs = () => {
  const staffs = [
    {
      name: "Mrs. Thompson",
      sector: "Learning and Behavior",
      des: "Introducing Mrs. Thompson: ABC Childcare Center's compassionate learning specialist empowers young brains with her skills in learning and behavior.",
      image: "/images/staff/1.png",
    },
    {
      name: "Mr. Smith",
      sector: "Loga",
      des: "Introducing Mr. Smith, our yoga instructor. Children at ABC Childcare Center learn about the advantages of yoga, which promotes wellness and relaxation, under Mr. Smith's supervision.",
      image: "/images/staff/2.png",
    },
    {
      name: "Mrs. Garcia",
      sector: "Art",
      des: "Unleash your child's creativity with Mrs. Garcia at ABC Childcare Center. From finger painting to sculpture, they  make every session a masterpiece.",
      image: "/images/staff/3.png",
    },
    {
      name: "Mrs. Thompson",
      sector: "learning and behavior",
      des: "Introducing Mrs. Thompson: ABC Childcare Center's compassionate learning specialist empowers young brains with her skills in learning and behavior.",
      image: "/images/staff/4.png",
    },
    {
      name: "Mrs. Roberts",
      sector: "Drama, and movement",
      des: "Through storytelling, role-playing, and dance, Mrs. Roberts encourages children to discover the joy of self-expression and communication.",
      image: "/images/staff/5.png",
    },
    {
      name: "Mrs Robinson",
      sector: "Music",
      des: "Step into the world of music with Mrs. Robinson at ABC Childcare Center. With a focus on melody and harmony,Mrs. Robinson guides children in exploring the wonderful world of music.",
      image: "/images/staff/6.png",
    },
  ];
  return (
    <div className="bg-accent_white py-10 lg:py-[187px]">
      <MaxWidthWrapper className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-x-[51px] lg:gap-y-[87px]">
        {staffs.map((staff) => (
          <StaffCard {...staff} key={staff.name} />
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

const StaffCard = ({
  des,
  name,
  sector,
  image,
}: {
  name: string;
  sector: string;
  des: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col px-[18px] py-4">
      <Image
        src={image}
        width={351}
        height={301}
        alt={name}
        className="rounded-[20px]"
      />
      <h6 className="mt-2 font-gilroy text-[22px] font-semibold leading-9 text-accent_yellow lg:text-[32px]">
        {name}
      </h6>
      <p className="font-poppins font-medium leading-9 text-accent_maroon_deep lg:text-[22px]">
        {sector}
      </p>
      <p className="text-accent_slate">{des}</p>
      <div className="mt-[22px] flex gap-2 self-center">
        <Image width={40} height={40} alt="x" src="/images/staff/twitter.svg" />
        <Image
          width={40}
          height={40}
          alt="facebook"
          src="/images/staff/facebook.svg"
        />
        <Image
          width={40}
          height={40}
          alt="instagram"
          src="/images/staff/insta.svg"
        />
      </div>
    </div>
  );
};

export default Staffs;
