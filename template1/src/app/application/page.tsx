import Application from "@/components/application/Application";
import ApplicationHero from "@/components/application/Hero";
import CloudBackground from "@/components/Cloud";

const page = () => {
  return (
    <div className="mt-[90px]">
      <ApplicationHero />
      <div className="relative h-[150px] w-full">
        <CloudBackground width={1500} height={100} />
      </div>
      <Application />
    </div>
  );
};

export default page;
