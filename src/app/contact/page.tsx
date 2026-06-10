import Contact from "@/components/contact/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Lalith Sai Kumar",
  description: "Get in touch with Lalith Sai Kumar - AI/LLM Engineer",
};
const ContactPage = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col justify-center items-center">
      <Contact />
    </section>
  );
};

export default ContactPage;
