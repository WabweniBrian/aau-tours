import Image from "next/image";
import React from "react";
import { SectionHeading } from "../common/section-heading";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="section-padding bg-brand-green-50/10 pattern-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/aau-safari.webp"
                alt="About AAU Tours and Travel"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 h-48 w-48 rounded-full bg-primary/20"></div>
            <div className="absolute -left-6 -top-6 z-0 h-32 w-32 rounded-full bg-primary/20"></div>
          </div>

          <div>
            <SectionHeading
              title="Who We Are"
              subtitle="AAU Tours and Travel is a Kampala based tours and travel organization that specializes in providing tailor made affordable travel and tour packages to clients to experience the most of their time and resources with us."
              withAccent
            />

            <p className="mb-6 text-foreground/80">
              We are a subsidiary of the Automobile Association of Uganda which
              is part of the global association of Automobile Associations. We
              are linked to a global network that can provide travel, tours and
              transportation solutions to suit any traveler from the luxurious
              tourist to the budget traveler. Our main objective is to ensure
              satisfaction and value for money.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Image
                    src="/default-image.jpg"
                    alt="Experience"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">Experienced Team</h3>
                <p className="text-sm text-foreground/70">
                  Our team has years of experience in the tourism industry.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Image
                    src="/default-image.jpg"
                    alt="Customization"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">Tailor-Made Tours</h3>
                <p className="text-sm text-foreground/70">
                  We create customized experiences to match your preferences.
                </p>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
