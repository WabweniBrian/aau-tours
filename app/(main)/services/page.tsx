import CTA from "@/components/about/cta";
import ServiceBooking from "@/components/services/service-booking";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import type { Metadata } from "next";

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

      <ServiceBooking />
      <CTA />
    </>
  );
}
