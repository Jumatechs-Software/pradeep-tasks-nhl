import Image from "next/image";

const AboutBanner = () => {
  return (
    <Image
      className="h-auto max-h-[374px] w-full bg-white object-cover"
      src={"/images/about/banner_bg.png"}
      width={1440}
      height={374}
      alt="banner"
    />
  );
};

export default AboutBanner;
