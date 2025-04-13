import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";
import ContactFaq from "@/components/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact Us | AAU Tours and Travel",
  description:
    "Get in touch with our team for any inquiries about our tour packages, destinations, or custom travel arrangements in Uganda.",
};

export default function ContactPage() {
  return (
    <main className="bg-brand-green-50 min-h-screen">
      <ContactHero />

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-4 md:gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <ContactMap />
      <ContactFaq />
    </main>
  );
}
