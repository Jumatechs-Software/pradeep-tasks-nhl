import Contact from "@/components/contact/Contact";
import ContactHero from "@/components/contact/Hero";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mt-[90px]">
      <ContactHero />
      <Contact />
    </div>
  );
};

export default ContactPage;
