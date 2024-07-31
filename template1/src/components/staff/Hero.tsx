import MaxWidthWrapper from "../MaxWidthWrapper";

const StaffHero = () => {
  return (
    <section>
      <MaxWidthWrapper className="flex justify-between pb-[90px] pt-[100px] lg:pb-[112px] lg:pt-[116px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <p>Welcome to ABC center</p>
          <h1 className="text_title-1">Our staff</h1>
          <p className="text-center">
            Meet Our Team at ABC Childcare Center. Dedicated professionals
            nurture young minds with expertise.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default StaffHero;
