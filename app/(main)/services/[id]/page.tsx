import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceDetailHero } from "@/components/services/service-detail-hero";
import CTA from "@/components/about/cta";
import type { Metadata } from "next";
import { ServiceDetailContent } from "@/components/services/service-detail-content";
import { MotorsportEvents } from "@/components/services/motorsport-events";

interface ServicePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return {
      title: "Service Not Found | AAU Tours and Travel",
    };
  }

  return {
    title: `${service.title} | AAU Tours and Travel`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      {service.id === "motor-tours" && <MotorsportEvents />}
      <ServiceDetailContent service={service} />
      <CTA />
    </>
  );
}
