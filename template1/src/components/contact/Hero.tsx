import MaxWidthWrapper from "../MaxWidthWrapper";

const ContactHero = () => {
  return (
    <section>
      <MaxWidthWrapper className="flex justify-between pb-[90px] pt-[100px] lg:pb-[112px] lg:pt-[116px]">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <p>Welcome to ABC center</p>
          <h1 className="text_title-1">Contact us</h1>
          <p>
            Get in Touch with ABC Childcare Center - Reach out easily for
            inquiries or appointments.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactHero;
