import React from "react";
import { SectionHeading } from "../common/section-heading";
import { services } from "@/data/home";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="section-padding bg-brand-green-50/10 dots-bg">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a wide range of travel and tour services to make your experience memorable."
          centered
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-border/50 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Image
                  src={service.icon || "/default-image.jpg"}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-foreground/70">{service.description}</p>
              <Link
                href="/services#services-list"
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
