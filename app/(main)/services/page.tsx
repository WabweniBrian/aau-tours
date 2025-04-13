import Link from "next/link";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceComparison } from "@/components/services/service-comparison";
import { ServiceTestimonials } from "@/components/services/service-testimonials";
import { ServiceBooking } from "@/components/services/service-booking";
import CTA from "@/components/about/cta";

export const metadata: Metadata = {
  title: "Our Services | AAU Tours and Travel",
  description:
    "Explore our comprehensive range of travel services including safaris, gorilla trekking, airport transfers, and customized tour packages.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceComparison />
      <ServiceTestimonials />
      <ServiceBooking />
      <CTA />
    </>
  );
}
