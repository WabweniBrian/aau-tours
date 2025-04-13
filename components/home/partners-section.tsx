"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";

const partners = [
  {
    id: "aau",
    name: "Automobile Association of Uganda",
    logo: "/twi-logo.png",
  },
  {
    id: "utb",
    name: "Uganda Tourism Board",
    logo: "/twi-logo.png",
  },
  {
    id: "uwec",
    name: "Uganda Wildlife Education Centre",
    logo: "/twi-logo.png",
  },
  {
    id: "uwa",
    name: "Uganda Wildlife Authority",
    logo: "/twi-logo.png",
  },
  {
    id: "kcca",
    name: "Kampala Capital City Authority",
    logo: "/twi-logo.png",
  },
  {
    id: "fia",
    name: "FIA - Fédération Internationale de l'Automobile",
    logo: "/twi-logo.png",
  },
];

export function PartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <SectionHeading
          title="Our Trusted Partners"
          subtitle="We collaborate with leading organizations to provide you with the best travel experiences."
          centered
          withAccent={false}
        />

        <div className="mt-12">
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={partner.logo || "/default-image.jpg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-foreground/60">
            As a subsidiary of the Automobile Association of Uganda, we are
            connected to a global network of travel and automotive
            organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
