import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomeFaq = () => {
  const faqs = [
    {
      id: "item-1",
      qus: "Is there a free trial available?",
      ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "item-2",
      qus: "Can I change my plan later?",
      ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "item-3",
      qus: "What is your cancellation policy?",
      ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "item-4",
      qus: "Can other info be added to an invoice?",
      ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "item-5",
      qus: "How does billing work?",
      ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "item-6",
      qus: "How do I change my account email?",
      ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  return (
    <div className="flex flex-col pb-20 lg:pb-[186px]">
      <h3 className="text-center text-accent_maroon_deep text_title-3">
        Frequently asked questions
      </h3>
      <p className="mt-5 text-center text-[20px] leading-[30px] text-accent_slate">
        Find answers to common queries at ABC Childcare Center&apos;s FAQs.
      </p>
      <Accordion
        type="single"
        collapsible
        className="mt-10 w-full max-w-screen-md self-center lg:w-[786px]"
      >
        {faqs.map((faq) => (
          <AccordionItem
            className="text-accent_maroon_deep"
            key={faq.id}
            value={faq.id}
          >
            <AccordionTrigger className="text-start text-base font-medium leading-[28px] lg:text-[18px]">
              {faq.qus}
            </AccordionTrigger>
            <AccordionContent className="text_title-p">
              {faq.ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HomeFaq;
