import Image from "next/image";

const ProgramFeedback = () => {
  return (
    <div className="pb-20 lg:pb-[168px]">
      <p className="text-center text-accent_yellow">Testimonials </p>
      <h2 className="mb-12 text-center text-accent_maroon_deep text_title-2">
        Feedback from Our Parents
      </h2>
      <div className="no_scrollbar mt-[76px] flex snap-x snap-mandatory overflow-x-scroll p-5 lg:gap-10">
        <Testimonial
          des=" ABC Childcare Center is simply amazing! Our child has thrived
        academically and socially since starting here. The attentive staff and
        enriching programs make it the perfect place for young learners. Highly
        recommend!"
          link="#"
          quote="As a parent, it's incredibly reassuring to know that she's in
        such capable hands while I'm at work. Thank you,"
        />
        <Testimonial
          des=" ABC Childcare Center is simply amazing! Our child has thrived
        academically and socially since starting here. The attentive staff and
        enriching programs make it the perfect place for young learners. Highly
        recommend!"
          link="#"
          quote="As a parent, it's incredibly reassuring to know that she's in
        such capable hands while I'm at work. Thank you,"
        />
        <Testimonial
          des=" ABC Childcare Center is simply amazing! Our child has thrived
        academically and socially since starting here. The attentive staff and
        enriching programs make it the perfect place for young learners. Highly
        recommend!"
          link="#"
          quote="As a parent, it's incredibly reassuring to know that she's in
        such capable hands while I'm at work. Thank you,"
        />
      </div>
    </div>
  );
};

type TestimonialProps = {
  quote: string;
  des: string;
  link: string;
};

const Testimonial = ({ des, link, quote }: TestimonialProps) => {
  return (
    <div className="flex min-w-full snap-start flex-col items-center gap-5 px-5 lg:min-w-[1112px] lg:flex-row">
      <div className="flex flex-col gap-5 lg:max-w-[600px]">
        <Image src="/quote.svg" className="" alt="" height={42} width={34} />
        <p className="font-gilroy text-[22px] font-semibold leading-[38px] text-accent_maroon_deep">
          {quote}
        </p>
        <p className="text-accent_slate">{des}</p>

        <p className="leading-[28px] text-accent_yellow">Read Success Story</p>
      </div>
      <Image
        src="/images/programs/mark.png"
        className="h-auto w-[473px]"
        alt=""
        height={388}
        width={473}
      />
    </div>
  );
};

export default ProgramFeedback;
